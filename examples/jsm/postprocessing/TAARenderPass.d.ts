/// <reference lib="dom" />
import { Camera, Color, Scene } from "../../../src/Three.d.ts";

import { SSAARenderPass } from "./SSAARenderPass.d.ts";

export class TAARenderPass extends SSAARenderPass {
  constructor(
    scene: Scene,
    camera: Camera,
    clearColor: Color | string | number,
    clearAlpha: number,
  );
  accumulate: boolean;
}
