---
layout:     post
title:      "C++快读快写方案——by Rayminn"
subtitle:   " \"读入优化及输出优化\""
date:       2022-12-29 21:23:00
author:     "Rayminn"
header-img: "img/bg-material.jpg"
catalog: true
tags:
    - 优化方案
---

# 0x00 前言

IO(Input and Output)优化是很常用且简单的常数优化，由于C++的stdio(cin&cout)为兼容性实在太慢，在大数据时输入输出不堪重负，此时就要用到IO优化。

本文中的FastIO只适用于整数。由于实数IO优化用途并不广泛且优化效率不高，本文不作讨论。当然，如果你理解本文就可以自行写出很好的实数IO优化。

# 文章目录

[0x01 基本快读](#0x01-基本快读)

[0x02 对于不定参数的快读](#0x02-对于不定参数的快读)

[0x03 基本快写](#0x03-基本快写)

[0x04 对于不定参数的快写](#0x04-对于不定参数的快写)

[0x05 基于fread的快读](#0x05-基于fread的快读)

[0x06 基于fwrite的快写](#0x06-基于fwrite的快写)

[0x07 基于streambuf的IO优化](#0x07-基于streambuf的IO优化)

[0x08 更加亲切的实现方案](#0x08-更加亲切的实现方案)

[0x09 一些tips](#0x09-一些tips)

[0x0A THE END](#0x0a-THE-END)

# 0x01 基本快读

IO优化的原理是将读入方式更换为`getchar`(\<cstdio>)，因为它的速度很快，所以可以利用`getchar`读入字符后再处理为数字，整体时间复杂度相对stdio减小。

```cpp
inline int read(void)
{
    int x = 0;
    char ch = getchar();
    bool f = 0;
    for (; !isdigit(ch); ch = getchar())
    //去掉无用字符(isdigit<cctype>判断是否为数字)
    {
        if (ch == '-')
        {
            f = 1;
            //负数处理
        }
    }
    for (; isdigit(ch); ch = getchar())
    {
        x = (x << 1) + (x << 3) + (ch ^ 48);
        //累乘，当然也可以用x*10+ch-'0'，二者并无区别（具体证明可以进行反汇编）
    }
    if (f)
    {
        x = (~x + 1);
    }
  	return x;
}
```

当然我们也可以通过引用的方式传参：

```cpp
inline void read(int &x)
{
    x = 0;
    char ch = getchar();
    bool f = 0;
    for (; !isdigit(ch); ch = getchar())
    {
        if (ch == '-')
        {
            f = 1;
        }
    }
    for (; isdigit(ch); ch = getchar())
    {
        x = (x << 1) + (x << 3) + (ch ^ 48);
    }
    if (f)
    {
        x = (~x + 1);
    }
    return;
}
```

当然也可以传入指针，但万变不离其宗。

# 0x02 对于不定参数的快读

这个……不好说能不能提速，反正用起来更方便

```cpp
template <typename T, typename... T2>
inline void read(T &x, T2 &...oth)
{
    x = 0;
    char ch = getchar();
    bool f = 0;
    for (; !isdigit(ch); ch = getchar())
    {
        if (ch == '-')
        {
            f = 1;
        }
    }
    for (; isdigit(ch); ch = getchar())
    {
        x = (x << 1) + (x << 3) + (ch ^ 48);
    }
    if (f)
    {
        x = (~x + 1);
    }
    read(oth...);
}
```

首先你要知道什么是`template`，`template <typename T>`代表一个能自动识别的类型（其实原理是把每种类型都进行重载），传入的x是`int`，T就是`int`，传入`long long`T就是`long long`。

`...oth`代表不定参，也就是我们也不知道会有多少参数传入。`read(oth...)`就是对之后所有参进行`read`，类似递归的方式处理所有参数。

# 0x03 基本快写

同样，快写的原理也是字符的IO快于数字的IO。那么最显而易见的方式就是利用递归，递归到第一个digit时将其putc出来。但是毕竟递归比较慢，所以采取非递归方式实现~~（虽然非递归好像也没printf快）~~。

```cpp
inline void __print__(int x)
{
    int p3 = -1;
    if (x < 0)
    {
        putchar('-');
        x = (~x + 1);
    }
    do
    {
        pri_f[++p3] = (x % 10) | 48;
    } while (x /= 10);
    while (p3 >= 0)
    {
        putchar(pri_f[p3--]);
    }
    putchar(' ');
}
```

# 0x04 对于不定参数的快写

同[不定参快读](# 0x02 对于不定参数的快读)，那么这里直接给出代码~~（好耶！又水一节）~~。

```cpp
template <typename T,typename... T2>
inline void print(T x, T2... oth)
{
    int p3 = -1;
    if (x < 0)
    {
        putchar('-');
        x = (~x + 1);
    }
    do
    {
        pri_f[++p3] = (x % 10) | 48;
    } while (x /= 10);
    while (p3 >= 0)
    {
        putchar(pri_f[p3--]);
    }
    putchar(' ');
    print(oth...)
}
```

# 0x05 基于fread的快读

通过[第一节](# 0x01 基本快读)我们可以知道，快读的本质是利用了`getchar`函数比较快的特点，但是有一种比它更快的方法，就是我们将要介绍的`fread`。

其函数原型为：

```cpp
size_t fread(void *buffer,size_t size,size_t count,FILE *stream) 
```

分别为：读入的buf缓冲区，读入类型字节大小，读入的次数和读取文件的指针。

为了压缩码量并优化常数，可以采用**三目运算符**。

```cpp
char __buf[1<<21],*p1=__buf,*p2=__buf;
char getc(void){
    return p1==p2&&(p2=(p1=__buf)+fread(__buf,1,1<<21,stdin),p1==p2)?EOF:*p1++;
}
```

原理是利用`fread`一次性读入1<<21个字符，让`getc`直接读取到buffer中的内容。

**部分版本g++及硬件可能出现fread失效，请自行测试！！！**

# 0x06 基于fwrite的快写

~~好吧其实这节也是水~~

`fwrite`函数原型为：

```cpp
size_t fwrite(const void *ptr,size_t size,size_t nmemb,FILE *stream)
```

代码：

```cpp
inline void output(void){
    fwrite(buf,1,p1+1,stdout);
    p1=-1;
}
inline void putc(const char &x){
    if(p1==p2){
        output();
    }
    buf[++p1]=x;
}
```

当然也可以用指针实现`ptr`，但是就要浪费一个`buf[0]`（强迫症恼）。

**强烈建议在线每个回答后或者离线的程序末尾再单独调用output！！！**

# 0x07 基于streambuf的IO优化

所谓`streambuf`，其实就是`stream buffer`，它是C++\<iostream>底层的缓冲区。

用法：

```cpp
static std::streambuf *inbuf = cin.rdbuf();
static std::streambuf *outbuf = cout.rdbuf();
//获取底层的buffer地址

inbuf->sgetc(char &ch);
outbuf->sputc(const char ch);
//单个IO

inbuf->sgetn(char *buf,MAX_INPUT);
outbuf->sputn(char *buf,MAX_OUTPUT);
//多个IO
```

看着挺亲切哈（手动狗头）。

# 0x08 更加亲切的实现方案

C++风格的IO速度慢的另一个原因是，C++追求std stream均同步，所以C++风格IO的同时会向着C风格IO同步它的buffer，我们可以用以下方案进行解绑。

```cpp
std::ios::sync_with_stdio(false);
cin.tie(NULL);
cout.tie(NULL);
```

**显然，解绑后C风格的stream由于buffer不同步，会变得混乱**

# 0x09 一些tips

- 小数据：

  小数据（字符数小于1000的）快读可能反而变慢。

- 兼容性：

  除了基本IO优化以外，其他奇奇怪怪的东西都会导致stream混乱。

# 0x0A THE END

关于IO优化的介绍就到这里，喜欢可以star我的blog哦~
