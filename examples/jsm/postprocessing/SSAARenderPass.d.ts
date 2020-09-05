/// <reference lib="dom" />
import {
  Scene,
  Camera,
  Color,
  ShaderMaterial,
} from "../../../src/Three.d.ts";

import { Pass } from "./Pass.d.ts";

export class SSAARenderPass extends Pass {
  constructor(
    scene: Scene,
    camera: Camera,
    clearColor: Color | string | number,
    clearAlpha: number,
  );
  scene: Scene;
  camera: Camera;
  sampleLevel: number;
  unbiased: boolean;
  clearColor: Color | string | number;
  clearAlpha: number;
  copyUniforms: object;
  copyMaterial: ShaderMaterial;
  fsQuad: object;
}
