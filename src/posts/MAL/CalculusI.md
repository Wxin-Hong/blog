---
title: Essential Calculus I
icon: hugeicons:book-open-01
order: 1
category:
  - analysis
tag:
  - essentialcalculus
---


## Limits

在這個章節，我們要來認識函數的極限。首先我們的函數先從比較直觀的實數集合開始定義，想像在整個實數 $\mathbb{R}$ 中我們定義一個函數 $f$：$\mathbb{R} \rightarrow \mathbb{R}$ 滿足 $f(x)=x$, 在初中我們都學過這個函數圖形就是個通過原點並滿足斜率為1的一條斜直線。很輕易地在實數中任意的取一點 $a$, 我們讓 $x$ 趨近 $a$, 我們用 $x \rightarrow a$ 表示這種關係，則我們應該可以預期 $f(x) \rightarrow a$ 這件事會發生。 現在我們可以問出一個問題：

### 什麼是趨近?

我們可以想想一些現實的情況，假設有兩個人 $A$, $B$ 並且 $A$ 朝著 $B$ 的方向移動. 當 $A$ 移動到與 $B$ 之間相距5公尺，這樣算不算近？ 當然有些人可能不服，會說：「我跟我朋友在玩安全之吻時嘴巴都已經碰在一起了，5公尺的距離非常遠。」從這裡可以看得出那些我們所說的近不近，其實都是相對的，若是我們只是定義某一個固定的距離 $S$，我們就說只要 $A$ 移動到與 $B$ 之間相距小於距離 $S$, 那麼 $A$ 趨近 $B$，這對數學而言並不是個很好的描述。 因此這邊給出了一個非常有意思的想法關於如何定義 $A$ 趨近 $B$ 的這件事 (為了以求這個訂法是有效的，我們設定 $A$ 與 $B$ 在實數集中)： 

### $\forall \varepsilon > 0$, $d(A,B) \le \varepsilon$

這邊的 $d(A,B)$ 代表的是 $A$ 與 $B$ 之間的距離。這個定義翻成白話文的意思就是：現在我們任意的給出一個長度出來 $\varepsilon$，$A$ 與 $B$ 之間的距離都要比這個長度還要來的短。

### 注意： 任意的給出這個意思就是說，在整個實數集上所有的非0非負實數，我們都可以丟出去當成 $\varepsilon$ 

現在我們要來討論什麼是極限值的概念：我們可以想像如果有一天從地 **O** 要去某個目的地 **A** 時，我們使用 Google Map 作為我們的導航，假設在前往地A的路途中有一個中繼站 **B**。顯然地，我們一定會在某個時刻 $t_0$ 恰巧經過中繼站 **B**，那我們可以說當時間趨近於 $t_0$ 時，我們的位置會趨近於中繼站 **B**。此時我們可以說中繼站 **B** 是時間趨近於 $t_0$ 時的位置極限值。以下是 $Cauchy$ 先生所給出的嚴謹的數學極限值定義：

### $\forall \varepsilon > 0$, $\exists \delta > 0$, s.t. if $\vert x-a \vert \le \delta$ then $\vert f(x)-f(a) \vert \le \varepsilon$

這裡的 $f$ 是一個定義在 $\mathbb R$ 的子集合上的函數，並且 $f$ 的 codomain 是 $\mathbb{R}$. 這個定義翻成白話文就是在說任意給你一個大於0的實數值 $\varepsilon$, 我們都可以找到一個大於0的實數值 $\delta$ 使得只要 $x$ 趨近 $a$ 時，則 $f(x)$ 就會趨近 $f(a)$. 既然要學習數學，那我們當然要學習這個定義是怎麼運作的，以下給出了一些例子：

### Let $f$ be a function defined on $\mathbb R$ with $f(x)=x$, show that $f(0) \rightarrow 0$ if $x \rightarrow 0$.

這是一個很好做證明的例子，首先我們觀察在任意給定一個 $\varepsilon > 0$ 下， $\vert f(x)-f(0) \vert < \varepsilon$ 這件事如果發生的話，那麼根據 $f(x)=x$, 我們知道 $\vert x-0 \vert \le \varepsilon$, 因此我們可以寫出 $\forall \varepsilon > 0$, we choose $\delta = \varepsilon$, s.t. if $\vert x-0 \vert \le \delta$ then $\vert f(x)-f(0) \vert= \vert x-0 \vert \le \varepsilon$. 因此我們證明了這個例子的正確性。

### Let $f$ be a function defined on $\mathbb R$ with $f(x)=x^2$, show that $f(2) \rightarrow 4$ if $x \rightarrow 2$.

在這個例子中我們一樣觀察在任意給定一個 $\varepsilon > 0$ 下， $\vert f(x)-f(2) \vert < \varepsilon$ 這件事如果發生的話，那麼根據 $f(x)=x^2$, 我們知道 $\vert x^2-4 \vert = \vert x+2 \vert \cdot \vert x-2 \vert < \varepsilon$, 現在我們可以考慮把 $\\vert x-2 \vert$ 分成兩種部份：
$$
\begin{cases} 
\vert x-2 \vert &< 1 \\ 
\vert x-2 \vert &\ge 1 \\
\end{cases}
$$
在 $\vert x-2 \vert = 1$ 的情況下，我們知道 $\vert x+2 \vert = \vert (x-2) + 4 \vert \le \vert x-2 \vert + 4=5$, 因此我們可以得到 $\vert x^2-4 \vert \le 5$, 根據這個性質我們可以把 $\varepsilon$ 分成 

$$
\begin{cases}
\varepsilon &\ge 5\\
\varepsilon &<5\\
\end{cases}
$$
在 $\varepsilon \ge 5$ 的情況下，我們只要取 $\delta=1$ 就可以滿足極限的定義，因此現在我們考慮 $\varepsilon < 5$ 的情況。在這個情況下我們都可以找到有 $x$ 滿足 $\vert x-2 \vert < 1$, 這時候若是我們取 $\delta = \frac{\varepsilon}{5}$, 那麼我們可以得出 $\vert x^2-4 \vert= \vert x+2 \vert \cdot \vert x-2 \vert \le \varepsilon$, 因此我們現在可以來完成這個例子的證明了：
$\forall \varepsilon >0$, we choose $\delta=\min{ 1, \frac{\varepsilon}{5} }$ s.t. if $\vert x-2 \vert \le \delta$ then $\vert f(x)-4 \vert = \vert x^2- 4 \vert\le \varepsilon$