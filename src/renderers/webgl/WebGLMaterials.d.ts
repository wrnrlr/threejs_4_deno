import { Material } from "../../materials/Material.d.ts";
import { IFog } from "../../scenes/Fog.d.ts";
import { WebGLProperties } from "./WebGLProperties.d.ts";

export class WebGLMaterials {
  constructor(properties: WebGLProperties);

  refreshMaterialUniforms(
    uniforms: object,
    material: Material,
    pixelRatio: number,
    height: number,
  ): void;
  refreshFogUniforms(uniforms: object, fog: IFog): void;
}
