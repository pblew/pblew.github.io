import{f as d,Z as T,z as g,P as R,A as le,a as fe,C as ve,u as de,G as me,e as pe,l as _e,D as xe,o as he,p as we,q as ye,w as Me,v as Te,k as Ee,i as V,B as A,M as be,x as ge,V as Ve}from"./VTextField-D-YC0kSY.js";import{u as G,w as N,D as Le,V as Se}from"./VSelect-bz-VuZj9.js";import{a as Ce,u as Pe}from"./ModelBuffer-0EM2kYGC.js";import{x as j,d as H,y as De,r as Fe,s as K,z as k,o as Z,c as q,u as l,v as O,A as Ie,w as P,l as Re,a as M,p as X,n as Ae,q as Oe}from"./index-nhIR2a_a.js";import{P as ze}from"./Positions-CKx3TqZw.js";import"./VMenu-BhIf2fRm.js";import"./VSlideGroup-BvgVuIWY.js";function Ue(s){const{height:f,vertexFor:v,width:c}=s,x=f*c,p=new ze(x);let _=0;for(const{x:h,y:m}of G(c,f)){const[w,u,t]=v(h,m);p.setPosition(_++,w,u,t)}return p}function Be(s){const{height:f,nodes:v,width:c}=s,x=-(c>>1),p=-(f>>1);function _(u,t){const r=N(u,c),a=N(t,f);return v[a*c+r]}function h(u,t){const r=_(u,t),{terrain1:a}=r;return j(a)}function m(u,t){const r=_(u,t),{terrain2:a}=r;return j(a)}function w(u,t){const a=(t&1)===0?0:-.5;return[u+a+x,t+p,0]}return{width:c,height:f,terrain1For:h,terrain2For:m,vertexFor:w}}function Ne(){const s=Ce(6);return s.emitVertex(d(0,0,0),T,g),s.emitVertex(d(-.5,1,0),T,g),s.emitVertex(d(.5,1,0),T,g),s.emitVertex(d(0,0,0),T,g),s.emitVertex(d(.5,1,0),T,g),s.emitVertex(d(1,0,0),T,g),s}var je=`#version 300 es
precision highp float;in vec3 v_normal;in vec4 v_colour;in vec2 v_texcoord;in vec3 v_tangent;in vec3 v_surfaceToLight;in vec3 v_surfaceToView;uniform vec3 u_emissive;uniform vec3 u_ambient;uniform vec3 u_ambientLight;uniform vec3 u_diffuse;uniform vec3 u_specular;uniform float u_opacity;uniform float u_shininess;uniform sampler2D u_diffuseMap;uniform sampler2D u_normalMap;uniform sampler2D u_specularMap;out vec4 outColour;void main(void){vec3 normal=normalize(v_normal);vec3 surfaceToLightDirection=normalize(v_surfaceToLight);vec3 surfaceToViewDirection=normalize(v_surfaceToView);vec3 halfVector=normalize(surfaceToLightDirection+surfaceToViewDirection);float diffuseLight=dot(surfaceToLightDirection,normal)*0.5+0.5;vec4 diffuseMapColour=texture(u_diffuseMap,v_texcoord);vec3 diffuse=u_diffuse*diffuseMapColour.rgb*v_colour.rgb;float specularLight=clamp(dot(normal,halfVector),0.0,1.0);vec4 specularMapColour=texture(u_specularMap,v_texcoord);vec3 specular=u_specular*specularMapColour.rgb;float opacity=u_opacity*diffuseMapColour.a*v_colour.a;outColour=vec4(u_emissive+u_ambient*u_ambientLight+diffuse*diffuseLight+specular*pow(specularLight,u_shininess),opacity);}`,Xe=`#version 300 es
in mat4 a_model_position;in vec3 a_vertex;in vec2 a_lscoord;in vec3 a_normal;in vec4 a_colour;in vec2 a_texcoord;in vec3 a_tangent;uniform mat4 u_projection;uniform mat4 u_view;uniform mat4 u_world;uniform vec3 u_worldLightPosition;uniform vec3 u_cameraPosition;uniform sampler2D u_miscDataMap;out vec3 v_normal;out vec4 v_colour;out vec2 v_texcoord;out vec3 v_tangent;out vec3 v_surfaceToLight;out vec3 v_surfaceToView;const vec4 black=vec4(0.0,0.0,0.0,1.0);const vec4 navy=vec4(0.0,0.0,0.5,1.0);const vec4 green=vec4(0.0,0.5,0.0,1.0);const vec4 teal=vec4(0.0,0.5,0.5,1.0);const vec4 maroon=vec4(0.5,0.0,0.0,1.0);const vec4 purple=vec4(0.5,0.0,0.5,1.0);const vec4 olive=vec4(0.5,0.5,0.0,1.0);const vec4 gray=vec4(0.5,0.5,0.5,1.0);const vec4 silver=vec4(0.75,0.75,0.75,1.0);const vec4 blue=vec4(0.0,0.0,1.0,1.0);const vec4 lime=vec4(0.0,1.0,0.0,1.0);const vec4 cyan=vec4(0.0,1.0,1.0,1.0);const vec4 red=vec4(1.0,0.0,0.0,1.0);const vec4 magenta=vec4(1.0,0.0,1.0,1.0);const vec4 yellow=vec4(1.0,1.0,0.0,1.0);const vec4 white=vec4(1.0,1.0,1.0,1.0);const vec4 colours[16]=vec4[16](black,navy,green,teal,maroon,purple,olive,gray,silver,blue,lime,cyan,red,magenta,yellow,white);vec4 getColourFromFloat(int index){int idx=index % 16;return colours[idx];}int toInt(float value){return int(value*255.0);}const int NUM_TILES=2;const ivec2[6]EVEN_VERTEX_OFFSETS=ivec2[6](ivec2(0,0),ivec2(0,1),ivec2(1,1),ivec2(0,0),ivec2(1,1),ivec2(1,0));const ivec2[6]ODD_VERTEX_OFFSETS=ivec2[6](ivec2(0,0),ivec2(0,1),ivec2(1,1),ivec2(0,0),ivec2(1,1),ivec2(1,0));const vec4 FLIP_X=vec4(-1.0,1.0,1.0,1.0);ivec2 getMainVertexCoord(vec2 lscoord,ivec2 mapSize,int tile){int tileOffset=tile*mapSize.y/NUM_TILES;int y=int(lscoord.r)+tileOffset;int x=(int(lscoord.g)-int((y&1)==1))% mapSize.x;return ivec2(x,y);}ivec2 getOffsetVertexCoord(vec2 lscoord,ivec2 mapSize,int tile,int vertexId){int mapHeight=mapSize.y/NUM_TILES;int tileOffset=tile*mapHeight;bool isEvenRow=(int(lscoord.y)&1)==0;ivec2 vertexOffset=(isEvenRow? EVEN_VERTEX_OFFSETS[vertexId]: ODD_VERTEX_OFFSETS[vertexId]);int y=((int(lscoord.r)+vertexOffset.y)% mapHeight)+tileOffset;int x=(int(lscoord.g)+vertexOffset.x)% mapSize.x;return ivec2(x,y);}const vec4 lsColours[35]=vec4[35](green,olive,white,green,yellow,blue,blue,yellow,green,green,green,olive,olive,olive,olive,green,red,magenta,olive,blue,magenta,magenta,magenta,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,cyan,olive);vec4 colourFromLs(vec2 ls1,bool isEvenRow){int triangle=int(step(3.0,float(gl_VertexID)));int lsId=toInt(ls1[triangle]);vec4 colour=lsColours[lsId];colour.a=1.0-(float(isEvenRow)*0.2);return colour;}void main(void){ivec2 mapSize=textureSize(u_miscDataMap,0);ivec2 mainVertexCoord=getMainVertexCoord(a_lscoord,mapSize,1);vec4 mainVertexMap1Colour=texelFetch(u_miscDataMap,mainVertexCoord,0);vec2 ls=mainVertexMap1Colour.gb;ivec2 offsetVertexCoord=getOffsetVertexCoord(a_lscoord,mapSize,1,gl_VertexID);vec4 offsetVertexMap1Colour=texelFetch(u_miscDataMap,offsetVertexCoord,0);float altitude=offsetVertexMap1Colour.r;vec4 worldPosition=u_view*a_model_position*vec4(a_vertex.x,a_vertex.y,(altitude*255.0)*0.25,1.0);gl_Position=u_projection*worldPosition*FLIP_X;bool isEvenRow=(mainVertexCoord.y&1)==0;v_colour=colourFromLs(ls,isEvenRow);v_texcoord=a_texcoord;v_surfaceToLight=u_worldLightPosition-worldPosition.xyz;v_surfaceToView=u_cameraPosition-worldPosition.xyz;mat3 normalMat=mat3(u_world);v_normal=normalize(normalMat*a_normal);v_tangent=normalize(normalMat*a_tangent);}`;const Ge=H({__name:"TestbedScene",props:{mapDefinition:{},heightAndTypeMap:{},tileMap:{},textureSet:{}},setup(s,{expose:f}){const v=s,c=De({projectionMode:R.PERSPECTIVE}),x=le(),p=d(0,10,10),_=d(.1,.1,.1),h=Fe(void 0),{loadingStore:m}=K(),w=[je],u=[Xe],t=fe(ve.LookAt,d(0,50,25),d(0,0,0),T),r=[],a=k(()=>v.textureSet?.image);function z(e,o,{projection:n,view:b},{colours:D,indexes:L,normals:S,tangents:F,texcoords:C,vertexes:I},U){o.setClearColour(pe),o.setEnableBits(e.BLEND,e.DEPTH_TEST),o.bindUniform("u_projection",i=>e.uniformMatrix4fv(i,!1,n)),o.bindUniform("u_view",i=>e.uniformMatrix4fv(i,!1,b)),o.bindUniform("u_world",i=>e.uniformMatrix4fv(i,!1,x)),o.bindUniform("u_ambientLight",i=>e.uniform3fv(i,_)),o.bindUniform("u_worldLightPosition",i=>e.uniform3fv(i,p)),o.bindUniform("u_cameraPosition",i=>e.uniform3fv(i,t.position));const{ambient:J,diffuse:Q,emissive:ee,opacity:oe,shininess:te,specular:ie}=Le,y=ge(e);y.bindUniform("u_emissive",i=>e.uniform3fv(i,ee)),y.bindUniform("u_ambient",i=>e.uniform3fv(i,J)),y.bindUniform("u_diffuse",i=>e.uniform3fv(i,Q)),y.bindUniform("u_specular",i=>e.uniform3fv(i,ie)),y.bindUniform("u_opacity",i=>e.uniform1f(i,oe)),y.bindUniform("u_shininess",i=>e.uniform1f(i,te));const ne=_e(ye(e),we(e),he(e),xe(e,v.tileMap));function*re({height:i,width:se}){for(const{x:ce,y:ue}of G(se,i))yield ue,yield ce}const ae=Float32Array.from(re(v.mapDefinition)),B=Me(e,o,e.TRIANGLES,Te(e,o,y,ne,e.TRIANGLES,L.length,U.usedCount,Pe("a_model_position",U),V("a_vertex",I,3,e.FLOAT),V("a_lscoord",ae,2,e.FLOAT,1),V("a_normal",S,3,e.FLOAT),V("a_colour",D,4,e.FLOAT),V("a_texcoord",C,2,e.FLOAT),V("a_tangent",F,3,e.FLOAT),Ee(L)));return O(()=>B.setTexture(l(a))),B}function Y(e,o){o.bind("ArrowDown",()=>t.pedestal(-.1)),o.bind("ArrowUp",()=>t.pedestal(.1)),o.bind("ArrowLeft",()=>t.arc(-.5)),o.bind("ArrowRight",()=>t.arc(.5)),o.bind("KeyL",()=>r.forEach(n=>n.setDrawMode(e.LINES))),o.bind("KeyK",()=>r.forEach(n=>n.setDrawMode(e.TRIANGLES))),o.bind("KeyO",()=>{c.projectionMode=R.ORTHOGRAPHIC,E.resize()}),o.bind("KeyP",()=>{c.projectionMode=R.PERSPECTIVE,E.resize()})}function W(e,o){o.bind(A.Left,({movement:n})=>t.arc(n.dx*.25)),o.bind(A.Right,({movement:n})=>{t.track(n.dx*.1,-n.dy*.1)}),o.bindScroll(n=>t.dolly(n*.25)),o.bind(A.Left+be.Ctrl,({movement:n})=>{t.tilt(n.dy*.1),t.pan(n.dx*.1)})}function $(e,o){o.bind(n=>{const{movement:b}=n[0];Math.abs(b.dx)>0&&t.arc(-b.dx*.25)})}const E=de(t,(e,[o],{keyboard:n,mouse:b,touch:D},L)=>{O(()=>{r.forEach(I=>I.delete());const S=Be(v.mapDefinition),F=Ue(S);r.splice(0,1/0,z(e,o,L,Ne(),F));const{height:C}=S;t.moveTo(0,C/1.5,C/1.75),t.lookAt(0,0,0)}),Y(e,n),W(e,b),$(e,D),m.setLoading(!1)},()=>{},()=>{r.forEach((e,o)=>{e.activate(o===0),e.draw()})},()=>{},()=>{r.forEach(e=>e.delete()),r.splice(0,1/0)});return f({fps:E.fps}),(e,o)=>(Z(),q(me,{ref_key:"glPanel",ref:h,"fragment-sources":w,"vertex-sources":u,"projection-mode":c.projectionMode,onInit:l(E).init,onResize:l(E).resize,onExit:l(E).exit},null,8,["projection-mode","onInit","onResize","onExit"]))}}),to=H({__name:"TestBed",setup(s){const f=Ie(void 0),{mapStore:v,mapsStore:c,texturesStore:x}=K(),{maps:p}=c,{heightAndTypeMap:_,loadMap:h,map:m,tileMap:w}=v,{selectTextureByWorldType:u,currentTexture:t}=x,r=k(()=>l(p).map(a=>({value:a.id,title:a.name})));return O(async()=>{const a=l(m);await u(a.worldType)}),(a,z)=>(Z(),q(Re,{fluid:"",class:"d-flex flex-column pa-0"},{default:P(()=>[M(Oe,{class:"flex-grow-0 flex-shrink-0",color:"secondary"},{default:P(()=>[M(X,{class:"mr-3","max-width":"176"},{default:P(()=>[M(Se,{label:"Map","hide-details":"",items:r.value,"model-value":l(m).id,"onUpdate:modelValue":l(h)},null,8,["items","model-value","onUpdate:modelValue"])]),_:1}),M(Ae),M(X,{class:"mr-3","max-width":"56"},{default:P(()=>[M(Ve,{class:"noMouse","hide-details":"",label:"fps","model-value":f.value?.fps,readonly:""},null,8,["model-value"])]),_:1})]),_:1}),M(Ge,{ref_key:"testbedScene",ref:f,class:"flex-fill","map-definition":l(m),"height-and-type-map":l(_),"tile-map":l(w),"texture-set":l(t)},null,8,["map-definition","height-and-type-map","tile-map","texture-set"])]),_:1}))}});export{to as default};