import { WebGLRenderer } from "../renderers/WebGLRenderer.d.ts";
import { WebGLRenderTarget } from "../renderers/WebGLRenderTarget.d.ts";
import { Texture } from "../textures/Texture.d.ts";
import { CubeTexture } from "../textures/CubeTexture.d.ts";
import { Scene } from "../scenes/Scene.d.ts";

export class PMREMGenerator {
  constructor(renderer: WebGLRenderer);
  fromScene(
    scene: Scene,
    sigma?: number,
    near?: number,
    far?: number,
  ): WebGLRenderTarget;
  fromEquirectangular(equirectangular: Texture): WebGLRenderTarget;
  fromCubemap(cubemap: CubeTexture): WebGLRenderTarget;
  compileCubemapShader(): void;
  compileEquirectangularShader(): void;
  dispose(): void;
}
