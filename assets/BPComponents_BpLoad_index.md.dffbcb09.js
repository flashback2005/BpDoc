import{_ as s,o as a,c as n,O as l}from"./chunks/framework.e90d2b58.js";const C=JSON.parse('{"title":"指令转圈圈","description":"","frontmatter":{},"headers":[],"relativePath":"BPComponents/BpLoad/index.md","filePath":"BPComponents/BpLoad/index.md"}'),o={name:"BPComponents/BpLoad/index.md"},p=l(`<h1 id="指令转圈圈" tabindex="-1">指令转圈圈 <a class="header-anchor" href="#指令转圈圈" aria-label="Permalink to &quot;指令转圈圈&quot;">​</a></h1><h2 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h2><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">doAuth</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> loadDoAuth</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useWrite</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">auth</span><span style="color:#F07178;">() </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-load</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">loadDoAuth</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> @click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre></div><p>自定义尺寸:</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-load</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">[loadDoAuth, &#39;50px&#39;]</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre></div><p>使用暗色主题：</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> v-load.dark=&quot;[loadDoAuth, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">50px</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]&quot; @click=&quot;doAuth&quot;&gt;点击授权&lt;/button&gt;</span></span></code></pre></div><h1 id="全局转圈圈" tabindex="-1">全局转圈圈 <a class="header-anchor" href="#全局转圈圈" aria-label="Permalink to &quot;全局转圈圈&quot;">​</a></h1><h2 id="方式1-按需导入使用-推荐" tabindex="-1">方式1. 按需导入使用(推荐)： <a class="header-anchor" href="#方式1-按需导入使用-推荐" aria-label="Permalink to &quot;方式1. 按需导入使用(推荐)：&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> $load </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@cps/BpLoad/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#82AAFF;">$load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">isShow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 显示</span></span>
<span class="line"><span style="color:#82AAFF;">$load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">isShow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 隐藏</span></span></code></pre></div><h2 id="方式2-全局使用" tabindex="-1">方式2. 全局使用： <a class="header-anchor" href="#方式2-全局使用" aria-label="Permalink to &quot;方式2. 全局使用：&quot;">​</a></h2><h3 id="先导入" tabindex="-1">先导入 <a class="header-anchor" href="#先导入" aria-label="Permalink to &quot;先导入&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// main.js</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> BpLoading </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@cps/BpLoad/index</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> app </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">createApp</span><span style="color:#A6ACCD;">(App)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">app</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">globalProperties</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$load </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> BpLoading</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h4 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h4><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> gThis </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurrentInstance</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">appContext</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">globalProperties</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">gThis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">isShow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// await 一些列一部请求...</span></span>
<span class="line"><span style="color:#A6ACCD;">gThis</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$load</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">isShow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,15),t=[p];function e(c,r,D,y,F,i){return a(),n("div",null,t)}const d=s(o,[["render",e]]);export{C as __pageData,d as default};