import{f as a,Z as s,g as F,r as U,z as B,A as z,D as me,E as pe,a as _e,C as xe,u as he,G as ye,e as we,l as ge,H as be,o as Me,p as Te,q as Le,w as Ve,v as Ae,k as Pe,i as b,B as H,M as Ee,x as Ie,V as Ce}from"./VTextField-B_mwK8Yj.js";import{u as K,a as De,D as Re,V as Se}from"./VSelect-gI1K2At_.js";import{a as j,u as Fe}from"./ModelBuffer-BNFRDUag.js";import{d as Z,r as q,s as W,x as X,o as Y,c as $,u,v as O,w as C,l as Ue,a as x,p as N,n as Be,q as ze}from"./index-CYkLn8oS.js";import{P as G}from"./Positions-CLUywhDI.js";import"./VMenu-D5DDkZW1.js";import"./VSlideGroup-BGbNKVgN.js";function He(n){const{height:f,vertexFor:d,width:m}=n,v=f*m,h=new G(v/2),y=new G(v/2);let M=0,p=0;for(const{isEvenRow:T,x:r,y:c}of K(m,f)){const[l,w,V]=d(r,c);T?h.setPosition(M++,l,w,V):y.setPosition(p++,l,w,V)}return{evenRowPositions:h,oddRowPositions:y}}function Oe(){const n=j(6);return n.emitVertex(a(0,1,0),s,F),n.emitVertex(a(.5,0,0),s,F),n.emitVertex(a(1,1,0),s,F),n.emitVertex(a(1,1,0),s,U),n.emitVertex(a(.5,0,0),s,U),n.emitVertex(a(1.5,0,0),s,U),n}function ke(){const n=j(6);return n.emitVertex(a(1,1,0),s,B),n.emitVertex(a(1.5,0,0),s,B),n.emitVertex(a(2,1,0),s,B),n.emitVertex(a(1,1,0),s,z),n.emitVertex(a(.5,0,0),s,z),n.emitVertex(a(1.5,0,0),s,z),n}var Ne=`#version 300 es
precision highp float;in vec3 v_normal;in vec4 v_colour;in vec2 v_texcoord;in vec3 v_tangent;in vec3 v_surfaceToLight;in vec3 v_surfaceToView;uniform vec3 u_emissive;uniform vec3 u_ambient;uniform vec3 u_ambientLight;uniform vec3 u_diffuse;uniform vec3 u_specular;uniform float u_opacity;uniform float u_shininess;uniform sampler2D u_diffuseMap;uniform sampler2D u_normalMap;uniform sampler2D u_specularMap;out vec4 outColour;void main(void){vec3 normal=normalize(v_normal);vec3 surfaceToLightDirection=normalize(v_surfaceToLight);vec3 surfaceToViewDirection=normalize(v_surfaceToView);vec3 halfVector=normalize(surfaceToLightDirection+surfaceToViewDirection);float diffuseLight=dot(surfaceToLightDirection,normal)*0.5+0.5;vec4 diffuseMapColour=texture(u_diffuseMap,v_texcoord);vec3 diffuse=u_diffuse*diffuseMapColour.rgb*v_colour.rgb;float specularLight=clamp(dot(normal,halfVector),0.0,1.0);vec4 specularMapColour=texture(u_specularMap,v_texcoord);vec3 specular=u_specular*specularMapColour.rgb;float opacity=u_opacity*diffuseMapColour.a*v_colour.a;outColour=vec4(u_emissive+u_ambient*u_ambientLight+diffuse*diffuseLight+specular*pow(specularLight,u_shininess),opacity);}`,Ge=`#version 300 es
#pragma debug(on)
in mat4 a_model_position;in vec3 a_vertex;in vec2 a_lscoord;in vec3 a_normal;in vec4 a_colour;in vec2 a_texcoord;in vec3 a_tangent;uniform mat4 u_projection;uniform mat4 u_view;uniform mat4 u_world;uniform vec3 u_worldLightPosition;uniform vec3 u_cameraPosition;uniform sampler2D u_miscDataMap;out vec3 v_normal;out vec4 v_colour;out vec2 v_texcoord;out vec3 v_tangent;out vec3 v_surfaceToLight;out vec3 v_surfaceToView;const vec4 black=vec4(0.0,0.0,0.0,1.0);const vec4 navy=vec4(0.0,0.0,0.5,1.0);const vec4 green=vec4(0.0,0.5,0.0,1.0);const vec4 teal=vec4(0.0,0.5,0.5,1.0);const vec4 maroon=vec4(0.5,0.0,0.0,1.0);const vec4 purple=vec4(0.5,0.0,0.5,1.0);const vec4 olive=vec4(0.5,0.5,0.0,1.0);const vec4 gray=vec4(0.5,0.5,0.5,1.0);const vec4 silver=vec4(0.75,0.75,0.75,1.0);const vec4 blue=vec4(0.0,0.0,1.0,1.0);const vec4 lime=vec4(0.0,1.0,0.0,1.0);const vec4 cyan=vec4(0.0,1.0,1.0,1.0);const vec4 red=vec4(1.0,0.0,0.0,1.0);const vec4 magenta=vec4(1.0,0.0,1.0,1.0);const vec4 yellow=vec4(1.0,1.0,0.0,1.0);const vec4 white=vec4(1.0,1.0,1.0,1.0);const vec4 colours[16]=vec4[16](black,navy,green,teal,maroon,purple,olive,gray,silver,blue,lime,cyan,red,magenta,yellow,white);vec4 getColourFromFloat(float index){int idx=int(mod(index,16.0));return colours[idx];}int toInt(float value){return int(value*255.0);}ivec2 getIcoord1(vec2 lscoord){int y=int(lscoord.r);int x=int(lscoord.g);return ivec2(x,y);}ivec2 getIcoord2(vec2 lscoord){int y=int(lscoord.r);int x=int(lscoord.g)+1;return ivec2(x,y);}const vec4 lsColours[35]=vec4[35](green,olive,white,green,yellow,blue,blue,yellow,green,green,green,olive,olive,olive,olive,green,red,magenta,olive,blue,magenta,magenta,magenta,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,olive);vec4 colourFromLs(vec2 ls1,vec2 ls2,bool isEvenRow){int triangle=int(step(3.0,float(gl_VertexID)));int lsId;if(isEvenRow){if(triangle==0){lsId=toInt(ls2[0]);}else{lsId=toInt(ls1[1]);}}else{lsId=toInt(ls1[triangle]);}vec4 colour=lsColours[lsId];if(isEvenRow){colour.a=0.75;}return colour;}void main(void){ivec2 icoord1=getIcoord1(a_lscoord);vec4 iHeightAndTypeMapColour1=texelFetch(u_miscDataMap,icoord1,0);vec2 ls1=iHeightAndTypeMapColour1.gb;ivec2 icoord2=getIcoord2(a_lscoord);vec4 iHeightAndTypeMapColour2=texelFetch(u_miscDataMap,icoord2,0);vec2 ls2=iHeightAndTypeMapColour2.gb;int altitude=toInt(iHeightAndTypeMapColour1.r*0.2);vec4 worldPosition=u_view*a_model_position*vec4(a_vertex.xy,float(altitude),1.0);gl_Position=u_projection*worldPosition;bool isEvenRow=(icoord1.y&1)==0;v_colour=colourFromLs(ls1,ls2,isEvenRow);v_texcoord=a_texcoord;v_surfaceToLight=u_worldLightPosition-worldPosition.xyz;v_surfaceToView=u_cameraPosition-worldPosition.xyz;mat3 normalMat=mat3(u_world);v_normal=normalize(normalMat*a_normal);v_tangent=normalize(normalMat*a_tangent);}`;const Ke=Z({__name:"TestbedScene",props:{mapDefinition:{},heightAndTypeMap:{},textureSet:{}},setup(n,{expose:f}){const d=n,m=me();pe(m);const v=a(0,10,10),h=a(.1,.1,.1),y=q(void 0),{loadingStore:M}=W(),p=[Ne],T=[Ge],r=_e(xe.LookAt,a(0,50,25),a(0,0,0),s),c=[],l=X(()=>d.textureSet?.image);function w(e,o,{projection:i,view:g},{colours:D,indexes:L,normals:P,tangents:R,texcoords:S,vertexes:E},I,ee){o.setClearColour(we),o.setEnableBits(e.BLEND,e.DEPTH_TEST),o.bindUniform("u_projection",t=>e.uniformMatrix4fv(t,!1,i)),o.bindUniform("u_view",t=>e.uniformMatrix4fv(t,!1,g)),o.bindUniform("u_world",t=>e.uniformMatrix4fv(t,!1,m)),o.bindUniform("u_ambientLight",t=>e.uniform3fv(t,h)),o.bindUniform("u_worldLightPosition",t=>e.uniform3fv(t,v)),o.bindUniform("u_cameraPosition",t=>e.uniform3fv(t,r.position));const{ambient:oe,diffuse:te,emissive:ne,opacity:ie,shininess:re,specular:ae}=Re,_=Ie(e);_.bindUniform("u_emissive",t=>e.uniform3fv(t,ne)),_.bindUniform("u_ambient",t=>e.uniform3fv(t,oe)),_.bindUniform("u_diffuse",t=>e.uniform3fv(t,te)),_.bindUniform("u_specular",t=>e.uniform3fv(t,ae)),_.bindUniform("u_opacity",t=>e.uniform1f(t,ie)),_.bindUniform("u_shininess",t=>e.uniform1f(t,re));const se=ge(Le(e),Te(e),Me(e),be(e,d.heightAndTypeMap));function*ce({height:t,width:le}){for(const{isEvenRow:de,x:ve,y:fe}of K(le,t))de===ee&&(yield fe,yield ve)}const ue=Float32Array.from(ce(d.mapDefinition)),k=Ve(e,o,e.TRIANGLES,Ae(e,o,_,se,e.TRIANGLES,L.length,I.usedCount,Fe("a_model_position",I),b("a_vertex",E,3,e.FLOAT),b("a_lscoord",ue,2,e.FLOAT,1),b("a_normal",P,3,e.FLOAT),b("a_colour",D,4,e.FLOAT),b("a_texcoord",S,2,e.FLOAT),b("a_tangent",R,3,e.FLOAT),Pe(L)));return O(()=>k.setTexture(u(l))),k}function V(e,o){o.bind("ArrowDown",()=>r.pedestal(-.1)),o.bind("ArrowUp",()=>r.pedestal(.1)),o.bind("ArrowLeft",()=>r.arc(-.5)),o.bind("ArrowRight",()=>r.arc(.5)),o.bind("KeyL",()=>c.forEach(i=>i.setDrawMode(e.LINES))),o.bind("KeyK",()=>c.forEach(i=>i.setDrawMode(e.TRIANGLES)))}function J(e,o){o.bind(H.Left,i=>r.arc(-i.movement.dx*.25)),o.bind(H.Right,i=>{r.track(-i.movement.dx*.1,-i.movement.dy*.1)}),o.bindScroll(i=>r.dolly(i*.25)),o.bind(H.Left+Ee.Ctrl,({movement:i})=>{v[0]+=i.dx*.2,v[1]+=i.dy*-.2})}function Q(e,o){o.bind(i=>{const{movement:g}=i[0];Math.abs(g.dx)>0&&r.arc(-g.dx*.25)})}const A=he(r,(e,[o],{keyboard:i,mouse:g,touch:D},L)=>{O(()=>{c.forEach(I=>I.delete());const P=De(d.mapDefinition),{evenRowPositions:R,oddRowPositions:S}=He(P);c.splice(0,1/0,w(e,o,L,Oe(),R,!0),w(e,o,L,ke(),S,!1));const{height:E}=P;r.moveTo(0,E/1.5,E/1.75),r.lookAt(0,0,0)}),V(e,i),J(e,g),Q(e,D),M.setLoading(!1)},()=>{},()=>{c.forEach((e,o)=>{e.activate(o===0),e.draw()})},()=>{},()=>{c.forEach(e=>e.delete()),c.splice(0,1/0)});return f({fps:A.fps}),(e,o)=>(Y(),$(ye,{ref_key:"glPanel",ref:y,"fragment-sources":p,"vertex-sources":T,onInit:u(A).init,onResize:u(A).resize,onExit:u(A).exit},null,8,["onInit","onResize","onExit"]))}}),no=Z({__name:"TestBed",setup(n){const f=q(void 0),{mapStore:d,mapsStore:m,texturesStore:v}=W(),{maps:h}=m,{heightAndTypeMap:y,loadMap:M,map:p}=d,{selectTextureByWorldType:T,currentTexture:r}=v,c=X(()=>u(h).map(l=>({value:l.id,title:l.name})));return O(async()=>{const l=u(p);await T(l.worldType)}),(l,w)=>(Y(),$(Ue,{fluid:"",class:"d-flex flex-column pa-0"},{default:C(()=>[x(ze,{class:"flex-grow-0 flex-shrink-0",color:"secondary"},{default:C(()=>[x(N,{class:"mr-3","max-width":"176"},{default:C(()=>[x(Se,{label:"Map","hide-details":"",items:c.value,"model-value":u(p).id,"menu-props":{openOnHover:!0},"onUpdate:modelValue":u(M)},null,8,["items","model-value","onUpdate:modelValue"])]),_:1}),x(Be),x(N,{class:"mr-3","max-width":"56"},{default:C(()=>[x(Ce,{class:"noMouse","hide-details":"",label:"fps","model-value":f.value?.fps,readonly:""},null,8,["model-value"])]),_:1})]),_:1}),x(Ke,{ref_key:"testbedScene",ref:f,class:"flex-fill","map-definition":u(p),"height-and-type-map":u(y),"texture-set":u(r)},null,8,["map-definition","height-and-type-map","texture-set"])]),_:1}))}});export{no as default};