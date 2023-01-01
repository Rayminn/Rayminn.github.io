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

- $a \mid b$，$a \mid c$，则有$\forall x,y \in Z$，$a\mid bx+cy$。
- $a\mid b$，$b\mid c $，则有$ a\mid c$。
- $a\mid b$，则$ma\mid mb $ $(m\neq 0)$。
- $a \mid b$，则$\lvert a \rvert \leq \lvert b \rvert$或$b=0$。

## 2. 素数

### 2.1 定义

设$p \in \Z,p \not \in \{0,\pm 1\}$，如果它除了显然约数$\pm 1,\pm p$以外没有其他的约数，那么$p$就称为素数，即$p\in \P$。$\exists x\in \complement_{\Z}(\P\cup\{0,\pm1\})$，$x$为合数。

### 2.2 基本性质

- 若$d>1$，$q \in \P$且$d\mid q$，则$d=q$。
- 对于$a\in \Z,a\neq 1$，$\exists q \in \P,q\mid a$。

## 3. 带余除法

### 3.1 定义

设$a,b$是两个给定整数且$a\neq 0$，那么一定存在唯一的一对整数$(q,r)$，满足$b=qa+r,0\leq r < \lvert a \rvert$。

### 3.2 推论

- $a\mid b \Leftrightarrow r=0$
- 再设$d$是一给定整数，那么一定存在唯一的一对整数$(q',r')$，满足$b=q'a+r',d\leq r' < \lvert a \rvert+d$。
