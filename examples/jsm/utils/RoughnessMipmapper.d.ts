/// <reference lib="dom" />
import { MeshStandardMaterial, WebGLRenderer } from "../../../src/Three.d.ts";

export class RoughnessMipmapper {
  constructor(renderer: WebGLRenderer);
  generateMipmaps(material: MeshStandardMaterial): void;
  dispose(): void;
}
