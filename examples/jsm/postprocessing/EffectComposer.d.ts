/// <reference lib="dom" />
import {
  Clock,
  WebGLRenderer,
  WebGLRenderTarget,
} from "../../../src/Three.d.ts";

import { Pass } from "./Pass.d.ts";
import { ShaderPass } from "./ShaderPass.d.ts";

export class EffectComposer {
  constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);
  renderer: WebGLRenderer;
  renderTarget1: WebGLRenderTarget;
  renderTarget2: WebGLRenderTarget;
  writeBuffer: WebGLRenderTarget;
  readBuffer: WebGLRenderTarget;
  passes: Pass[];
  copyPass: ShaderPass;
  clock: Clock;
  renderToScreen: boolean;

  swapBuffers(): void;
  addPass(pass: Pass): void;
  insertPass(pass: Pass, index: number): void;
  isLastEnabledPass(passIndex: number): boolean;
  render(deltaTime?: number): void;
  reset(renderTarget?: WebGLRenderTarget): void;
  setSize(width: number, height: number): void;
  setPixelRatio(pixelRatio: number): void;
}
