/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpweb_settlers=window.dojoWebpackJsonpweb_settlers||[]).push([[2],{316:function(o,e,n){o.exports={" _key":"web-settlers/Cube",root:"Cube-m__root__2249f41ek_k"}},374:function(o,e,n){"use strict";n.r(e);var r=n(42),t=n(63),i=n(316);const u=Object(r.a)().properties();e.default=u(function({properties:o}){const{onGLExit:e,onGLReady:n}=o();return Object(r.k)("div",{classes:[i.root]},Object(r.k)(t.b,{fragmentSources:["#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nin lowp vec4 vColour;\n\nout lowp vec4 pixelColour;\n\nvoid main(void) {\n    // return the provided pixel colour\n    pixelColour = vColour;\n}\n"],vertexSources:["#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nuniform mat4 projectionMatrix;\nuniform mat4 modelViewMatrix;\n\nin vec3 vertexPos;\nin lowp vec4 vertexColour;\n\nout lowp vec4 vColour;\n\nvoid main(void) {\n    // return the transformed and projected vertex value\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertexPos, 1.0);\n    // output the vertexColour in vColour\n    vColour = vertexColour;\n}\n"],onGLReady:n,onGLExit:e}))})}}]);
