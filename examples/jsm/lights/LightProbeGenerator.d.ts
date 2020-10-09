/// <reference lib="dom" />
import {
  CubeTexture,
  LightProbe,
  WebGLCubeRenderTarget,
  WebGLRenderer,
} from "../../../src/Three.d.ts";

export namespace LightProbeGenerator {
  export function fromCubeTexture(cubeTexture: CubeTexture): LightProbe;
  export function fromCubeRenderTarget(
    renderer: WebGLRenderer,
    cubeRenderTarget: WebGLCubeRenderTarget,
  ): LightProbe;
}
