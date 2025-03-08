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

##### $H^1(\Omega):=\Big\{ u \in L^2(\Omega)\ \ \Big\vert\ \ \forall j \in  \llbracket 1, N \rrbracket, \displaystyle\frac{\partial u}{\partial x_j} \in L^2(\Omega) \text{ in the sense of distributions } \Big\}$

在此有一件重要的事情我們需要注意， $L^2(\Omega)$ 是在 distribution 意義下的 $L^2$ 空間，就是說我們的 $u$ 在 $H^1(\Omega)$ 中其實是個 distribution, 但是我們真的可以在 $L^2(\Omega)$ 中找到一個 $u$ 的表現函數 $f_u$ 滿足對於每一個 $\varphi \in D(\Omega)$, 我們有 $\langle u, \varphi \rangle _{D'\times D} = \displaystyle\int_{\Omega}f_u(x)\varphi(x)dx$ 這件事會成立。因此根據 Partial Differential Equation I 所學：

#### Recall ： $\forall \varphi \in D(\Omega)$, $\forall j \in \llbracket 1, N \rrbracket$, $\Big\langle \displaystyle\frac{\partial u}{\partial x_j},\varphi \Big\rangle = - \Big\langle u ,\displaystyle\frac{\partial \varphi}{\partial x_j} \Big\rangle$

在我們用 $v_j$ 表示 $\displaystyle\frac{\partial u}{\partial x_j}$ 的 $L^2(\Omega)$ 表現式下 ( 也就是 $\forall \varphi \in D(\Omega)$, 

$\Big\langle \displaystyle\frac{\partial u}{\partial x_j} , \varphi \Big\rangle _{D'\times D} = \displaystyle\int_{\Omega}v_j(x)\varphi(x)dx$ )，我們有 ：

##### $\forall j\in\llbracket1,N\rrbracket$, $\exists v_j \in L^2(\Omega)$, s.t. $\forall \varphi\in D(\Omega)$, $-\displaystyle\int_{\Omega} u(x)\frac{\partial \varphi}{\partial x_j}(x)dx=\int_{\Omega}v_j(x)\varphi(x)dx$.

現在我們要定義 $H^1(\Omega)$ 的 inner product：

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

現在我們把定義做一點點延伸一些，我們當然很容易地能定義 $m\in\mathbb{N}^*$, $H^m(\Omega)$ 並且使用一樣的證明手法也可以推知 $H^m(\Omega)$ 會是一個 Hilbert Space. 不過至此，我們可以想一下若是在分數次微分下的情況下，我們是否能給出相應的 Sobolev Space 的定義？ 在開始這個問題之前，我們應該先來想想以下問題：

### 什麼是分數次微分？

當然這邊只給出一個簡單的想法，我們考慮之前 Fourier transform 在 $S(\mathbb{R}^N)$ 上的如下性質：

##### Let $\varphi\in S(\mathbb{R}^N)$, we have $\displaystyle\widehat{\frac{\partial \varphi}{\partial x_j}}(\xi)=i\xi_j \widehat{\varphi}(\xi)$

現在我們再對 $\displaystyle\widehat{\frac{\partial \varphi}{\partial x_j}}(\xi)$ 用 Fourier inversion formula 還原回去，可以得出 $\displaystyle\frac{\partial \varphi}{\partial x_j}(x)=F^{-1}(i\xi_j\widehat{\varphi}(\xi))$, 因此我們可以考慮用 $F^{-1}((i\xi_j)^s\widehat{\varphi}(\xi))$ 去定分數次微分，當 $s\in\mathbb{R}^N$ 時

現在我們將定義 $H^s(\Omega)$, $s\in\mathbb{R}$：

##### $H^s(\mathbb{R}^N):=\Big\{ u\in S'(\mathbb{R}^N) \ \ \Big\vert \ \ \widehat{u}\in L_{loc}^1(\mathbb{R}^N), \xi \mapsto (1+\mid\xi\mid^{}2)^{\frac{s}{2}}\widehat{u}(\xi)\in L^2(\mathbb{R}^N) \Big\}$

並且我們一樣定義 inner product 與 norm

inner product ：

$$\begin{align*} \forall u,v \in H^s(\Omega), \langle u, v \rangle _{H^s(\Omega)} &=\Big\langle (1+\vert\xi\vert^{2})^{\frac{s}{2}}\widehat{u}(\xi), (1+\vert\xi\vert^{2})^{\frac{s}{2}}\widehat{v}(\xi) \Big\rangle _{L^2(\mathbb{R}^N)} \\&=\displaystyle\int_{\mathbb{R}^N} \overline{\widehat{u}(\xi)} \widehat{v}(\xi) (1 + \vert\xi\vert^2)^s \, d\xi \end{align*}$$

在有些書中我們會用 $\langle \xi \rangle$ 去取代 $(1+\vert\xi\vert^{2})^{\frac{1}{2}}$ 這個符號又被稱為 Janpaese norm. 現在我們要來證明 $H^S(\mathbb R ^N)$ 在 $\langle\cdot,\cdot\rangle _{H^s(\mathbb R ^n)}$ 這個 inner product 下，會是個 Hilbert space.

首先，我們給定任意一個在 $H^s(\mathbb R ^N)$ 中的 Cauchy sequence $(\varphi_n)_{n\in\mathbb N}$. 現在，我們用 $\widetilde{\varphi_n}(\xi)$ 表示 $\langle \xi \rangle ^s\widehat{\varphi_n}(\xi)$. 根據 $\Vert \cdot \Vert _{H^s(\mathbb R ^N)}$ 的定義，我們易知 $\widetilde{\varphi}_n$ 會是 $L^2(\mathbb R ^N)$ 中的 Cauchy sequence. 再根據 $(\ \ L^2(\mathbb R ^N),\Vert \cdot \Vert _{L^2(\mathbb R ^N)}\ \ )$ 是 complete. 因此我們可以記 $\widetilde{\varphi}_n \to \widetilde{\varphi}$ 當 $n\to\infty$. 其中 $\widetilde{\varphi}\in L^2(\mathbb R ^N)$. 現在我們根據前面 embedding 的性質，我們有 $L^2(\mathbb R ^N)\underset{\text{continuous}}{\hookrightarrow} \mathcal{S}'(\mathbb R ^N)$. 因此我們得知 $\widetilde{\varphi}\in\mathcal{S}'(\mathbb R ^N)$. 並且我們有 $\langle \xi \rangle ^{-s}$ 會是 moderate increasing. 因此我們得出 $\langle \xi \rangle ^{-s}\widetilde{\varphi}\in \mathcal S'(\mathbb R ^N)$. 接著根據之前的定理：

#### The Fourier transform is a homeomorphism on $\mathcal S'(\mathbb R ^N)$ into itself.

因此我們可以定義 $\varphi:=\mathcal F^{-1}(\langle \xi \rangle ^{-s}\widetilde{\varphi})\in\mathcal S'(\mathbb R ^N)$. 這時我們已知 $\varphi\in H^s(\mathbb R ^N)$. 我們仍須確認是否 $\varphi_n$ 會收斂至 $\varphi$ 在 $H^s(\mathbb R ^N)$ 空間底下。我們直接計算如下：

$$\Vert \varphi_n-\varphi\Vert_{H^s(\mathbb R ^N)}=\Vert \langle \xi \rangle ^{s}(\widehat{\varphi}_n-\widehat{\varphi})\Vert_{L^2(\mathbb R ^N)}=\Vert \widetilde{\varphi}_n-\widetilde{\varphi}\Vert _{L^2(\mathbb R ^N)}\xrightarrow[n\to\infty]{}0$$

因此我們證明了 $\varphi_n\to\varphi$ 當 $n\to\infty$,也就是說 $H^s(\mathbb{R}^N)$ 會是 complete.

現在我們定義出了分數次微分的 Sobolev Space, 但是我們以 Fourier transfrom 所定義出的這種空間是否在 $s$ 是正整數時會恰好吻合？ 也就是說當 $s=m\in\mathbb N^*$ 時，由一般的微分所定出的 Sobolev Space $H^m(\mathbb R^N)$ 是否與由 Fourier transform 所定出的 Sobolev Space 是相同的。以下有定理告訴我們，這件事確實是成立的。

#### Let $m\in\mathbb N^*$, the space $H^m(\mathbb R^N)$ defined by partial derivatives coincide with that defined by Fourier transform. Moreover, such two norms defined in different way are equivalent. 

#### Let $m\in\mathbb N$, there exists constants $C_1(m,N)$, $C_2(m,N)>0$ s.t. for all $\xi\in\mathbb R^N$, $$C_1(m,N)\langle\xi\rangle^{2m}\le\displaystyle\sum_{\vert\alpha\vert\le m}\Big(\prod_{j=1}^N\vert\xi_j\vert^{2\alpha_j}\Big)\le C_2(m,N)\langle\xi\rangle^{2m}$$

現在我們把證明分為兩部分，第一部分是證明 $H^m(\mathbb R^N)=H^s(\mathbb R^N)$ 當 $s=m\in \mathbb N^*$. 第二部分則是證明這兩種 norms 是等價的。

- $H^m(\mathbb R^N)\subseteq H^s(\mathbb R^N)$

令 $u\in H^m(\mathbb R^N)$, id est $u\in L^2(\mathbb R^N)$ 並且滿足 $\forall \alpha\in\mathbb N^N$ 在 $\vert \alpha \vert\le m$ 的情況下，我們都有 $\partial^\alpha u\in L^2(\mathbb R^N)$ in distribution sense. 根據 embedding 的性質 $L^2(\mathbb R^N)\underset{\text{continuous}}{\hookrightarrow}\mathcal S'(\mathbb R^N)$.