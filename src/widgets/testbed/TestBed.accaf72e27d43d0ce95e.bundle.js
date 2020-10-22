/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpweb_settlers=window.dojoWebpackJsonpweb_settlers||[]).push([["src/widgets/testbed/TestBed"],{286:function(e,o,n){e.exports={" _key":"web-settlers/TestBed",root:"TestBed-m__root__2249f4FBjlN"}},315:function(e,o,n){"use strict";n.r(o);var t=n(20),r=n(32),i=n(286);const s=Object(t.a)().properties();o.default=s(function({properties:e}){const{onGLExit:o,onGLReady:n}=e();return Object(t.j)("div",{classes:[i.root]},Object(t.j)(r.a,{fragmentSource:"#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nflat in vec4 vColour;\nout vec4 pixelColour;\n\nvoid main(void) {\n    // return the provided pixel colour\n    pixelColour = vColour;\n}\n",vertexSource:"#version 300 es\n\nprecision mediump float;\nprecision mediump int;\n\nin vec3 vertexPos;\nin vec4 vertexColour;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nflat out vec4 vColour;\n\nvoid main(void) {\n    // return the transformed and projected vertex value\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(vertexPos, 1.0);\n    // output the vertexColour in vColour\n    vColour = vertexColour;\n}\n",onGLReady:n,onGLExit:o}))})}}]);
