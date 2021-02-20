/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpweb_settlers=window.dojoWebpackJsonpweb_settlers||[]).push([["src/widgets/cube/Cube"],{23:function(e,o,n){"use strict";n.d(o,"a",function(){return r});var t=n(0);n(1);function r(e,o=!1,n=!1){return n?t.default[e].bind(t.default):t.default[e]}},294:function(e,o,n){e.exports={" _key":"web-settlers/Cube",root:"Cube-m__root__2249f41ek_k"}},356:function(e,o,n){"use strict";n.r(o);var t=n(20),r=n(47),i=n(294);const u=Object(t.a)().properties();o.default=u(function({properties:e}){const{onGLExit:o,onGLReady:n}=e();return Object(t.k)("div",{classes:[i.root]},Object(t.k)(r.a,{fragmentSource:"#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nin lowp vec4 vColour;\n\nout lowp vec4 pixelColour;\n\nvoid main(void) {\n    // return the provided pixel colour\n    pixelColour = vColour;\n}\n",vertexSource:"#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nin vec3 vertexPos;\nin lowp vec4 vertexColour;\n\nout lowp vec4 vColour;\n\nvoid main(void) {\n    // return the transformed and projected vertex value\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertexPos, 1.0);\n    // output the vertexColour in vColour\n    vColour = vertexColour;\n}\n",onGLReady:n,onGLExit:o}))})}}]);
