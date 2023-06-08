import{_ as r,H as o,o as l,c as i,C as a,a as e,J as n,V as s}from"./chunks/framework.e1c69d6b.js";const k=JSON.parse('{"title":"vxeTree","description":"","frontmatter":{},"headers":[],"relativePath":"guide/design.md","filePath":"guide/design.md","lastUpdated":1686058001000}'),d={name:"guide/design.md"},h={id:"vxetree",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#vxetree","aria-label":`Permalink to "vxeTree <el-badge value="0.2.0" type='primary'></el-badge>"`},"​",-1),p=s('<p><img src="https://mengqiuleo.github.io/vxe-tree/logo.svg" alt="logo"></p><h2 id="项目背景" tabindex="-1">项目背景 <a class="header-anchor" href="#项目背景" aria-label="Permalink to &quot;项目背景&quot;">​</a></h2><p>虽然 <code>element-plus</code> 和 <code>ant-design</code> 等 UI 库中都提供了 <code>tree</code> 组件，但是当前开源组件库中，无法将所有方法和属性集中到单一的树形组件中，所以我希望写一个功能齐全的业务通用组件。</p><br><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><ul><li>Vue3</li><li>TSX</li><li>TypeScript</li><li>Sass</li><li>Rollup</li><li>Jest</li></ul><p>组件中各种方法和属性的实现，大量采用 hook 的方式进行开发，将状态逻辑与 UI 逻辑分离，使代码更加清晰和易于维护。</p><h2 id="组件logo" tabindex="-1">组件LOGO <a class="header-anchor" href="#组件logo" aria-label="Permalink to &quot;组件LOGO&quot;">​</a></h2><p>灵感来源于 <a href="https://vxetable.cn/#/table/start/install" target="_blank" rel="noreferrer">vxe-table</a>，这是一个 vue 表格解决方案，因此取该组件的前缀，希望实现一个 vue3 tree组件解决方案。</p><h2 id="鸣谢" tabindex="-1">鸣谢 <a class="header-anchor" href="#鸣谢" aria-label="Permalink to &quot;鸣谢&quot;">​</a></h2><p><a href="http://element-plus.org/zh-CN/" target="_blank" rel="noreferrer">element-plus</a></p><p><a href="https://antdv.com/components/overview" target="_blank" rel="noreferrer">ant-design</a></p><p><a href="https://www.naiveui.com/zh-CN/light" target="_blank" rel="noreferrer">Naive UI</a></p><p><a href="https://vue-devui.github.io/" target="_blank" rel="noreferrer">Vue DevUI</a></p>',14);function _(u,g,m,b,v,f){const t=o("el-badge");return l(),i("div",null,[a("h1",h,[e("vxeTree "),n(t,{value:"0.2.0",type:"primary"}),e(),c]),p])}const T=r(d,[["render",_]]);export{k as __pageData,T as default};