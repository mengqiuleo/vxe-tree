import{E as m,a as v,b}from"./chunks/index.ae7386b8.js";import{d as w,b as C,w as _,H as A,o as e,c as D,C as s,J as E,f as l,D as F,E as u,F as i,R as L,G as x,a as c,t as S}from"./chunks/framework.e1c69d6b.js";import"./chunks/use-form-item.de485d38.js";import"./chunks/event.e06a23af.js";import"./chunks/index.f5f5713a.js";const q={style:{height:"28px"}},P={style:{"margin-right":"20px"}},V=s("span",{style:{"margin-left":"10px"}},"开启勾选",-1),R=w({__name:"check",setup(d){const p=C(!0),k=C(["both","downward","upward","none"]),a=C("both"),r=C([{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"},{label:"Leaf node 1-1-2"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}]);_(p,n=>{n===!1?a.value=!1:(a.value="both",r.value=[{label:"Parent node 1",children:[{label:"Parent node 1-1",children:[{label:"Leaf node 1-1-1"},{label:"Leaf node 1-1-2"}]},{label:"Leaf node 1-2"}]},{label:"Leaf node 2"}])});const g=n=>{console.log("toggleChange node:",n)},B=n=>{console.log("checkChange node:",n)},h=n=>{console.log("selectChange node:",n)},f=n=>{console.log("nodeClick node:",n)};return(n,o)=>{const y=A("vxe-tree");return e(),D(i,null,[s("div",q,[s("label",P,[V,E(l(m),{modelValue:p.value,"onUpdate:modelValue":o[0]||(o[0]=t=>p.value=t)},null,8,["modelValue"])]),p.value?(e(),F(l(b),{key:0,modelValue:a.value,"onUpdate:modelValue":o[1]||(o[1]=t=>a.value=t),direction:"row"},{default:u(()=>[(e(!0),D(i,null,L(k.value,t=>(e(),F(l(v),{label:t},{default:u(()=>[c(S(t),1)]),_:2},1032,["label"]))),256))]),_:1},8,["modelValue"])):x("",!0)]),E(y,{data:r.value,check:a.value,onToggleChange:g,onCheckChange:B,onSelectChange:h,onNodeClick:f},null,8,["data","check"])],64)}}}),N=s("h1",{id:"可勾选",tabindex:"-1"},[c("可勾选 "),s("a",{class:"header-anchor",href:"#可勾选","aria-label":'Permalink to "可勾选"'},"​")],-1),G=s("p",null,[c("通过 "),s("code",null,"check"),c(" 属性开启勾选功能。")],-1),H=JSON.parse('{"title":"可勾选","description":"","frontmatter":{},"headers":[],"relativePath":"components/check.md","filePath":"components/check.md","lastUpdated":1686049976000}'),U={name:"components/check.md"},z=Object.assign(U,{setup(d){return(p,k)=>{const a=A("vxe-code");return e(),D("div",null,[N,G,E(a,{source:"%3Cpre%20v-pre%20style%3D%22margin%3A%200%3B%22%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Eheight%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2028px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Elabel%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Emargin-right%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2020px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Emargin-left%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E5%BC%80%E5%90%AF%E5%8B%BE%E9%80%89%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-switch%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EopenCheck%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-switch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-radio-group%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-if%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EopenCheck%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcurrentStrategy%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Edirection%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Erow%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-radio%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-for%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estrategy%20of%20checkStrategy%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Alabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Estrategy%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%7B%7B%20strategy%20%7D%7D%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-radio%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-radio-group%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Evxe-tree%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edata%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Acheck%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcurrentStrategy%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40toggle-change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EtoggleChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40check-change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcheckChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40select-change%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EselectChange%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40node-click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EnodeClick%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Evxe-tree%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ElRadioGroup%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ElRadio%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ElSwitch%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element-plus'%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20watch%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20openCheck%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20checkStrategy%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'both'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'downward'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'upward'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'none'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20currentStrategy%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'both'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20data%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Parent%20node%201'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Parent%20node%201-1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-1-1'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-1-2'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-2'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%202'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20function%22%3Ewatch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EopenCheck%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3EnewVal%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Eif%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EnewVal%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3D%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20currentStrategy%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Efalse%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Eelse%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20currentStrategy%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'both'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%20%20%20%20data%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Parent%20node%201'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Parent%20node%201-1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-1-1'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-1-2'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%201-2'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Leaf%20node%202'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0D%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EtoggleChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Enode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'toggleChange%20node%3A'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20node%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EcheckChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Enode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'checkChange%20node%3A'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20node%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EselectChange%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Enode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'selectChange%20node%3A'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20node%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%0D%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EnodeClick%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Enode%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0D%0A%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'nodeClick%20node%3A'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20node%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0D%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E","raw-source":"%3Ctemplate%3E%0D%0A%20%20%3Cdiv%20style%3D%22height%3A%2028px%3B%22%3E%0D%0A%20%20%20%20%3Clabel%20style%3D%22margin-right%3A%2020px%3B%22%3E%0D%0A%20%20%20%20%20%20%3Cspan%20style%3D%22margin-left%3A%2010px%3B%22%3E%E5%BC%80%E5%90%AF%E5%8B%BE%E9%80%89%3C%2Fspan%3E%0D%0A%20%20%20%20%20%20%3Cel-switch%20v-model%3D%22openCheck%22%3E%3C%2Fel-switch%3E%0D%0A%20%20%20%20%3C%2Flabel%3E%0D%0A%20%20%20%20%3Cel-radio-group%20v-if%3D%22openCheck%22%20v-model%3D%22currentStrategy%22%20direction%3D%22row%22%3E%0D%0A%20%20%20%20%20%20%3Cel-radio%20v-for%3D%22strategy%20of%20checkStrategy%22%20%3Alabel%3D%22strategy%22%3E%7B%7B%20strategy%20%7D%7D%3C%2Fel-radio%3E%0D%0A%20%20%20%20%3C%2Fel-radio-group%3E%0D%0A%20%20%3C%2Fdiv%3E%0D%0A%0D%0A%20%20%3Cvxe-tree%0D%0A%20%20%20%20%3Adata%3D%22data%22%0D%0A%20%20%20%20%3Acheck%3D%22currentStrategy%22%0D%0A%20%20%20%20%40toggle-change%3D%22toggleChange%22%0D%0A%20%20%20%20%40check-change%3D%22checkChange%22%0D%0A%20%20%20%20%40select-change%3D%22selectChange%22%0D%0A%20%20%20%20%40node-click%3D%22nodeClick%22%0D%0A%20%20%3E%3C%2Fvxe-tree%3E%0D%0A%3C%2Ftemplate%3E%0D%0A%0D%0A%3Cscript%20setup%20lang%3D%22ts%22%3E%0D%0Aimport%20%7B%20ElRadioGroup%2C%20ElRadio%2C%20ElSwitch%20%7D%20from%20'element-plus'%0D%0Aimport%20%7B%20ref%2C%20watch%20%7D%20from%20'vue'%3B%0D%0A%0D%0Aconst%20openCheck%20%3D%20ref(true)%0D%0Aconst%20checkStrategy%20%3D%20ref(%5B'both'%2C%20'downward'%2C%20'upward'%2C%20'none'%5D)%3B%0D%0Aconst%20currentStrategy%20%3D%20ref('both')%0D%0A%0D%0Aconst%20data%20%3D%20ref(%5B%0D%0A%20%20%7B%0D%0A%20%20%20%20label%3A%20'Parent%20node%201'%2C%0D%0A%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20'Parent%20node%201-1'%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%7B%20label%3A%20'Leaf%20node%201-1-1'%20%7D%2C%20%7B%20label%3A%20'Leaf%20node%201-1-2'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7B%20label%3A%20'Leaf%20node%201-2'%20%7D%2C%0D%0A%20%20%20%20%5D%2C%0D%0A%20%20%7D%2C%0D%0A%20%20%7B%20label%3A%20'Leaf%20node%202'%20%7D%2C%0D%0A%5D)%3B%0D%0A%0D%0Awatch(openCheck%2C%20(newVal)%20%3D%3E%20%7B%0D%0A%20%20if%20(newVal%20%3D%3D%3D%20false)%20%7B%0D%0A%20%20%20%20currentStrategy.value%20%3D%20false%3B%0D%0A%20%20%7D%20else%20%7B%0D%0A%20%20%20%20currentStrategy.value%20%3D%20'both'%3B%0D%0A%0D%0A%20%20%20%20data.value%20%3D%20%5B%0D%0A%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20label%3A%20'Parent%20node%201'%2C%0D%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'Parent%20node%201-1'%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%20%20children%3A%20%5B%7B%20label%3A%20'Leaf%20node%201-1-1'%20%7D%2C%20%7B%20label%3A%20'Leaf%20node%201-1-2'%20%7D%5D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%20%20%7B%20label%3A%20'Leaf%20node%201-2'%20%7D%2C%0D%0A%20%20%20%20%20%20%20%20%5D%2C%0D%0A%20%20%20%20%20%20%7D%2C%0D%0A%20%20%20%20%20%20%7B%20label%3A%20'Leaf%20node%202'%20%7D%2C%0D%0A%20%20%20%20%5D%3B%0D%0A%20%20%7D%0D%0A%7D)%3B%0D%0A%0D%0Aconst%20toggleChange%20%3D%20(node)%20%3D%3E%20%7B%0D%0A%20%20console.log('toggleChange%20node%3A'%2C%20node)%3B%0D%0A%7D%3B%0D%0A%0D%0Aconst%20checkChange%20%3D%20(node)%20%3D%3E%20%7B%0D%0A%20%20console.log('checkChange%20node%3A'%2C%20node)%3B%0D%0A%7D%3B%0D%0A%0D%0Aconst%20selectChange%20%3D%20(node)%20%3D%3E%20%7B%0D%0A%20%20console.log('selectChange%20node%3A'%2C%20node)%3B%0D%0A%7D%3B%0D%0A%0D%0Aconst%20nodeClick%20%3D%20(node)%20%3D%3E%20%7B%0D%0A%20%20console.log('nodeClick%20node%3A'%2C%20node)%3B%0D%0A%7D%3B%0D%0A%3C%2Fscript%3E","page-name":"tree/check"},{default:u(()=>[E(R)]),_:1})])}}});export{H as __pageData,z as default};