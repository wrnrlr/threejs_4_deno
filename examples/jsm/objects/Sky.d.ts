/// <reference lib="dom" />
import {
  BoxBufferGeometry,
  Mesh,
  ShaderMaterial,
} from "../../../src/Three.d.ts";

export class Sky extends Mesh {
  constructor();

  geometry: BoxBufferGeometry;
  material: ShaderMaterial;

  static SkyShader: object;
}
