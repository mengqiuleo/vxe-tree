import{a5 as P,b as E,X as Se,l as y,d as I,o as v,c as S,C,a6 as x,a7 as ee,f as e,i as ae,n as r,r as q,a as oe,t as R,a3 as H,v as J,K as O,q as te,Y as Ve,a8 as Ce,a9 as Ie,w as K,a1 as we,D as w,E as z,N as M,G as V,J as Ee,p as Be,aa as Q}from"./framework.e1c69d6b.js";import{c as Ne,b as $,u as le,i as _,a as B,d as ne,e as se,f as U,_ as A,g as Te,h as ie,j as re,w as de,k as ue,l as Z,m as Pe,n as Re,E as D,o as _e}from"./use-form-item.de485d38.js";import{U as N,C as F,d as ce,I as L,t as $e}from"./event.e06a23af.js";import{u as Ge}from"./index.f5f5713a.js";const ze=t=>["",...Ne].includes(t),ve=$({size:le,disabled:Boolean,label:{type:[String,Number,Boolean],default:""}}),De=$({...ve,modelValue:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},border:Boolean}),pe={[N]:t=>P(t)||_(t)||B(t),[F]:t=>P(t)||_(t)||B(t)},fe=Symbol("radioGroupKey"),me=(t,h)=>{const s=E(),a=Se(fe,void 0),f=y(()=>!!a),m=y({get(){return f.value?a.modelValue:t.modelValue},set(u){f.value?a.changeEvent(u):h&&h(N,u),s.value.checked=t.modelValue===t.label}}),p=ne(y(()=>a==null?void 0:a.size)),n=se(y(()=>a==null?void 0:a.disabled)),i=E(!1),d=y(()=>n.value||f.value&&m.value!==t.label?-1:0);return{radioRef:s,isGroup:f,radioGroup:a,focus:i,size:p,disabled:n,tabIndex:d,modelValue:m}},Ke=["value","name","disabled"],Fe=I({name:"ElRadio"}),Ue=I({...Fe,props:De,emits:pe,setup(t,{emit:h}){const s=t,a=U("radio"),{radioRef:f,radioGroup:m,focus:p,size:n,disabled:i,modelValue:d}=me(s,h);function u(){J(()=>h("change",d.value))}return(l,c)=>{var k;return v(),S("label",{class:r([e(a).b(),e(a).is("disabled",e(i)),e(a).is("focus",e(p)),e(a).is("bordered",l.border),e(a).is("checked",e(d)===l.label),e(a).m(e(n))])},[C("span",{class:r([e(a).e("input"),e(a).is("disabled",e(i)),e(a).is("checked",e(d)===l.label)])},[x(C("input",{ref_key:"radioRef",ref:f,"onUpdate:modelValue":c[0]||(c[0]=T=>ae(d)?d.value=T:null),class:r(e(a).e("original")),value:l.label,name:l.name||((k=e(m))==null?void 0:k.name),disabled:e(i),type:"radio",onFocus:c[1]||(c[1]=T=>p.value=!0),onBlur:c[2]||(c[2]=T=>p.value=!1),onChange:u},null,42,Ke),[[ee,e(d)]]),C("span",{class:r(e(a).e("inner"))},null,2)],2),C("span",{class:r(e(a).e("label")),onKeydown:c[3]||(c[3]=H(()=>{},["stop"]))},[q(l.$slots,"default",{},()=>[oe(R(l.label),1)])],34)],2)}}});var Ae=A(Ue,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio.vue"]]);const Me=$({...ve,name:{type:String,default:""}}),Oe=["value","name","disabled"],Le=I({name:"ElRadioButton"}),je=I({...Le,props:Me,setup(t){const h=t,s=U("radio"),{radioRef:a,focus:f,size:m,disabled:p,modelValue:n,radioGroup:i}=me(h),d=y(()=>({backgroundColor:(i==null?void 0:i.fill)||"",borderColor:(i==null?void 0:i.fill)||"",boxShadow:i!=null&&i.fill?`-1px 0 0 0 ${i.fill}`:"",color:(i==null?void 0:i.textColor)||""}));return(u,l)=>{var c;return v(),S("label",{class:r([e(s).b("button"),e(s).is("active",e(n)===u.label),e(s).is("disabled",e(p)),e(s).is("focus",e(f)),e(s).bm("button",e(m))])},[x(C("input",{ref_key:"radioRef",ref:a,"onUpdate:modelValue":l[0]||(l[0]=k=>ae(n)?n.value=k:null),class:r(e(s).be("button","original-radio")),value:u.label,type:"radio",name:u.name||((c=e(i))==null?void 0:c.name),disabled:e(p),onFocus:l[1]||(l[1]=k=>f.value=!0),onBlur:l[2]||(l[2]=k=>f.value=!1)},null,42,Oe),[[ee,e(n)]]),C("span",{class:r(e(s).be("button","inner")),style:O(e(n)===u.label?e(d):{}),onKeydown:l[3]||(l[3]=H(()=>{},["stop"]))},[q(u.$slots,"default",{},()=>[oe(R(u.label),1)])],38)],2)}}});var be=A(je,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-button.vue"]]);const qe=$({id:{type:String,default:void 0},size:le,disabled:Boolean,modelValue:{type:[String,Number,Boolean],default:""},fill:{type:String,default:""},label:{type:String,default:void 0},textColor:{type:String,default:""},name:{type:String,default:void 0},validateEvent:{type:Boolean,default:!0}}),He=pe,Je=["id","aria-label","aria-labelledby"],We=I({name:"ElRadioGroup"}),Xe=I({...We,props:qe,emits:He,setup(t,{emit:h}){const s=t,a=U("radio"),f=Te(),m=E(),{formItem:p}=ie(),{inputId:n,isLabeledByFormItem:i}=re(s,{formItemContext:p}),d=l=>{h(N,l),J(()=>h("change",l))};te(()=>{const l=m.value.querySelectorAll("[type=radio]"),c=l[0];!Array.from(l).some(k=>k.checked)&&c&&(c.tabIndex=0)});const u=y(()=>s.name||f.value);return Ve(fe,Ce({...Ie(s),changeEvent:d,name:u})),K(()=>s.modelValue,()=>{s.validateEvent&&(p==null||p.validate("change").catch(l=>ce()))}),(l,c)=>(v(),S("div",{id:e(n),ref_key:"radioGroupRef",ref:m,class:r(e(a).b("group")),role:"radiogroup","aria-label":e(i)?void 0:l.label||"radio-group","aria-labelledby":e(i)?e(p).labelId:void 0},[q(l.$slots,"default")],10,Je))}});var ye=A(Xe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/radio/src/radio-group.vue"]]);const ua=de(Ae,{RadioButton:be,RadioGroup:ye}),ca=ue(ye),va=ue(be),Ye=$({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:Z},inactiveIcon:{type:Z},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Pe(Function)},size:{type:String,validator:ze},tabindex:{type:[String,Number]}}),Qe={[N]:t=>B(t)||P(t)||_(t),[F]:t=>B(t)||P(t)||_(t),[L]:t=>B(t)||P(t)||_(t)},Ze=["onClick"],xe=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ea=["aria-hidden"],aa=["aria-hidden"],oa=["aria-hidden"],j="ElSwitch",ta=I({name:j}),la=I({...ta,props:Ye,emits:Qe,setup(t,{expose:h,emit:s}){const a=t,f=Be(),{formItem:m}=ie(),p=ne(),n=U("switch");Ge({from:'"value"',replacement:'"model-value" or "v-model"',scope:j,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},y(()=>{var o;return!!((o=f.vnode.props)!=null&&o.value)}));const{inputId:i}=re(a,{formItemContext:m}),d=se(y(()=>a.loading)),u=E(a.modelValue!==!1),l=E(),c=E(),k=y(()=>[n.b(),n.m(p.value),n.is("disabled",d.value),n.is("checked",b.value)]),T=y(()=>({width:Re(a.width)}));K(()=>a.modelValue,()=>{u.value=!0}),K(()=>a.value,()=>{u.value=!1});const W=y(()=>u.value?a.modelValue:a.value),b=y(()=>W.value===a.activeValue);[a.activeValue,a.inactiveValue].includes(W.value)||(s(N,a.inactiveValue),s(F,a.inactiveValue),s(L,a.inactiveValue)),K(b,o=>{var g;l.value.checked=o,a.validateEvent&&((g=m==null?void 0:m.validate)==null||g.call(m,"change").catch(ke=>ce()))});const G=()=>{const o=b.value?a.inactiveValue:a.activeValue;s(N,o),s(F,o),s(L,o),J(()=>{l.value.checked=b.value})},X=()=>{if(d.value)return;const{beforeChange:o}=a;if(!o){G();return}const g=o();[Q(g),B(g)].includes(!0)||$e(j,"beforeChange must return type `Promise<boolean>` or `boolean`"),Q(g)?g.then(Y=>{Y&&G()}).catch(Y=>{}):g&&G()},he=y(()=>n.cssVarBlock({...a.activeColor?{"on-color":a.activeColor}:null,...a.inactiveColor?{"off-color":a.inactiveColor}:null,...a.borderColor?{"border-color":a.borderColor}:null})),ge=()=>{var o,g;(g=(o=l.value)==null?void 0:o.focus)==null||g.call(o)};return te(()=>{l.value.checked=b.value}),h({focus:ge,checked:b}),(o,g)=>(v(),S("div",{class:r(e(k)),style:O(e(he)),onClick:H(X,["prevent"])},[C("input",{id:e(i),ref_key:"input",ref:l,class:r(e(n).e("input")),type:"checkbox",role:"switch","aria-checked":e(b),"aria-disabled":e(d),name:o.name,"true-value":o.activeValue,"false-value":o.inactiveValue,disabled:e(d),tabindex:o.tabindex,onChange:G,onKeydown:we(X,["enter"])},null,42,xe),!o.inlinePrompt&&(o.inactiveIcon||o.inactiveText)?(v(),S("span",{key:0,class:r([e(n).e("label"),e(n).em("label","left"),e(n).is("active",!e(b))])},[o.inactiveIcon?(v(),w(e(D),{key:0},{default:z(()=>[(v(),w(M(o.inactiveIcon)))]),_:1})):V("v-if",!0),!o.inactiveIcon&&o.inactiveText?(v(),S("span",{key:1,"aria-hidden":e(b)},R(o.inactiveText),9,ea)):V("v-if",!0)],2)):V("v-if",!0),C("span",{ref_key:"core",ref:c,class:r(e(n).e("core")),style:O(e(T))},[o.inlinePrompt?(v(),S("div",{key:0,class:r(e(n).e("inner"))},[o.activeIcon||o.inactiveIcon?(v(),w(e(D),{key:0,class:r(e(n).is("icon"))},{default:z(()=>[(v(),w(M(e(b)?o.activeIcon:o.inactiveIcon)))]),_:1},8,["class"])):o.activeText||o.inactiveText?(v(),S("span",{key:1,class:r(e(n).is("text")),"aria-hidden":!e(b)},R(e(b)?o.activeText:o.inactiveText),11,aa)):V("v-if",!0)],2)):V("v-if",!0),C("div",{class:r(e(n).e("action"))},[o.loading?(v(),w(e(D),{key:0,class:r(e(n).is("loading"))},{default:z(()=>[Ee(e(_e))]),_:1},8,["class"])):V("v-if",!0)],2)],6),!o.inlinePrompt&&(o.activeIcon||o.activeText)?(v(),S("span",{key:1,class:r([e(n).e("label"),e(n).em("label","right"),e(n).is("active",e(b))])},[o.activeIcon?(v(),w(e(D),{key:0},{default:z(()=>[(v(),w(M(o.activeIcon)))]),_:1})):V("v-if",!0),!o.activeIcon&&o.activeText?(v(),S("span",{key:1,"aria-hidden":!e(b)},R(o.activeText),9,oa)):V("v-if",!0)],2)):V("v-if",!0)],14,Ze))}});var na=A(la,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const pa=de(na);export{pa as E,ua as a,ca as b,va as c,ze as i};