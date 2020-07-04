/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpweb_settlers=window.dojoWebpackJsonpweb_settlers||[]).push([["src/widgets/cube/Cube"],{275:function(e,o,n){e.exports={" _key":"web-settlers/Cube",root:"Cube-m__root__2249f41ek_k"}},288:function(e,o,n){"use strict";n.r(o);var r=n(20),t=n(28),i=n(275);const u=Object(r.a)().properties();o.default=u(function({properties:e}){const{onGLReady:o}=e();return Object(r.g)("div",{classes:[i.root]},Object(r.g)(t.a,{fragmentSource:"#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nin vec4 vColour;\nout vec4 pixelColour;\n\nvoid main(void) {\n    // return the provided pixel colour\n    pixelColour = vColour;\n}\n",vertexSource:"#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nin vec3 vertexPos;\nin vec4 vertexColour;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nout vec4 vColour;\n\nvoid main(void) {\n    // return the transformed and projected vertex value\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertexPos, 1.0);\n    // output the vertexColour in vColour\n    vColour = vertexColour;\n}\n",onGLReady:o}))})}}]);
//# sourceMappingURL=Cube.8e8cf6144bb48267d255.bundle.js.map