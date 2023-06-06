import{_ as e,o,c as a,S as t}from"./chunks/framework.c5d8c147.js";const m=JSON.parse('{"title":"源码解读","description":"","frontmatter":{},"headers":[],"relativePath":"guide/guide.md","filePath":"guide/guide.md","lastUpdated":1686056666000}'),s={name:"guide/guide.md"},d=t('<h1 id="源码解读" tabindex="-1">源码解读 <a class="header-anchor" href="#源码解读" aria-label="Permalink to &quot;源码解读&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>项目采用 monorepo 开发</p><ul><li>components 各个子组件(主要是 treeNode)</li><li>composables 将各个方法、属性的实现使用 hook 抽离，可维护性高</li></ul><p>如果需要开发新功能，只需要在 composables 中新建 hook，并且在 <code>composables/index.ts</code> 中导出，然后在 <code>composables/use-tree.ts</code> 或者 <code>tree.tsx</code> 中选择合适的时机注册</p>',5),c=[d];function i(r,l,n,_,p,u){return o(),a("div",null,c)}const f=e(s,[["render",i]]);export{m as __pageData,f as default};
