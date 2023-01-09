---
layout:     post
title:      "浅谈OI中的初等数论"
subtitle:   " \"妈妈再也不用担心我的数论了\""
date:       2022-12-30 21:18:00
author:     "Rayminn"
header-img: "img/post-bg-os-metro.jpg"
catalog: true
tags:
    - 数学理论
---

# 0x00 前言

本文将讲解OI中一个重要部分——初等数论，预计会是一篇定期更新的大长文。

本来是打的$\LaTeX$，但是太难打了（

# 0x01 基本概念

## 1. 整除

### 1.1 定义

设$a,b \in Z$且$a \neq 0$，如果$\exists q \in Z$，使得$b = a*q$，则称$b$可以被$a$整除，记作$a \mid b$。且称$b$是$a$的倍数，$a$是$b$的因数，否则，称$b$不能被$a$整除, 记做$a \not \mid b$。

### 1.2 基本性质

- $a \mid b$，$a \mid c$，则有$\forall x,y \in Z$，$a\mid bx+cy$；
- $a\mid b$，$b\mid c $，则有$ a\mid c$；
- $a\mid b$，则$ma\mid mb $ $(m\neq 0)$；
- $a \mid b$，则$\lvert a \rvert \leq \lvert b \rvert$或$b=0$。

## 2. 素数

### 2.1 定义

设$p \in Z,p \not \in \{0,\pm 1\}$，如果它除了显然约数$\pm 1,\pm p$以外没有其他的约数，那么$p$就称为素数，即$p\in P$。$\exists x\in \complement_{Z}(P\cup\{0,\pm1\})$，$x$为合数。

### 2.2 基本性质

- 若$d>1$，$q \in P$且$d\mid q$，则$d=q$；
- 对于$a\in Z,a\neq 1$，$\exists q \in P,q\mid a$。

## 3. 带余除法

### 3.1 定义

设$a,b$是两个给定整数且$a\neq 0$，那么一定存在唯一的一对整数$(q,r)$，满足$b=qa+r,0\leq r < \lvert a \rvert$。

### 3.2 推论

- $a\mid b \Leftrightarrow r=0$
- 再设$d$是一给定整数，那么一定存在唯一的一对整数$(q',r')$，满足$b=q'a+r',d\leq r' < \lvert a \rvert+d$。

## 4.同余

### 4.1 定义

设$m\neq 0$，若$m\mid a-b$，即$a-b=km$，则称$m$为模，$a$在模$m$情况下同余于$b$，$b$是$a$对$m$的剩余，记作$a\equiv b \ (\text{mod } m)$。

$a\equiv b \ (\text{mod } m)\Leftrightarrow a\equiv b \ (\text{mod } -m)$，所以总假设$m\geq 1$.

### 4.2 基本性质

- 同余是一种等价关系（具有反身性$aRa$、传递性$aRb\Rightarrow bRa$、传递性$aRb,bRc\Rightarrow aRc$）；
- $a\equiv b \ (\text{mod } m),c\equiv d \ (\text{mod } m)\Rightarrow a+b \equiv c+d \ (\text{mod } m)$；
- $a\equiv b \ (\text{mod } m),c\equiv d \ (\text{mod } m)\Rightarrow ab \equiv cd \ (\text{mod } m)$；
- $f(x):=\sum_{i=0}^{n}a_ix^i,g(x):=\sum_{i=0}^{n}b_ix^i$，$\forall i,a_i,b_i \in Z,a_i\equiv b_i \ (\text{mod } m)$，则有$\forall a,b , a\equiv b \ (\text{mod } m)\Rightarrow f(a)\equiv g(b) \ (\text{mod } m)$。

## 5. 最大公约数

### 5.1 定义

设$a,b$是两个整数，如果$d\mid a,d\mid b$那么$d$就被称为$a,b$的公约数。

设$a,b$是两个不全为零的整数，把$a,b$的公约数中最大的一个称为$a,b$的最大公约数，记作$\gcd(a,b)$在不引起歧义的情况下也可记作$(a,b)$。

### 5.2 基本性质

- $\forall x \in Z,(a,b)=(a,b+a*x)$；
- 若$p\in P$，则$\exists a \in Z,(p,a)\in\{1,p\}$。

## 6.裴蜀定理

### 6.1 定理内容

设$a,b$是不全为零的整数，则$\exists x,y \in Z$使得$ax+by=(a,b)$。

### 6.2 证明

设集合$A=\{p:=ax+by\mid p>0,x,y\in Z\}$，即其表示所有$a,b$线性组合出的数的集合。

$A$显然具有良序性，一定存在最小正元素$d$。

> 良序原理：自然数集的任意非空子集均有在某序下的最小元素，默认为$\leq$。

显然$\forall i,j\in A,i\ mod\ j \neq 0\Rightarrow i\ mod\ j \in A$。

那么对于任意$n\in A$，假设$\exists 0< i <d，i \equiv n\ (\text{mod } d)$，这样的$i$应当为集合$A$中一元素，与$d$的定义矛盾，所以并不存在这样的$i$，所以$d\mid n$。

由于$a,b\in A$，所以$d\mid a,d \mid b$，即$d$为$a,b$的公因数。

对于任意公因数$c$，$c\mid a,c\mid b$，那么$\forall n \in A,c\mid n$，$d\in A$，则有$c\mid d$，所以$d$为$a,b$的最大公因数，即$d=(a,b)$。

