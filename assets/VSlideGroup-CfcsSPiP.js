import{z as ee,ap as G,L as te,by as le,M as ne,ax as oe,C as se,P as ae,aX as ie,R as re,S,k as g,aW as L,bz as ue,a_ as D,T as ce,E as fe,f as h,bA as q,am as B,aT as ve}from"./index-s-QNVzJp.js";function de(l){let{selectedElement:s,containerElement:a,isRtl:o,isHorizontal:v}=l;const d=z(v,a),n=K(v,o,a),p=z(v,s),c=U(v,s),m=p*.4;return n>c?c-m:n+d<c+p?c-d+p+m:n}function pe(l){let{selectedElement:s,containerElement:a,isHorizontal:o}=l;const v=z(o,a),d=U(o,s),n=z(o,s);return d-v/2+n/2}function N(l,s){return s?.[l?"scrollWidth":"scrollHeight"]||0}function he(l,s){return s?.[l?"clientWidth":"clientHeight"]||0}function K(l,s,a){if(!a)return 0;const{scrollLeft:o,offsetWidth:v,scrollWidth:d}=a;return l?s?d-v+o:o:a.scrollTop}function z(l,s){return s?.[l?"offsetWidth":"offsetHeight"]||0}function U(l,s){return s?.[l?"offsetLeft":"offsetTop"]||0}const ge=Symbol.for("vuetify:v-slide-group"),me=ee({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ge},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...te(),...le({mobile:null}),...ne(),...oe({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),Se=se()({name:"VSlideGroup",props:me(),emits:{"update:modelValue":l=>!0},setup(l,s){let{slots:a}=s;const{isRtl:o}=ae(),{displayClasses:v,mobile:d}=ie(l),n=re(l,l.symbol),p=S(!1),c=S(0),m=S(0),A=S(0),i=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:b}=L(),{resizeRef:f,contentRect:k}=L(),C=ue(),I=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),$=g(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[0]):-1),Q=g(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[n.selected.value.length-1]):-1);if(D){let e=-1;ce(()=>[n.selected.value,b.value,k.value,i.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(b.value&&k.value){const t=i.value?"width":"height";m.value=b.value[t],A.value=k.value[t],p.value=m.value+1<A.value}if($.value>=0&&f.el){const t=f.el.children[Q.value];W(t,l.centerActive)}})})}const x=S(!1);function W(e,t){let r=0;t?r=pe({containerElement:u.el,isHorizontal:i.value,selectedElement:e}):r=de({containerElement:u.el,isHorizontal:i.value,isRtl:o.value,selectedElement:e}),O(r)}function O(e){if(!D||!u.el)return;const t=z(i.value,u.el),r=K(i.value,o.value,u.el);if(!(N(i.value,u.el)<=t||Math.abs(e-r)<16)){if(i.value&&o.value&&u.el){const{scrollWidth:P,offsetWidth:_}=u.el;e=P-_-e}i.value?C.horizontal(e,I.value):C(e,I.value)}}function X(e){const{scrollTop:t,scrollLeft:r}=e.target;c.value=i.value?r:t}function j(e){if(x.value=!0,!(!p.value||!f.el)){for(const t of e.composedPath())for(const r of f.el.children)if(r===t){W(r);return}}}function J(e){x.value=!1}let w=!1;function Y(e){!w&&!x.value&&!(e.relatedTarget&&f.el?.contains(e.relatedTarget))&&y(),w=!1}function M(){w=!0}function Z(e){if(!f.el)return;function t(r){e.preventDefault(),y(r)}i.value?e.key==="ArrowRight"?t(o.value?"prev":"next"):e.key==="ArrowLeft"&&t(o.value?"next":"prev"):e.key==="ArrowDown"?t("next"):e.key==="ArrowUp"&&t("prev"),e.key==="Home"?t("first"):e.key==="End"&&t("last")}function y(e){if(!f.el)return;let t;if(!e)t=ve(f.el)[0];else if(e==="next"){if(t=f.el.querySelector(":focus")?.nextElementSibling,!t)return y("first")}else if(e==="prev"){if(t=f.el.querySelector(":focus")?.previousElementSibling,!t)return y("last")}else e==="first"?t=f.el.firstElementChild:e==="last"&&(t=f.el.lastElementChild);t&&t.focus({preventScroll:!0})}function R(e){const t=i.value&&o.value?-1:1,r=(e==="prev"?-t:t)*m.value;let F=c.value+r;if(i.value&&o.value&&u.el){const{scrollWidth:P,offsetWidth:_}=u.el;F+=P-_}O(F)}const E=g(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),T=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return p.value||Math.abs(c.value)>0;case"mobile":return d.value||p.value||Math.abs(c.value)>0;default:return!d.value&&(p.value||Math.abs(c.value)>0)}}),V=g(()=>Math.abs(c.value)>1),H=g(()=>{if(!u.value)return!1;const e=N(i.value,u.el),t=he(i.value,u.el);return e-t-Math.abs(c.value)>1});return fe(()=>h(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!i.value,"v-slide-group--has-affixes":T.value,"v-slide-group--is-overflowing":p.value},v.value,l.class],style:l.style,tabindex:x.value||n.selected.value.length?-1:0,onFocus:Y},{default:()=>[T.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!V.value}],onMousedown:M,onClick:()=>V.value&&R("prev")},[a.prev?.(E.value)??h(q,null,{default:()=>[h(B,{icon:o.value?l.nextIcon:l.prevIcon},null)]})]),h("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:X},[h("div",{ref:f,class:"v-slide-group__content",onFocusin:j,onFocusout:J,onKeydown:Z},[a.default?.(E.value)])]),T.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!H.value}],onMousedown:M,onClick:()=>H.value&&R("next")},[a.next?.(E.value)??h(q,null,{default:()=>[h(B,{icon:o.value?l.prevIcon:l.nextIcon},null)]})])]})),{selected:n.selected,scrollTo:R,scrollOffset:c,focus:y}}});export{Se as V,me as m};