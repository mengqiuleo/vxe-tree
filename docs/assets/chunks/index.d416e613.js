import{b as p,f as c,_ as f,w as m}from"./use-form-item.df37cbde.js";import{d as n,l as o,Y as g,o as y,D as d,E as w,r as _,n as v,f as a,K as b,N as C}from"./framework.99602b11.js";const R=Symbol("rowContextKey"),S=["start","center","end","space-around","space-between","space-evenly"],h=["top","middle","bottom"],x=p({tag:{type:String,default:"div"},gutter:{type:Number,default:0},justify:{type:String,values:S,default:"start"},align:{type:String,values:h,default:"top"}}),j=n({name:"ElRow"}),k=n({...j,props:x,setup(r){const t=r,s=c("row"),l=o(()=>t.gutter);g(R,{gutter:l});const u=o(()=>{const e={};return t.gutter&&(e.marginRight=e.marginLeft=`-${t.gutter/2}px`),e}),i=o(()=>[s.b(),s.is(`justify-${t.justify}`,t.justify!=="start"),s.is(`align-${t.align}`,t.align!=="top")]);return(e,K)=>(y(),d(C(e.tag),{class:v(a(i)),style:b(a(u))},{default:w(()=>[_(e.$slots,"default")]),_:3},8,["class","style"]))}});var E=f(k,[["__file","/home/runner/work/element-plus/element-plus/packages/components/row/src/row.vue"]]);const z=m(E);export{z as E,R as r};