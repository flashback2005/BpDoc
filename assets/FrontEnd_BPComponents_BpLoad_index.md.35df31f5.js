import{_ as s,o as a,c as n,Q as o}from"./chunks/framework.9dd9ad44.js";const u=JSON.parse('{"title":"指令转圈圈","description":"","frontmatter":{},"headers":[],"relativePath":"FrontEnd/BPComponents/BpLoad/index.md","filePath":"FrontEnd/BPComponents/BpLoad/index.md","lastUpdated":1693990675000}'),l={name:"FrontEnd/BPComponents/BpLoad/index.md"},p=o(`<h1 id="指令转圈圈" tabindex="-1">指令转圈圈 <a class="header-anchor" href="#指令转圈圈" aria-label="Permalink to &quot;指令转圈圈&quot;">​</a></h1><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> [</span><span style="color:#79B8FF;">doAuth</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">loadDoAuth</span><span style="color:#E1E4E8;">] </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useWrite</span><span style="color:#E1E4E8;">(() </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> { </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">() });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-load</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&#39;loadDoAuth&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> [</span><span style="color:#005CC5;">doAuth</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">loadDoAuth</span><span style="color:#24292E;">] </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useWrite</span><span style="color:#24292E;">(() </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> { </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">() });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-load</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&#39;loadDoAuth&#39;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre></div><p>自定义尺寸:</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-load</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;[loadDoAuth, &#39;50px&#39;]&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-load</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;[loadDoAuth, &#39;50px&#39;]&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre></div><p>使用暗色主题：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">v-load.dark=&quot;[loadDoAuth,</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;50px&#39;</span><span style="color:#FDAEB7;font-style:italic;">]&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#FDAEB7;font-style:italic;">@click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">v-load.dark=&quot;[loadDoAuth,</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;50px&#39;</span><span style="color:#B31D28;font-style:italic;">]&quot;</span><span style="color:#24292E;"> </span><span style="color:#B31D28;font-style:italic;">@click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre></div><h1 id="全局转圈圈" tabindex="-1">全局转圈圈 <a class="header-anchor" href="#全局转圈圈" aria-label="Permalink to &quot;全局转圈圈&quot;">​</a></h1><h2 id="方式1-按需导入使用-推荐" tabindex="-1">方式1. 按需导入使用(推荐)： <a class="header-anchor" href="#方式1-按需导入使用-推荐" aria-label="Permalink to &quot;方式1. 按需导入使用(推荐)：&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> $load </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@cps/BpLoad/index&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#B392F0;">$load</span><span style="color:#E1E4E8;">({ isShow: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// 显示</span></span>
<span class="line"><span style="color:#B392F0;">$load</span><span style="color:#E1E4E8;">({ isShow: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> }); </span><span style="color:#6A737D;">// 隐藏</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> $load </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@cps/BpLoad/index&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6F42C1;">$load</span><span style="color:#24292E;">({ isShow: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// 显示</span></span>
<span class="line"><span style="color:#6F42C1;">$load</span><span style="color:#24292E;">({ isShow: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> }); </span><span style="color:#6A737D;">// 隐藏</span></span></code></pre></div><h2 id="方式2-全局使用" tabindex="-1">方式2. 全局使用： <a class="header-anchor" href="#方式2-全局使用" aria-label="Permalink to &quot;方式2. 全局使用：&quot;">​</a></h2><h3 id="先导入" tabindex="-1">先导入 <a class="header-anchor" href="#先导入" aria-label="Permalink to &quot;先导入&quot;">​</a></h3><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> BpLoading </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@cps/BpLoad/index&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"><span style="color:#E1E4E8;">app.config.globalProperties.$load </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> BpLoading;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> BpLoading </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@cps/BpLoad/index&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"><span style="color:#24292E;">app.config.globalProperties.$load </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> BpLoading;</span></span></code></pre></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">gThis</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentInstance</span><span style="color:#E1E4E8;">().appContext.config.globalProperties;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">gThis.</span><span style="color:#B392F0;">$load</span><span style="color:#E1E4E8;">({ isShow: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> });</span></span>
<span class="line"><span style="color:#6A737D;">// await 一些列一部请求...</span></span>
<span class="line"><span style="color:#E1E4E8;">gThis.</span><span style="color:#B392F0;">$load</span><span style="color:#E1E4E8;">({ isShow: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;"> });</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">gThis</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentInstance</span><span style="color:#24292E;">().appContext.config.globalProperties;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">gThis.</span><span style="color:#6F42C1;">$load</span><span style="color:#24292E;">({ isShow: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> });</span></span>
<span class="line"><span style="color:#6A737D;">// await 一些列一部请求...</span></span>
<span class="line"><span style="color:#24292E;">gThis.</span><span style="color:#6F42C1;">$load</span><span style="color:#24292E;">({ isShow: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;"> });</span></span></code></pre></div>`,15),t=[p];function e(c,r,i,y,E,d){return a(),n("div",null,t)}const g=s(l,[["render",e]]);export{u as __pageData,g as default};
