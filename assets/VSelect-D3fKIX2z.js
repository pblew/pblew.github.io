import{a1 as ye,f as re,d as Ce,F as Ne,I as Me,s as nt,a2 as at,n as we,W as Pe,a3 as ot,a4 as st,a5 as ut,a6 as rt,a7 as it,V as Te}from"./VTextField-buLp8KF6.js";import{N as ct,V as dt}from"./VMenu-BKLJP0rP.js";import{s as vt,u as ft,ap as Ae,E as U,aq as J,ar as Ue,O as le,aa as ze,Q as xe,I as K,a0 as Z,as as Ge,x as I,Y as mt,at as Se,af as He,ad as D,K as ee,a as d,au as $e,W as z,r as X,av as gt,m as L,Z as pe,_ as qe,F as q,am as Y,$ as ht,ab as Ke,aw as ce,J as yt,ac as pt,ax as Ve,a9 as Ie,G as je,ay as Vt,P as We,az as Xe,R as Ye,U as bt,aA as Fe,aB as kt,aC as Ct,a1 as xt,aD as St,aE as It,aF as wt,T as Je,aG as Pt,aH as Tt,aI as At,aJ as Ft,aK as Bt,a3 as Rt,aL as Dt,aM as _t,aN as Et,aO as se,a6 as Lt,aP as be,aQ as Qe,X as Q,aR as Ot,v as Be,aS as me,aT as Nt,aU as ke,aV as Mt,aW as Ut,aX as zt,aY as Gt,a8 as ie,aZ as Ht,a_ as $t,a$ as qt,b0 as Kt,b1 as jt,j as Wt,g as Re,b2 as Xt,b as Yt,L as Jt,b3 as De}from"./index-BCrMed2G.js";import{m as Qt,V as _e}from"./VSlideGroup-9V6l_dzT.js";function*ge(e,n){for(const l of ye(n))for(const t of ye(e))yield{x:t,y:l,index:l*e+t,isEvenRow:(l&1)===0}}function Zt(e,n,l,t,a,v,c){return{ambient:e,diffuse:n,emissive:l,opacity:t,opticalDensity:a,shininess:v,specular:c}}const wl=Zt(re(1,1,1),re(.8,.8,.8),re(0,0,0),1,1,225,re(.5,.5,.5));function el(e){const n=new Float32Array(e*3),l=new Float32Array(e*3),t=new Float32Array(e*2),a=new Uint32Array(e);let v=0,c=0,s=0,u=0,g=0;function b(k,r,i){const[h,x,f]=k,[C,F,w]=r,[y,V]=i;n[v++]=h,n[v++]=x,n[v++]=f,l[c++]=C,l[c++]=F,l[c++]=w,t[s++]=y,t[s++]=V,a[u++]=g++}return{vertexes:n,normals:l,texcoords:t,indexes:a,emitVertex:b}}const Ee=Ce(),Le=Ce();class tl extends Ne{constructor(n){super(n,Me.VEC3)}calculateVertexNormal(n){nt(n,0,0,0);for(const l of ye(this.capacity))at(n,n,this.itemAt(l));we(n,n)}setFace(n,l,t,a){Pe(Ee,l,t),Pe(Le,t,a);const v=this.itemAt(n);ot(v,Ee,Le),we(v,v)}}class ll extends Ne{constructor(n){super(n,Me.VEC3)}getVertex(n){return this.itemAt(n)}setVertex(n,l,t,a){this.setItem(n,l,t,a)}}function de(e,n,l=0){const t=n-l;return((e-l)%t+t)%t+l}function te(e,n){return[e[0],e[1],n[2]]}function Pl(e,n){const{width:l,height:t,terrain1For:a,terrain2For:v,vertexFor:c}=e;function s(y,V){const P=de(y,l+1);return de(V,t+1)*(l+1)+P}const u=(l+1)*(t+1),g=new ll(u),b=new ct(u),k=new Uint8Array(u),r=new Uint8Array(u);for(const{index:y,x:V,y:P}of ge(l+1,t+1)){const[m,A,O]=c(V,P);g.setVertex(y,m,A,O),k[y]=a(V,P),r[y]=v(V,P)}const i=new tl(6),h=Ce();for(const{index:y,x:V,y:P}of ge(l+1,t+1)){const m=g.getVertex(y),A=[te(c(V+1,P),g.getVertex(s(V+1,P))),te(c(V,P+1),g.getVertex(s(V,P+1))),te(c(V-1,P+1),g.getVertex(s(V-1,P+1))),te(c(V-1,P),g.getVertex(s(V-1,P))),te(c(V-1,P-1),g.getVertex(s(V-1,P-1))),te(c(V,P-1),g.getVertex(s(V,P-1)))];i.setFace(0,m,A[1],A[0]),i.setFace(1,m,A[2],A[1]),i.setFace(2,m,A[3],A[2]),i.setFace(3,m,A[4],A[3]),i.setFace(4,m,A[5],A[4]),i.setFace(5,m,A[0],A[5]),i.calculateVertexNormal(h),b.setNormal(y,h[0],h[1],h[2])}function x(y,V){return g.getVertex(s(y,V))}function f(y,V){return b.getNormal(s(y,V))}function C(y,V){return k[s(y,V)]}function F(y,V){return r[s(y,V)]}function w(){return ge(l,t)}return{numVertexes:u,getVertex:x,getNormal:f,getTerrain1Type:C,getTerrain2Type:F,coordinates:w}}function Tl(e){const{height:n,nodes:l,width:t}=e,a=-(t/2),v=-(n/2);function c(b,k){const r=de(b,t),i=de(k,n);return l[i*t+r]}function s(b,k){const r=c(b,k),{terrain1:i}=r;return Ae(i)}function u(b,k){const r=c(b,k),{terrain2:i}=r;return Ae(i)}function g(b,k){const i=(k&1)===0?0:.5,{altitude:h}=c(b,k);return[-(b+i+a),k+v,h*.2]}return{width:t,height:n,terrain1For:s,terrain2For:u,vertexFor:g}}function Al(){const{texturesStore:e}=vt();return ft(e.currentTexture)}function Fl(e,n){const{numVertexes:l,coordinates:t,getNormal:a,getTerrain1Type:v,getTerrain2Type:c,getVertex:s}=e,{getT1TexCoords:u,getT2TexCoords:g}=n,b=el(l*6),{emitVertex:k}=b;function r(i,h,x){k(s(i,h),a(i,h),x)}for(const{x:i,y:h,isEvenRow:x}of t()){const f=v(i,h),C=c(i,h),F=v(i+1,h);if(x){const w=u(C);r(i,h,w[0]),r(i,h+1,w[1]),r(i+1,h,w[2]);const y=g(F);r(i+1,h,y[0]),r(i,h+1,y[1]),r(i+1,h+1,y[2])}else{const w=g(f);r(i,h,w[0]),r(i,h+1,w[1]),r(i+1,h+1,w[2]);const y=u(C);r(i,h,y[0]),r(i+1,h+1,y[1]),r(i+1,h,y[2])}}return b}const Ze=Symbol.for("vuetify:selection-control-group"),et=U({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:J,trueIcon:J,ripple:{type:[Boolean,Object],default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Ue},...le(),...ze(),...xe()},"SelectionControlGroup"),nl=U({...et({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");K()({name:"VSelectionControlGroup",props:nl(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const t=Z(e,"modelValue"),a=Ge(),v=I(()=>e.id||`v-selection-control-group-${a}`),c=I(()=>e.name||v.value),s=new Set;return mt(Ze,{modelValue:t,forceUpdate:()=>{s.forEach(u=>u())},onForceUpdate:u=>{s.add(u),Se(()=>{s.delete(u)})}}),He({[e.defaultsTarget]:{color:D(e,"color"),disabled:D(e,"disabled"),density:D(e,"density"),error:D(e,"error"),inline:D(e,"inline"),modelValue:t,multiple:I(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),name:c,falseIcon:D(e,"falseIcon"),trueIcon:D(e,"trueIcon"),readonly:D(e,"readonly"),ripple:D(e,"ripple"),type:D(e,"type"),valueComparator:D(e,"valueComparator")}}),ee(()=>d("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[l.default?.()])),{}}});const tt=U({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...le(),...et()},"VSelectionControl");function al(e){const n=ht(Ze,void 0),{densityClasses:l}=Ke(e),t=Z(e,"modelValue"),a=I(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),v=I(()=>e.falseValue!==void 0?e.falseValue:!1),c=I(()=>!!e.multiple||e.multiple==null&&Array.isArray(t.value)),s=I({get(){const i=n?n.modelValue.value:t.value;return c.value?ce(i).some(h=>e.valueComparator(h,a.value)):e.valueComparator(i,a.value)},set(i){if(e.readonly)return;const h=i?a.value:v.value;let x=h;c.value&&(x=i?[...ce(t.value),h]:ce(t.value).filter(f=>!e.valueComparator(f,a.value))),n?n.modelValue.value=x:t.value=x}}),{textColorClasses:u,textColorStyles:g}=yt(I(()=>{if(!(e.error||e.disabled))return s.value?e.color:e.baseColor})),{backgroundColorClasses:b,backgroundColorStyles:k}=pt(I(()=>s.value&&!e.error&&!e.disabled?e.color:e.baseColor)),r=I(()=>s.value?e.trueIcon:e.falseIcon);return{group:n,densityClasses:l,trueValue:a,falseValue:v,model:s,textColorClasses:u,textColorStyles:g,backgroundColorClasses:b,backgroundColorStyles:k,icon:r}}const Oe=K()({name:"VSelectionControl",directives:{Ripple:$e},inheritAttrs:!1,props:tt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{attrs:l,slots:t}=n;const{group:a,densityClasses:v,icon:c,model:s,textColorClasses:u,textColorStyles:g,backgroundColorClasses:b,backgroundColorStyles:k,trueValue:r}=al(e),i=Ge(),h=z(!1),x=z(!1),f=X(),C=I(()=>e.id||`input-${i}`),F=I(()=>!e.disabled&&!e.readonly);a?.onForceUpdate(()=>{f.value&&(f.value.checked=s.value)});function w(m){F.value&&(h.value=!0,Ve(m.target,":focus-visible")!==!1&&(x.value=!0))}function y(){h.value=!1,x.value=!1}function V(m){m.stopPropagation()}function P(m){if(!F.value){f.value&&(f.value.checked=s.value);return}e.readonly&&a&&Ie(()=>a.forceUpdate()),s.value=m.target.checked}return ee(()=>{const m=t.label?t.label({label:e.label,props:{for:C.value}}):e.label,[A,O]=gt(l),N=d("input",L({ref:f,checked:s.value,disabled:!!e.disabled,id:C.value,onBlur:y,onFocus:w,onInput:P,"aria-disabled":!!e.disabled,"aria-label":e.label,type:e.type,value:r.value,name:e.name,"aria-checked":e.type==="checkbox"?s.value:void 0},O),null);return d("div",L({class:["v-selection-control",{"v-selection-control--dirty":s.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":h.value,"v-selection-control--focus-visible":x.value,"v-selection-control--inline":e.inline},v.value,e.class]},A,{style:e.style}),[d("div",{class:["v-selection-control__wrapper",u.value],style:g.value},[t.default?.({backgroundColorClasses:b,backgroundColorStyles:k}),pe(d("div",{class:["v-selection-control__input"]},[t.input?.({model:s,textColorClasses:u,textColorStyles:g,backgroundColorClasses:b,backgroundColorStyles:k,inputNode:N,icon:c.value,props:{onFocus:w,onBlur:y,id:C.value}})??d(q,null,[c.value&&d(Y,{key:"icon",icon:c.value},null),N])]),[[qe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),m&&d(st,{for:C.value,onClick:V},{default:()=>[m]})])}),{isFocused:h,input:f}}}),ol=U({indeterminate:Boolean,indeterminateIcon:{type:J,default:"$checkboxIndeterminate"},...tt({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),sl=K()({name:"VCheckboxBtn",props:ol(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,n){let{slots:l}=n;const t=Z(e,"indeterminate"),a=Z(e,"modelValue");function v(u){t.value&&(t.value=!1)}const c=I(()=>t.value?e.indeterminateIcon:e.falseIcon),s=I(()=>t.value?e.indeterminateIcon:e.trueIcon);return ee(()=>{const u=je(Oe.filterProps(e),["modelValue"]);return d(Oe,L(u,{modelValue:a.value,"onUpdate:modelValue":[g=>a.value=g,v],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:c.value,trueIcon:s.value,"aria-checked":t.value?"mixed":void 0}),l)}),{}}}),lt=Symbol.for("vuetify:v-chip-group"),ul=U({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Ue},...Qt(),...le(),...Vt({selectedClass:"v-chip--selected"}),...We(),...xe(),...Xe({variant:"tonal"})},"VChipGroup");K()({name:"VChipGroup",props:ul(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{themeClasses:t}=Ye(e),{isSelected:a,select:v,next:c,prev:s,selected:u}=bt(e,lt);return He({VChip:{color:D(e,"color"),disabled:D(e,"disabled"),filter:D(e,"filter"),variant:D(e,"variant")}}),ee(()=>{const g=_e.filterProps(e);return d(_e,L(g,{class:["v-chip-group",{"v-chip-group--column":e.column},t.value,e.class],style:e.style}),{default:()=>[l.default?.({isSelected:a,select:v,next:c,prev:s,selected:u.value})]})}),{}}});const rl=U({activeClass:String,appendAvatar:String,appendIcon:J,closable:Boolean,closeIcon:{type:J,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:J,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:Fe(),onClickOnce:Fe(),...kt(),...le(),...ze(),...Ct(),...xt(),...St(),...It(),...wt(),...We({tag:"span"}),...xe(),...Xe({variant:"tonal"})},"VChip"),il=K()({name:"VChip",directives:{Ripple:$e},props:rl(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,n){let{attrs:l,emit:t,slots:a}=n;const{t:v}=Je(),{borderClasses:c}=Pt(e),{colorClasses:s,colorStyles:u,variantClasses:g}=Tt(e),{densityClasses:b}=Ke(e),{elevationClasses:k}=At(e),{roundedClasses:r}=Ft(e),{sizeClasses:i}=Bt(e),{themeClasses:h}=Ye(e),x=Z(e,"modelValue"),f=Rt(e,lt,!1),C=Dt(e,l),F=I(()=>e.link!==!1&&C.isLink.value),w=I(()=>!e.disabled&&e.link!==!1&&(!!f||e.link||C.isClickable.value)),y=I(()=>({"aria-label":v(e.closeLabel),onClick(m){m.preventDefault(),m.stopPropagation(),x.value=!1,t("click:close",m)}}));function V(m){t("click",m),w.value&&(C.navigate?.(m),f?.toggle())}function P(m){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),V(m))}return()=>{const m=C.isLink.value?"a":e.tag,A=!!(e.appendIcon||e.appendAvatar),O=!!(A||a.append),N=!!(a.close||e.closable),H=!!(a.filter||e.filter)&&f,j=!!(e.prependIcon||e.prependAvatar),$=!!(j||a.prepend),W=!f||f.isSelected.value;return x.value&&pe(d(m,L({class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":w.value,"v-chip--filter":H,"v-chip--pill":e.pill},h.value,c.value,W?s.value:void 0,b.value,k.value,r.value,i.value,g.value,f?.selectedClass.value,e.class],style:[W?u.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,tabindex:w.value?0:void 0,onClick:V,onKeydown:w.value&&!F.value&&P},C.linkProps),{default:()=>[_t(w.value,"v-chip"),H&&d(Et,{key:"filter"},{default:()=>[pe(d("div",{class:"v-chip__filter"},[a.filter?d(se,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},a.filter):d(Y,{key:"filter-icon",icon:e.filterIcon},null)]),[[Lt,f.isSelected.value]])]}),$&&d("div",{key:"prepend",class:"v-chip__prepend"},[a.prepend?d(se,{key:"prepend-defaults",disabled:!j,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},a.prepend):d(q,null,[e.prependIcon&&d(Y,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&d(be,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),d("div",{class:"v-chip__content","data-no-activator":""},[a.default?.({isSelected:f?.isSelected.value,selectedClass:f?.selectedClass.value,select:f?.select,toggle:f?.toggle,value:f?.value.value,disabled:e.disabled})??e.text]),O&&d("div",{key:"append",class:"v-chip__append"},[a.append?d(se,{key:"append-defaults",disabled:!A,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},a.append):d(q,null,[e.appendIcon&&d(Y,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&d(be,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),N&&d("button",L({key:"close",class:"v-chip__close",type:"button"},y.value),[a.close?d(se,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},a.close):d(Y,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}),[[qe("ripple"),w.value&&e.ripple,null]])}}}),cl=U({renderless:Boolean,...le()},"VVirtualScrollItem"),dl=K()({name:"VVirtualScrollItem",inheritAttrs:!1,props:cl(),emits:{"update:height":e=>!0},setup(e,n){let{attrs:l,emit:t,slots:a}=n;const{resizeRef:v,contentRect:c}=Qe(void 0,"border");Q(()=>c.value?.height,s=>{s!=null&&t("update:height",s)}),ee(()=>e.renderless?d(q,null,[a.default?.({itemRef:v})]):d("div",L({ref:v,class:["v-virtual-scroll__item",e.class],style:e.style},l),[a.default?.()]))}}),vl=-1,fl=1,he=100,ml=U({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function gl(e,n){const l=Ot(),t=z(0);Be(()=>{t.value=parseFloat(e.itemHeight||0)});const a=z(0),v=z(Math.ceil((parseInt(e.height)||l.height.value)/(t.value||16))||1),c=z(0),s=z(0),u=X(),g=X();let b=0;const{resizeRef:k,contentRect:r}=Qe();Be(()=>{k.value=u.value});const i=I(()=>u.value===document.documentElement?l.height.value:r.value?.height||parseInt(e.height)||0),h=I(()=>!!(u.value&&g.value&&i.value&&t.value));let x=Array.from({length:n.value.length}),f=Array.from({length:n.value.length});const C=z(0);let F=-1;function w(o){return x[o]||t.value}const y=Nt(()=>{const o=performance.now();f[0]=0;const p=n.value.length;for(let T=1;T<=p-1;T++)f[T]=(f[T-1]||0)+w(T-1);C.value=Math.max(C.value,performance.now()-o)},C),V=Q(h,o=>{o&&(V(),b=g.value.offsetTop,y.immediate(),G(),~F&&Ie(()=>{ke&&window.requestAnimationFrame(()=>{ue(F),F=-1})}))});Se(()=>{y.clear()});function P(o,p){const T=x[o],B=t.value;t.value=B?Math.min(t.value,p):p,(T!==p||B!==t.value)&&(x[o]=p,y())}function m(o){return o=me(o,0,n.value.length-1),f[o]||0}function A(o){return hl(f,o)}let O=0,N=0,H=0;Q(i,(o,p)=>{p&&(G(),o<p&&requestAnimationFrame(()=>{N=0,G()}))});function j(){if(!u.value||!g.value)return;const o=u.value.scrollTop,p=performance.now();p-H>500?(N=Math.sign(o-O),b=g.value.offsetTop):N=o-O,O=o,H=p,G()}function $(){!u.value||!g.value||(N=0,H=0,G())}let W=-1;function G(){cancelAnimationFrame(W),W=requestAnimationFrame(ve)}function ve(){if(!u.value||!i.value)return;const o=O-b,p=Math.sign(N),T=Math.max(0,o-he),B=me(A(T),0,n.value.length),_=o+i.value+he,S=me(A(_)+1,B+1,n.value.length);if((p!==vl||B<a.value)&&(p!==fl||S>v.value)){const R=m(a.value)-m(B),M=m(S)-m(v.value);Math.max(R,M)>he?(a.value=B,v.value=S):(B<=0&&(a.value=B),S>=n.value.length&&(v.value=S))}c.value=m(a.value),s.value=m(n.value.length)-m(v.value)}function ue(o){const p=m(o);!u.value||o&&!p?F=o:u.value.scrollTop=p}const fe=I(()=>n.value.slice(a.value,v.value).map((o,p)=>({raw:o,index:p+a.value})));return Q(n,()=>{x=Array.from({length:n.value.length}),f=Array.from({length:n.value.length}),y.immediate(),G()},{deep:!0}),{calculateVisibleItems:G,containerRef:u,markerRef:g,computedItems:fe,paddingTop:c,paddingBottom:s,scrollToIndex:ue,handleScroll:j,handleScrollend:$,handleItemResize:P}}function hl(e,n){let l=e.length-1,t=0,a=0,v=null,c=-1;if(e[l]<n)return l;for(;t<=l;)if(a=t+l>>1,v=e[a],v>n)l=a-1;else if(v<n)c=a,t=a+1;else return v===n?a:t;return c}const yl=U({items:{type:Array,default:()=>[]},renderless:Boolean,...ml(),...le(),...Mt()},"VVirtualScroll"),pl=K()({name:"VVirtualScroll",props:yl(),setup(e,n){let{slots:l}=n;const t=Ut("VVirtualScroll"),{dimensionStyles:a}=zt(e),{calculateVisibleItems:v,containerRef:c,markerRef:s,handleScroll:u,handleScrollend:g,handleItemResize:b,scrollToIndex:k,paddingTop:r,paddingBottom:i,computedItems:h}=gl(e,D(e,"items"));return Gt(()=>e.renderless,()=>{function x(){const C=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";c.value===document.documentElement?(document[C]("scroll",u,{passive:!0}),document[C]("scrollend",g)):(c.value?.[C]("scroll",u,{passive:!0}),c.value?.[C]("scrollend",g))}Ht(()=>{c.value=$t(t.vnode.el,!0),x(!0)}),Se(x)}),ee(()=>{const x=h.value.map(f=>d(dl,{key:f.index,renderless:e.renderless,"onUpdate:height":C=>b(f.index,C)},{default:C=>l.default?.({item:f.raw,index:f.index,...C})}));return e.renderless?d(q,null,[d("div",{ref:s,class:"v-virtual-scroll__spacer",style:{paddingTop:ie(r.value)}},null),x,d("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:ie(i.value)}},null)]):d("div",{ref:c,class:["v-virtual-scroll",e.class],onScrollPassive:u,onScrollend:g,style:[a.value,e.style]},[d("div",{ref:s,class:"v-virtual-scroll__container",style:{paddingTop:ie(r.value),paddingBottom:ie(i.value)}},[x])])}),{calculateVisibleItems:v,scrollToIndex:k}}});function Vl(e,n){const l=z(!1);let t;function a(s){cancelAnimationFrame(t),l.value=!0,t=requestAnimationFrame(()=>{t=requestAnimationFrame(()=>{l.value=!1})})}async function v(){await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>requestAnimationFrame(s)),await new Promise(s=>{if(l.value){const u=Q(l,()=>{u(),s()})}else s()})}async function c(s){if(s.key==="Tab"&&n.value?.focus(),!["PageDown","PageUp","Home","End"].includes(s.key))return;const u=e.value?.$el;if(!u)return;(s.key==="Home"||s.key==="End")&&u.scrollTo({top:s.key==="Home"?0:u.scrollHeight,behavior:"smooth"}),await v();const g=u.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(s.key==="PageDown"||s.key==="Home"){const b=u.getBoundingClientRect().top;for(const k of g)if(k.getBoundingClientRect().top>=b){k.focus();break}}else{const b=u.getBoundingClientRect().bottom;for(const k of[...g].reverse())if(k.getBoundingClientRect().bottom<=b){k.focus();break}}}return{onScrollPassive:a,onKeydown:c}}const bl=U({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:J,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...qt({itemChildren:!1})},"Select"),kl=U({...bl(),...je(ut({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...Kt({transition:{component:rt}})},"VSelect"),Bl=K()({name:"VSelect",props:kl(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,n){let{slots:l}=n;const{t}=Je(),a=X(),v=X(),c=X(),s=Z(e,"menu"),u=I({get:()=>s.value,set:o=>{s.value&&!o&&v.value?.ΨopenChildren.size||(s.value=o)}}),{items:g,transformIn:b,transformOut:k}=jt(e),r=Z(e,"modelValue",[],o=>b(o===null?[null]:ce(o)),o=>{const p=k(o);return e.multiple?p:p[0]??null}),i=I(()=>typeof e.counterValue=="function"?e.counterValue(r.value):typeof e.counterValue=="number"?e.counterValue:r.value.length),h=it(),x=I(()=>r.value.map(o=>o.value)),f=z(!1),C=I(()=>u.value?e.closeText:e.openText);let F="",w;const y=I(()=>e.hideSelected?g.value.filter(o=>!r.value.some(p=>e.valueComparator(p,o))):g.value),V=I(()=>e.hideNoData&&!y.value.length||e.readonly||h?.isReadonly.value),P=I(()=>({...e.menuProps,activatorProps:{...e.menuProps?.activatorProps||{},"aria-haspopup":"listbox"}})),m=X(),A=Vl(m,a);function O(o){e.openOnClear&&(u.value=!0)}function N(){V.value||(u.value=!u.value)}function H(o){De(o)&&j(o)}function j(o){if(!o.key||e.readonly||h?.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(o.key)&&o.preventDefault(),["Enter","ArrowDown"," "].includes(o.key)&&(u.value=!0),["Escape","Tab"].includes(o.key)&&(u.value=!1),o.key==="Home"?m.value?.focus("first"):o.key==="End"&&m.value?.focus("last");const p=1e3;if(e.multiple||!De(o))return;const T=performance.now();T-w>p&&(F=""),F+=o.key.toLowerCase(),w=T;const B=g.value.find(_=>_.title.toLowerCase().startsWith(F));if(B!==void 0){r.value=[B];const _=y.value.indexOf(B);ke&&window.requestAnimationFrame(()=>{_>=0&&c.value?.scrollToIndex(_)})}}function $(o){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!o.props.disabled)if(e.multiple){const T=r.value.findIndex(_=>e.valueComparator(_.value,o.value)),B=p??!~T;if(~T){const _=B?[...r.value,o]:[...r.value];_.splice(T,1),r.value=_}else B&&(r.value=[...r.value,o])}else{const T=p!==!1;r.value=T?[o]:[],Ie(()=>{u.value=!1})}}function W(o){m.value?.$el.contains(o.relatedTarget)||(u.value=!1)}function G(){e.eager&&c.value?.calculateVisibleItems()}function ve(){f.value&&a.value?.focus()}function ue(o){f.value=!0}function fe(o){if(o==null)r.value=[];else if(Ve(a.value,":autofill")||Ve(a.value,":-webkit-autofill")){const p=g.value.find(T=>T.title===o);p&&$(p)}else a.value&&(a.value.value="")}return Q(u,()=>{if(!e.hideSelected&&u.value&&r.value.length){const o=y.value.findIndex(p=>r.value.some(T=>e.valueComparator(T.value,p.value)));ke&&window.requestAnimationFrame(()=>{o>=0&&c.value?.scrollToIndex(o)})}}),Q(()=>e.items,(o,p)=>{u.value||f.value&&!p.length&&o.length&&(u.value=!0)}),ee(()=>{const o=!!(e.chips||l.chip),p=!!(!e.hideNoData||y.value.length||l["prepend-item"]||l["append-item"]||l["no-data"]),T=r.value.length>0,B=Te.filterProps(e),_=T||!f.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return d(Te,L({ref:a},B,{modelValue:r.value.map(S=>S.props.value).join(", "),"onUpdate:modelValue":fe,focused:f.value,"onUpdate:focused":S=>f.value=S,validationValue:r.externalValue,counterValue:i.value,dirty:T,class:["v-select",{"v-select--active-menu":u.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":r.value.length,"v-select--selection-slot":!!l.selection},e.class],style:e.style,inputmode:"none",placeholder:_,"onClick:clear":O,"onMousedown:control":N,onBlur:W,onKeydown:j,"aria-label":t(C.value),title:t(C.value)}),{...l,default:()=>d(q,null,[d(dt,L({ref:v,modelValue:u.value,"onUpdate:modelValue":S=>u.value=S,activator:"parent",contentClass:"v-select__content",disabled:V.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterEnter:G,onAfterLeave:ve},P.value),{default:()=>[p&&d(Wt,L({ref:m,selected:x.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:S=>S.preventDefault(),onKeydown:H,onFocusin:ue,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},A,e.listProps),{default:()=>[l["prepend-item"]?.(),!y.value.length&&!e.hideNoData&&(l["no-data"]?.()??d(Re,{title:t(e.noDataText)},null)),d(pl,{ref:c,renderless:!0,items:y.value},{default:S=>{let{item:R,index:M,itemRef:ne}=S;const ae=L(R.props,{ref:ne,key:M,onClick:()=>$(R,null)});return l.item?.({item:R,index:M,props:ae})??d(Re,L(ae,{role:"option"}),{prepend:oe=>{let{isSelected:E}=oe;return d(q,null,[e.multiple&&!e.hideSelected?d(sl,{key:R.value,modelValue:E,ripple:!1,tabindex:"-1"},null):void 0,R.props.prependAvatar&&d(be,{image:R.props.prependAvatar},null),R.props.prependIcon&&d(Y,{icon:R.props.prependIcon},null)])}})}}),l["append-item"]?.()]})]}),r.value.map((S,R)=>{function M(E){E.stopPropagation(),E.preventDefault(),$(S,!1)}const ne={"onClick:close":M,onKeydown(E){E.key!=="Enter"&&E.key!==" "||(E.preventDefault(),E.stopPropagation(),M(E))},onMousedown(E){E.preventDefault(),E.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},ae=o?!!l.chip:!!l.selection,oe=ae?Xt(o?l.chip({item:S,index:R,props:ne}):l.selection({item:S,index:R})):void 0;if(!(ae&&!oe))return d("div",{key:S.value,class:"v-select__selection"},[o?l.chip?d(se,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:S.title}}},{default:()=>[oe]}):d(il,L({key:"chip",closable:e.closableChips,size:"small",text:S.title,disabled:S.props.disabled},ne),null):oe??d("span",{class:"v-select__selection-text"},[S.title,e.multiple&&R<r.value.length-1&&d("span",{class:"v-select__selection-comma"},[Yt(",")])])])})]),"append-inner":function(){for(var S=arguments.length,R=new Array(S),M=0;M<S;M++)R[M]=arguments[M];return d(q,null,[l["append-inner"]?.(...R),e.menuIcon?d(Y,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),Jt({isFocused:f,menu:u,select:$},a)}});export{wl as D,Bl as V,Tl as a,Pl as b,Al as c,Fl as d,ge as u};