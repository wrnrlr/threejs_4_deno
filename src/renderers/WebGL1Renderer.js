/// <reference types="./WebGL1Renderer.d.ts" />
/// <reference lib="dom" />
import { WebGLRenderer } from "./WebGLRenderer.js";

function WebGL1Renderer(parameters) {
  WebGLRenderer.call(this, parameters);
}

WebGL1Renderer.prototype = Object.assign(
  Object.create(WebGLRenderer.prototype),
  {
    constructor: WebGL1Renderer,

    isWebGL1Renderer: true,
  },
);

export { WebGL1Renderer };
