import{b as J,c as W,d as z,e as U}from"./VTextField-af910b99.js";import{x as h,I as A,bW as K,y as O,c2 as Q,C as X,D as P,cd as g,cv as $,l as u,b5 as Y,b1 as Z,b$ as p,F as s,L as B,i as f,c7 as ee,s as _,r as le,cR as E,N as te,bd as ae,V as ne,P as I,aF as oe,ca as ue,cj as T,J as ce,cC as w,aR as ie,ci as se}from"./index-36e220db.js";const L=Symbol.for("vuetify:selection-control-group"),j=h({color:String,disabled:Boolean,defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:A,trueIcon:A,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:Boolean,modelValue:null,type:String,valueComparator:{type:Function,default:K},...O(),...Q(),...X()},"selection-control-group"),re=h({...j({defaultsTarget:"VSelectionControl"})},"v-selection-control-group");P()({name:"VSelectionControlGroup",props:re(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:c}=o;const l=g(e,"modelValue"),t=$(),r=u(()=>e.id||`v-selection-control-group-${t}`),i=u(()=>e.name||r.value),a=new Set;return Y(L,{modelValue:l,forceUpdate:()=>{a.forEach(n=>n())},onForceUpdate:n=>{a.add(n),Z(()=>{a.delete(n)})}}),p({[e.defaultsTarget]:{color:s(e,"color"),disabled:s(e,"disabled"),density:s(e,"density"),error:s(e,"error"),inline:s(e,"inline"),modelValue:l,multiple:u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),name:i,falseIcon:s(e,"falseIcon"),trueIcon:s(e,"trueIcon"),readonly:s(e,"readonly"),ripple:s(e,"ripple"),type:s(e,"type"),valueComparator:s(e,"valueComparator")}}),B(()=>{var n;return f("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(n=c.default)==null?void 0:n.call(c)])}),{}}});const M=h({label:String,trueValue:null,falseValue:null,value:null,...O(),...j()},"v-selection-control");function de(e){const o=oe(L,void 0),{densityClasses:c}=ue(e),l=g(e,"modelValue"),t=u(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),r=u(()=>e.falseValue!==void 0?e.falseValue:!1),i=u(()=>!!e.multiple||e.multiple==null&&Array.isArray(l.value)),a=u({get(){const m=o?o.modelValue.value:l.value;return i.value?m.some(d=>e.valueComparator(d,t.value)):e.valueComparator(m,t.value)},set(m){if(e.readonly)return;const d=m?t.value:r.value;let v=d;i.value&&(v=m?[...T(l.value),d]:T(l.value).filter(V=>!e.valueComparator(V,t.value))),o?o.modelValue.value=v:l.value=v}}),{textColorClasses:n,textColorStyles:y}=ce(u(()=>a.value&&!e.error&&!e.disabled?e.color:void 0)),k=u(()=>a.value?e.trueIcon:e.falseIcon);return{group:o,densityClasses:c,trueValue:t,falseValue:r,model:a,textColorClasses:n,textColorStyles:y,icon:k}}const ve=P()({name:"VSelectionControl",directives:{Ripple:ee},inheritAttrs:!1,props:M(),emits:{"update:modelValue":e=>!0},setup(e,o){let{attrs:c,slots:l}=o;const{group:t,densityClasses:r,icon:i,model:a,textColorClasses:n,textColorStyles:y,trueValue:k}=de(e),m=$(),d=u(()=>e.id||`input-${m}`),v=_(!1),V=_(!1),C=le();t==null||t.onForceUpdate(()=>{C.value&&(C.value.checked=a.value)});function x(b){v.value=!0,(!w||w&&b.target.matches(":focus-visible"))&&(V.value=!0)}function S(){v.value=!1,V.value=!1}function F(b){e.readonly&&t&&ie(()=>t.forceUpdate()),a.value=b.target.checked}return B(()=>{var D,R;const b=l.label?l.label({label:e.label,props:{for:d.value}}):e.label,[q,H]=E(c);return f("div",I({class:["v-selection-control",{"v-selection-control--dirty":a.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":v.value,"v-selection-control--focus-visible":V.value,"v-selection-control--inline":e.inline},r.value,e.class]},q,{style:e.style}),[f("div",{class:["v-selection-control__wrapper",n.value],style:y.value},[(D=l.default)==null?void 0:D.call(l),te(f("div",{class:["v-selection-control__input"]},[i.value&&f(ne,{key:"icon",icon:i.value},null),f("input",I({ref:C,checked:a.value,disabled:e.disabled,id:d.value,onBlur:S,onFocus:x,onInput:F,"aria-disabled":e.readonly,type:e.type,value:k.value,name:e.name,"aria-checked":e.type==="checkbox"?a.value:void 0},H),null),(R=l.input)==null?void 0:R.call(l,{model:a,textColorClasses:n,textColorStyles:y,props:{onFocus:x,onBlur:S,id:d.value}})]),[[ae("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),b&&f(J,{for:d.value,clickable:!0},{default:()=>[b]})])}),{isFocused:v,input:C}}}),N=h({indeterminate:Boolean,indeterminateIcon:{type:A,default:"$checkboxIndeterminate"},...M({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"v-checkbox-btn"),G=P()({name:"VCheckboxBtn",props:N(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,o){let{slots:c}=o;const l=g(e,"indeterminate"),t=g(e,"modelValue");function r(n){l.value&&(l.value=!1)}const i=u(()=>l.value?e.indeterminateIcon:e.falseIcon),a=u(()=>l.value?e.indeterminateIcon:e.trueIcon);return B(()=>f(ve,I(e,{modelValue:t.value,"onUpdate:modelValue":[n=>t.value=n,r],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:i.value,trueIcon:a.value,"aria-checked":l.value?"mixed":void 0}),c)),{}}}),fe=h({...W(),...se(N(),["inline"])},"v-checkbox"),ye=P()({name:"VCheckbox",inheritAttrs:!1,props:fe(),emits:{"update:focused":e=>!0},setup(e,o){let{attrs:c,slots:l}=o;const{isFocused:t,focus:r,blur:i}=z(e),a=$(),n=u(()=>e.id||`checkbox-${a}`);return B(()=>{const[y,k]=E(c),[m,d]=U.filterProps(e),[v,V]=G.filterProps(e);return f(U,I({class:["v-checkbox",e.class]},y,m,{id:n.value,focused:t.value,style:e.style}),{...l,default:C=>{let{id:x,messagesId:S,isDisabled:F,isReadonly:b}=C;return f(G,I(v,{id:x.value,"aria-describedby":S.value,disabled:F.value,readonly:b.value},k,{onFocus:r,onBlur:i}),l)}})}),{}}});export{G as V,ye as a};