import{_ as s,o as a,c as e,S as o}from"./chunks/framework.c5d8c147.js";const y=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart.md","filePath":"guide/quickstart.md","lastUpdated":1686056666000}'),t={name:"guide/quickstart.md"},n=o(`<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><p>本节将介绍如何在项目中使用 vxe-tree。</p><h2 id="引入" tabindex="-1">引入 <a class="header-anchor" href="#引入" aria-label="Permalink to &quot;引入&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-comment);">// main.ts</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> vxeTree </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;vxe-tree&#39;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-comment);">//import the styles</span></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;vxe-tree/dist/index.css&#39;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-constant);">Vue</span><span style="color:var(--shiki-token-function);">.use</span><span style="color:var(--shiki-color-text);">(vxeTree);</span></span></code></pre></div><p>增加 ts 的类型声明文件:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-token-keyword);">declare</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">module</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;vxe-tree&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki css-variables"><code><span class="line"><span style="color:var(--shiki-color-text);">&lt;</span><span style="color:var(--shiki-token-string-expression);">vxe-tree</span><span style="color:var(--shiki-color-text);"> :</span><span style="color:var(--shiki-token-function);">data</span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);">&quot;</span><span style="color:var(--shiki-color-text);">data</span><span style="color:var(--shiki-color-text);">&quot;</span><span style="color:var(--shiki-color-text);"> /&gt;</span></span></code></pre></div>`,8),r=[n];function l(i,p,c,k,d,h){return a(),e("div",null,r)}const u=s(t,[["render",l]]);export{y as __pageData,u as default};