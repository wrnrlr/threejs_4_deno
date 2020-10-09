/// <reference lib="dom" />
import { ShaderMaterial, Texture } from "../../../src/Three.d.ts";

import { Pass } from "./Pass.d.ts";

export class TexturePass extends Pass {
  constructor(map: Texture, opacity?: number);
  map: Texture;
  opacity: number;
  uniforms: object;
  material: ShaderMaterial;
  fsQuad: object;
}
