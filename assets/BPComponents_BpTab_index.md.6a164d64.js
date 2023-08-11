import{_ as s,o as a,c as n,O as l}from"./chunks/framework.e90d2b58.js";const C=JSON.parse('{"title":"选项卡组件","description":"","frontmatter":{},"headers":[],"relativePath":"BPComponents/BpTab/index.md","filePath":"BPComponents/BpTab/index.md"}'),o={name:"BPComponents/BpTab/index.md"},t=l(`<h1 id="选项卡组件" tabindex="-1">选项卡组件 <a class="header-anchor" href="#选项卡组件" aria-label="Permalink to &quot;选项卡组件&quot;">​</a></h1><blockquote><p>带有过度动画的选项卡组件</p></blockquote><h2 id="横向选项卡" tabindex="-1">横向选项卡： <a class="header-anchor" href="#横向选项卡" aria-label="Permalink to &quot;横向选项卡：&quot;">​</a></h2><table><thead><tr><th>属性</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>tabs</td><td>Array</td><td>选项</td></tr><tr><td>fontSize</td><td>string</td><td>字体大小</td></tr><tr><td>color</td><td>string</td><td>颜色</td></tr><tr><td>activeColor</td><td>string</td><td>激活中的字体颜色</td></tr><tr><td>squareColor</td><td>string</td><td>滑块颜色</td></tr><tr><td>type</td><td>&#39;wall&#39;</td><td>模式 wall:加左右border</td></tr><tr><td>gapWall</td><td>boolean</td><td>中间是否有墙(border)</td></tr><tr><td>gap</td><td>string</td><td>间距</td></tr><tr><td>capsule</td><td>boolean</td><td>是否为胶囊状</td></tr><tr><td>eqDivi</td><td>boolean</td><td>每一块宽度均分</td></tr><tr><td>pos</td><td>&#39;left&#39; | &#39;center&#39; | &#39;right&#39;</td><td>居左、中、右</td></tr><tr><td>squarePadding</td><td>number</td><td>滑块的内边距</td></tr></tbody></table><h3 id="使用方法" tabindex="-1">使用方法 <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> tabsList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login.3</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">urlName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">signIn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">active</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login.4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">urlName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">signUp</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">active</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> doPickTab </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">选择：</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">e</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Tabs</span><span style="color:#89DDFF;"> :tabs=&quot;tabsList&quot; @pick-tab=&quot;doPickTab&quot; </span><span style="color:#C792EA;">squareColor</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#fff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">font-size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.24rem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#707070</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span></code></pre></div><h3 id="源码" tabindex="-1">源码： <a class="header-anchor" href="#源码" aria-label="Permalink to &quot;源码：&quot;">​</a></h3><p><a href="./source.html">横向选项卡源码</a></p><h2 id="纵向选项卡" tabindex="-1">纵向选项卡： <a class="header-anchor" href="#纵向选项卡" aria-label="Permalink to &quot;纵向选项卡：&quot;">​</a></h2><h3 id="使用方法-1" tabindex="-1">使用方法： <a class="header-anchor" href="#使用方法-1" aria-label="Permalink to &quot;使用方法：&quot;">​</a></h3><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Tabs</span><span style="color:#89DDFF;"> :tabs=&quot;titleList&quot; </span><span style="color:#C792EA;">gap</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.4rem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">fontSize</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">0.16rem</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @pickTab=&quot;handlePickTab&quot; /&gt;</span></span></code></pre></div><h3 id="源码-1" tabindex="-1">源码： <a class="header-anchor" href="#源码-1" aria-label="Permalink to &quot;源码：&quot;">​</a></h3><p><a href="./colSource.html">纵向选项卡源码</a></p>`,13),p=[t];function e(r,c,D,F,y,d){return a(),n("div",null,p)}const A=s(o,[["render",e]]);export{C as __pageData,A as default};