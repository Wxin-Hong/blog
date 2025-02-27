---
title: Partial Differential Equation II
icon: hugeicons:book-open-01
order: 4
category:
  - analysis
tag:
  - PDE
---

## Sobolev Spaces

在這個章節我們要介紹 Sobolev Spaces 並且會看到他的一些性質與應用，在這裡我們的 $\Omega$ 都是在 $\mathbb{R}^N$ 中的 domain, 也就是說 $\Omega$ 是個開集且須滿足第一章所說的 $\partial \Omega = \partial \Omega^C$. 接著我們要來看一些空間的定義：

##### $H^1(\Omega):=\Big\{ u \in L^2(\Omega) \mid \forall j \in  \llbracket 1, N \rrbracket, \displaystyle\frac{\partial u}{\partial x_j} \in L^2(\Omega) \text{ in the sense of distributions } \Big\}$

在此有一件重要的事情我們需要注意， $L^2(\Omega)$ 是在 distribution 意義下的 $L^2$ 空間，就是說我們的 $u$ 在 $H^1(\Omega)$ 中其實是個 distribution, 但是我們真的可以在 $L^2(\Omega)$ 中找到一個 $u$ 的表現函數 $f_u$ 滿足對於每一個 $\varphi \in D(\Omega)$, 我們有 $\langle u, \varphi \rangle _{D'\times D} = \displaystyle\int_{\Omega}f_u(x)\varphi(x)dx$ 這件事會成立。因此根據 Partial Differential Equation I 所學：

#### Recall ： $\forall \varphi \in D(\Omega)$, $\forall j \in \llbracket 1, N \rrbracket$, $\Big\langle \displaystyle\frac{\partial u}{\partial x_j},\varphi \Big\rangle = - \Big\langle u ,\displaystyle\frac{\partial \varphi}{\partial x_j} \Big\rangle$

在我們用 $v_j$ 表示 $\displaystyle\frac{\partial u}{\partial x_j}$ 的 $L^2(\Omega)$ 表現式下 ( 也就是 $\forall \varphi \in D(\Omega)$, 

$\Big\langle \displaystyle\frac{\partial u}{\partial x_j} , \varphi \Big\rangle _{D'\times D} = \displaystyle\int_{\Omega}v_j(x)\varphi(x)dx$ )，我們有 ：

##### $\forall j\in\llbracket1,N\rrbracket$, $\exists v_j \in L^2(\Omega)$, s.t. $\forall \varphi\in D(\Omega)$, $-\displaystyle\int_{\Omega} u(x)\frac{\partial \varphi}{\partial x_j}(x)dx=\int_{\Omega}v_j(x)\varphi(x)dx$.

現在我們要定義 $H^1(\Omega)$ 的內積：

$$\begin{align*} \forall u,v \in H^1(\Omega), \langle u, v \rangle _{H^1(\Omega)} &=\displaystyle\int_{\Omega}\overline{u(x)}v(x)dx + \displaystyle\sum_{j=1}^{N}\int_{\Omega}\overline{\frac{\partial u}{\partial x_j}(x)}\frac{\partial v}{\partial x_j}(x)dx\\&=\displaystyle\int_{\Omega}\overline{u(x)}v(x)dx + \displaystyle\int_{\Omega}\nabla{\overline{u(x)}}\nabla{v(x)}dx \end{align*}$$

由這個定義，我們可以得出 $H^1(\Omega)$ 的 norm $\Vert \cdot \Vert _{H^1(\Omega)}$：

$$\begin{align*} \forall u \in H^1(\Omega), \Vert u \Vert _{H^1(\Omega)} &=\Big(\displaystyle\int_{\Omega} \mid u(x) \mid ^2 dx + \displaystyle\sum_{j=1}^{N}\int_{\Omega} \mid \frac{\partial u}{\partial x_j}(x) \mid ^2 dx \Big)^{\frac{1}{2}} \\&=\Big(\displaystyle\int_{\Omega}\mid u(x) \mid ^2 dx + \displaystyle\int_{\Omega}\mid\nabla{u(x)}\mid ^2 dx \Big)^{\frac{1}{2}} \end{align*}$$

現在有一個重要的性質：

#### $H^1(\Omega)$ is Hilbert Space.

要證明 $H^1(\Omega)$ 是個 Hilbert Space 其實就是要驗證在 $\Vert \cdot\Vert _{H^1(\Omega)}$ 這個 norm 底下， $(H^1(\Omega),\Vert \cdot\Vert _{H^1(\Omega)})$ 是不是 complete. 因此現在我們任意給定一個 Cauchy sequence $u_n \in H^1(\Omega)$, 我們要證明 $u_n$ 收斂於 $H^1(\Omega)$ 裡，以 $\Vert \cdot\Vert _{H^1(\Omega)}$ 這個 norm 作為測距下。 

##### Claim： $u_n \rightarrow u\in L^2(\Omega)$ as $n\rightarrow \infty$

首先 $u_n$ 是在 $( H^1(\Omega) ,\Vert \cdot \Vert _{H^1(\Omega)} )$ 中的 Cauchy sequence, 現在我們觀察 $\Vert \cdot \Vert _{H^1(\Omega)}$ 與 $\Vert \cdot \Vert _{L^2(\Omega)}$ 的形式：

$$\begin{cases} \Vert w \Vert _{H^1(\Omega)} &= \Big(\displaystyle\int_{\Omega}\mid w(x) \mid ^2 dx + \displaystyle\int_{\Omega}\mid\nabla{w(x)}\mid ^2 dx \Big)^{\frac{1}{2}} \\ \Vert w \Vert _{L^2(\Omega)} &= \Big(\displaystyle\int_{\Omega}\mid w(x) \mid ^2 dx \Big)^{\frac{1}{2}} \end{cases}$$

從上式中易知 $\Vert u_n \Vert _{L^2(\Omega)}\le\Vert u_n \Vert _{H^1(\Omega)}$, 因此根據 $u_n$ 是 Cauchy sequence 我們有 $\forall \varepsilon >0$, $\exists N\in\mathbb{N}$ s.t. $\forall n, p \in \mathbb{N}$ with $N\le n$, $\Vert u_n-u_{n+p} \Vert _{L^2(\Omega)}\le\Vert u_n-u_{n+p} \Vert _{H^1(\Omega)}\le\varepsilon$. 接著，因為 $H^1(\Omega)\subset L^2(\Omega)$, 我們有 $u_n$ 是在 $( L^2(\Omega) ,\Vert \cdot \Vert _{L^2(\Omega)} )$ 中的 Cauchy sequence. 最後因為 $( L^2(\Omega) ,\Vert \cdot \Vert _{L^2(\Omega)} )$ 是 complete, 我們有 $u_n\rightarrow u$ 在 $L^2(\Omega)$, 當 $n\rightarrow \infty$. 我們設定 $u=\displaystyle\lim_{n\to\infty}u_n$. 

##### Claim： $\displaystyle\frac{\partial u_n}{\partial x_j}\rightarrow v_j \in L^2(\Omega)$ as $n\rightarrow \infty$

我們設定 $\displaystyle\frac{\partial u_n}{\partial x_j}$ 在 $L^2(\Omega)$ 的表現函數為 $v_{j,n}$, 根據與上面相似的證明手法，我們能證明這個論述，並且我們設定 $v_j=\displaystyle\lim_{n\to\infty}v_{j,n}$.

現在，雖然我們知道對於任意一組在 $H^1(\Omega)$ 中的 Cauchy sequence $u_n$ 都會收斂到一個 $L^2(\Omega)$ 的函數 $u$, 並且 $\displaystyle\frac{\partial u_n}{\partial x_j}$ 在 $L^2(\Omega)$ 的表現函數 $v_{j,n}$ 也會收斂到 $v_j$, 我們仍然尚未完成 $H^1(\Omega)$ 是 complete 的證明，接下來我們要驗證最後一件事：

##### Is $\displaystyle\frac{\partial }{\partial x_j}(\lim_{n\to\infty}u_n)=\lim_{n\to\infty}\frac{\partial u_n}{\partial x_j}$ in distribution sense ?

現在我們回想我們的每一個 $u_n$ 都是落在 $H^1{\Omega}$, 因此回憶定義，我們有：

$$\forall j\in\llbracket1,N\rrbracket,\forall \varphi\in D(\Omega),-\displaystyle\int_{\Omega} u_n(x)\frac{\partial \varphi}{\partial x_j}(x)dx=\int_{\Omega}v_{j,n}(x)\varphi(x)dx.$$

現在根據 embedding, $L^2(\Omega)\underset{\text{continuous}}{\hookrightarrow} D'(\Omega)$ 我們知道對於任意在 $L^2(\Omega)$ 收斂的數列，都會同時在 $D'(\Omega)$ 的空間下收斂，因此我們現在讓 $n\to\infty$, 可以得到：

$$-\displaystyle\int_{\Omega} u(x)\frac{\partial \varphi}{\partial x_j}(x)dx=\int_{\Omega}v_{j}(x)\varphi(x)dx$$

如此我們便證明了 $\displaystyle\frac{\partial u}{\partial x_j}=v_j\in L^2(\Omega)$. 這也說明了 $u\in H^1(\Omega)$. 
