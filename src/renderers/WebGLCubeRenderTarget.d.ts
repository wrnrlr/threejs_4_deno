import {
  WebGLRenderTargetOptions,
  WebGLRenderTarget,
} from "./WebGLRenderTarget.d.ts";
import { WebGLRenderer } from "./WebGLRenderer.d.ts";
import { Texture } from "./../textures/Texture.d.ts";

export class WebGLCubeRenderTarget extends WebGLRenderTarget {
  constructor(
    size: number,
    options?: WebGLRenderTargetOptions,
  );

  fromEquirectangularTexture(renderer: WebGLRenderer, texture: Texture): this;
}
