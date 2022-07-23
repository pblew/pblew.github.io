/*!
 * 
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(window.dojoWebpackJsonpweb_experiments=window.dojoWebpackJsonpweb_experiments||[]).push([[7],{391:function(o,n,e){"use strict";e.r(n);var i=e(42),r=e(64);const t=Object(i.a)().properties();n.default=t(function({properties:o}){const{onGLExit:n,onGLReady:e}=o();return Object(i.k)(r.b,{fragmentSources:["#version 300 es\n\nprecision highp float;\nprecision highp int;\n\nin vec4 v_colour;\n\nout vec4 outColour;\n\nvoid main(void) {\n    // return the provided pixel colour\n    outColour = v_colour;\n}\n"],vertexSources:["#version 300 es\n\nprecision highp float;\nprecision highp int;\n\nin vec3 a_position;\nin vec4 a_colour;\n\nuniform mat4 u_projection;\nuniform mat4 u_modelView;\n\nout vec4 v_colour;\n\nvoid main(void) {\n    // return the transformed and projected vertex value\n    gl_Position = u_projection * u_modelView * vec4(a_position, 1.0);\n    // output the vertexColour in v_colour\n    v_colour = a_colour;\n}\n"],onGLReady:e,onGLExit:n})})}}]);
