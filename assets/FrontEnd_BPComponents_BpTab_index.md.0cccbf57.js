import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.a65da182.js";const F=JSON.parse('{"title":"选项卡组件","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/BPComponents/BpTab/index.md","filePath":"FrontEnd/BPComponents/BpTab/index.md","lastUpdated":1694162971000}'),o={name:"FrontEnd/BPComponents/BpTab/index.md"},t=l(`<h1 id="选项卡组件" tabindex="-1">选项卡组件 <a class="header-anchor" href="#选项卡组件" aria-label="Permalink to &quot;选项卡组件&quot;">​</a></h1><blockquote><p>带有过度动画的选项卡组件</p></blockquote><h2 id="横向选项卡" tabindex="-1">横向选项卡： <a class="header-anchor" href="#横向选项卡" aria-label="Permalink to &quot;横向选项卡：&quot;">​</a></h2><table><thead><tr><th>属性</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>tabs</td><td>Array</td><td>选项</td></tr><tr><td>fontSize</td><td>string</td><td>字体大小</td></tr><tr><td>color</td><td>string</td><td>颜色</td></tr><tr><td>activeColor</td><td>string</td><td>激活中的字体颜色</td></tr><tr><td>squareColor</td><td>string</td><td>滑块颜色</td></tr><tr><td>type</td><td>&#39;wall&#39;</td><td>模式 wall:加左右border</td></tr><tr><td>gapWall</td><td>boolean</td><td>中间是否有墙(border)</td></tr><tr><td>gap</td><td>string</td><td>间距</td></tr><tr><td>capsule</td><td>boolean</td><td>是否为胶囊状</td></tr><tr><td>eqDivi</td><td>boolean</td><td>每一块宽度均分</td></tr><tr><td>pos</td><td>&#39;left&#39;</td><td>&#39;center&#39;</td></tr><tr><td>squarePadding</td><td>number</td><td>滑块的内边距</td></tr></tbody></table><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">tabsList</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">([</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;login.3&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    urlName: </span><span style="color:#9ECBFF;">&#39;signIn&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    active: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    id: </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    text: </span><span style="color:#9ECBFF;">&#39;login.4&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    urlName: </span><span style="color:#9ECBFF;">&#39;signUp&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    active: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">doPickTab</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">e</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;选择：&#39;</span><span style="color:#E1E4E8;">, e);</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:tabs=&quot;tabsList&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@pick-tab=&quot;doPickTab&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">squareColor</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;#fff&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">font-size</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0.24rem&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;#707070&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">tabsList</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">([</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;login.3&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    urlName: </span><span style="color:#032F62;">&#39;signIn&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    active: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    id: </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    text: </span><span style="color:#032F62;">&#39;login.4&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    urlName: </span><span style="color:#032F62;">&#39;signUp&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    active: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">doPickTab</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">e</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;选择：&#39;</span><span style="color:#24292E;">, e);</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:tabs=&quot;tabsList&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@pick-tab=&quot;doPickTab&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">squareColor</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;#fff&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">font-size</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;0.24rem&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;#707070&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><h3 id="源码" tabindex="-1">源码： <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码：&quot;">​</a></h3><p><a href="./source">横向选项卡源码</a></p><h2 id="纵向选项卡" tabindex="-1">纵向选项卡： <a class="header-anchor" href="#纵向选项卡" aria-label="Permalink to &quot;纵向选项卡：&quot;">​</a></h2><h3 id="使用方法-1" tabindex="-1">使用方法： <a class="header-anchor" href="#使用方法-1" aria-label="Permalink to &quot;使用方法：&quot;">​</a></h3><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Tabs</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">:tabs=&quot;titleList&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">gap</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0.4rem&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">fontSize</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;0.16rem&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@pickTab=&quot;handlePickTab&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Tabs</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">:tabs=&quot;titleList&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">gap</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;0.4rem&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">fontSize</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;0.16rem&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@pickTab=&quot;handlePickTab&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><h3 id="源码-1" tabindex="-1">源码： <a class="header-anchor" href="#源码-1" aria-label="Permalink to &quot;源码：&quot;">​</a></h3><p><a href="./colSource">纵向选项卡源码</a></p>`,13),p=[t];function e(c,r,E,y,i,d){return a(),n("div",null,p)}const h=s(o,[["render",e]]);export{F as __pageData,h as default};