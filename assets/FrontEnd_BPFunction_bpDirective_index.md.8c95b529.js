import{_ as s,o as a,c as l,Q as n}from"./chunks/framework.9dd9ad44.js";const F=JSON.parse('{"title":"常用指令","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/BPFunction/bpDirective/index.md","filePath":"FrontEnd/BPFunction/bpDirective/index.md","lastUpdated":1693990675000}'),o={name:"FrontEnd/BPFunction/bpDirective/index.md"},p=n(`<h1 id="常用指令" tabindex="-1">常用指令 <a class="header-anchor" href="#常用指令" aria-label="Permalink to &quot;常用指令&quot;">​</a></h1><h2 id="输入框-input-指令" tabindex="-1">输入框(input)指令 <a class="header-anchor" href="#输入框-input-指令" aria-label="Permalink to &quot;输入框(input)指令&quot;">​</a></h2><h3 id="v-max" tabindex="-1">v-max <a class="header-anchor" href="#v-max" aria-label="Permalink to &quot;v-max&quot;">​</a></h3><p>描述：最大值，做大能输入多少</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">123</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 则输入框最大值不能超过123</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">123</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 则输入框最大值不能超过123</span></span></code></pre></div><h3 id="v-min" tabindex="-1">v-min <a class="header-anchor" href="#v-min" aria-label="Permalink to &quot;v-min&quot;">​</a></h3><p>描述：最小值，做小能输入多少</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-min</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">123</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 则输入框最小值不能小于123</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">123</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 则输入框最小值不能小于123</span></span></code></pre></div><h3 id="v-number" tabindex="-1">v-number <a class="header-anchor" href="#v-number" aria-label="Permalink to &quot;v-number&quot;">​</a></h3><p>描述：只能输入数字类型</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-number</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-number</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><h3 id="v-double" tabindex="-1">v-double <a class="header-anchor" href="#v-double" aria-label="Permalink to &quot;v-double&quot;">​</a></h3><p>描述：限制输入框输入 小数 类型</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-double</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 限制2位小数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-double</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#F97583;">-</span><span style="color:#79B8FF;">2</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 限制2位小数（可以为负数）</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-double</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 限制2位小数</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-double</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#D73A49;">-</span><span style="color:#005CC5;">2</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 限制2位小数（可以为负数）</span></span></code></pre></div><h3 id="v-int" tabindex="-1">v-int <a class="header-anchor" href="#v-int" aria-label="Permalink to &quot;v-int&quot;">​</a></h3><p>描述：限制输入框只能输入 正整数 类型</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-int</span><span style="color:#E1E4E8;"> /&gt; // 整数(不包括负数)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-int</span><span style="color:#24292E;"> /&gt; // 整数(不包括负数)</span></span></code></pre></div><h3 id="v-integer" tabindex="-1">v-integer <a class="header-anchor" href="#v-integer" aria-label="Permalink to &quot;v-integer&quot;">​</a></h3><p>描述：限制输入框只能输入 整数(包括负数) 类型</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">input</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-int</span><span style="color:#E1E4E8;"> /&gt; // 整数(包括负数)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">input</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-int</span><span style="color:#24292E;"> /&gt; // 整数(包括负数)</span></span></code></pre></div><h2 id="其他指令" tabindex="-1">其他指令 <a class="header-anchor" href="#其他指令" aria-label="Permalink to &quot;其他指令&quot;">​</a></h2><h3 id="v-load" tabindex="-1">v-load <a class="header-anchor" href="#v-load" aria-label="Permalink to &quot;v-load&quot;">​</a></h3><p>描述：转圈圈</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-load</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">loadAuth</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // loadAuth是一个boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-load</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[loadAuth, </span><span style="color:#9ECBFF;">&#39;50px&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 传入数组，则第二项是要尺寸</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-load</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dark</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">loadAuth</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 黑色主题</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-load</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">loadAuth</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // loadAuth是一个boolean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-load</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[loadAuth, </span><span style="color:#032F62;">&#39;50px&#39;</span><span style="color:#24292E;">]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 传入数组，则第二项是要尺寸</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-load</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dark</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">loadAuth</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 黑色主题</span></span></code></pre></div><h3 id="v-disable" tabindex="-1">v-disable <a class="header-anchor" href="#v-disable" aria-label="Permalink to &quot;v-disable&quot;">​</a></h3><p>描述：置灰</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-disable</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">isDisable</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // isDisable是一个boolean</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-disable</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">message</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;不能点击&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">: isDisable}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 置灰时候点击弹出消息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-disable</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[{message: </span><span style="color:#9ECBFF;">&#39;不能点击1&#39;</span><span style="color:#E1E4E8;">, value: isDisable1}, {message: </span><span style="color:#9ECBFF;">&#39;不能点击2&#39;</span><span style="color:#E1E4E8;">, value: isDisable2}]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 支持多个条件</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-disable</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">isDisable</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // isDisable是一个boolean</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-disable</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{</span><span style="color:#6F42C1;">message</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;不能点击&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">: isDisable}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 置灰时候点击弹出消息</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-disable</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[{message: </span><span style="color:#032F62;">&#39;不能点击1&#39;</span><span style="color:#24292E;">, value: isDisable1}, {message: </span><span style="color:#032F62;">&#39;不能点击2&#39;</span><span style="color:#24292E;">, value: isDisable2}]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 支持多个条件</span></span></code></pre></div><p>可以添加修饰符<code>.dark</code>，使得按钮变成灰色</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-disable</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">dark</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">{</span><span style="color:#B392F0;">message</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;不能点击&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">: isDisable}</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt; // 置灰时候点击弹出消息</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-disable</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">dark</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">{</span><span style="color:#6F42C1;">message</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;不能点击&#39;</span><span style="color:#24292E;">, </span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">: isDisable}</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt; // 置灰时候点击弹出消息</span></span></code></pre></div><p>注意不要传入一个proxy对象，只能是plain-object</p><h3 id="v-img" tabindex="-1">v-img <a class="header-anchor" href="#v-img" aria-label="Permalink to &quot;v-img&quot;">​</a></h3><p>描述：图片懒加载与加载失败等处理</p><h4 id="lazy" tabindex="-1">.lazy <a class="header-anchor" href="#lazy" aria-label="Permalink to &quot;.lazy&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@img/home.png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-img</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">lazy</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@img/holder.png&#39;</span><span style="color:#E1E4E8;">)</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@img/home.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-img</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">lazy</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@img/holder.png&#39;</span><span style="color:#24292E;">)</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">/&gt;</span></span></code></pre></div><p>会预先加载<code>.lazy</code>的图片，这里即:holder.png</p><p>等待<code>@img/home.png</code>加载完成后，holder.png则会替换成 home.png</p><h4 id="backup" tabindex="-1">.backup <a class="header-anchor" href="#backup" aria-label="Permalink to &quot;.backup&quot;">​</a></h4><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@img/home.png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-img</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">backup</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[</span><span style="color:#B392F0;">require</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@img/holder.png&#39;</span><span style="color:#E1E4E8;">)]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@img/home.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-img</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">backup</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[</span><span style="color:#6F42C1;">require</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@img/holder.png&#39;</span><span style="color:#24292E;">)]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>防止<code>@img/home.png</code>加载失败的情况。</p><p>如果 src 加载失败，则会加载 backup 的图片，可传入多个图片资源</p><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;@img/home.png&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-img</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">backup</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#79B8FF;">3</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;@img/home.png&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-img</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">backup</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#005CC5;">3</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p>如果 src 加载失败，则会重复请求3次</p>`,42),e=[p];function t(c,r,E,y,i,d){return a(),l("div",null,e)}const h=s(o,[["render",t]]);export{F as __pageData,h as default};
