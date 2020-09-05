/// <reference lib="dom" />
import { Object3D } from "../../core/Object3D.d.ts";
import { BufferGeometry } from "../../core/BufferGeometry.d.ts";
import { Material } from "../../materials/Material.d.ts";
import { WebGLProgram } from "./WebGLProgram.d.ts";

export class WebGLMorphtargets {
  constructor(gl: WebGLRenderingContext);

  update(
    object: Object3D,
    geometry: BufferGeometry,
    material: Material,
    program: WebGLProgram,
  ): void;
}
