import { IUniform } from "../renderers/shaders/UniformsLib.d.ts";
import { MaterialParameters, Material } from "./Material.d.ts";
import { GLSLVersion } from "../constants.d.ts";

/**
 * @deprecated Use {@link PointsMaterial THREE.PointsMaterial} instead
 */
/**
 * @deprecated Use {@link PointsMaterial THREE.PointsMaterial} instead
 */
/**
 * @deprecated Use {@link PointsMaterial THREE.PointsMaterial} instead
 */

export interface ShaderMaterialParameters extends MaterialParameters {
  uniforms?: { [uniform: string]: IUniform };
  vertexShader?: string;
  fragmentShader?: string;
  linewidth?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
  lights?: boolean;
  clipping?: boolean;
  skinning?: boolean;
  morphTargets?: boolean;
  morphNormals?: boolean;
  extensions?: {
    derivatives?: boolean;
    fragDepth?: boolean;
    drawBuffers?: boolean;
    shaderTextureLOD?: boolean;
  };
  glslVersion?: GLSLVersion;
}

export class ShaderMaterial extends Material {
  constructor(parameters?: ShaderMaterialParameters);

  /**
	 * @default 'ShaderMaterial'
	 */
  type: string;

  /**
	 * @default {}
	 */
  defines: { [key: string]: any };

  /**
	 * @default {}
	 */
  uniforms: { [uniform: string]: IUniform };
  vertexShader: string;
  fragmentShader: string;

  /**
	 * @default 1
	 */
  linewidth: number;

  /**
	 * @default false
	 */
  wireframe: boolean;

  /**
	 * @default 1
	 */
  wireframeLinewidth: number;

  /**
	 * @default false
	 */
  fog: boolean;

  /**
	 * @default false
	 */
  lights: boolean;

  /**
	 * @default false
	 */
  clipping: boolean;

  /**
	 * @default false
	 */
  skinning: boolean;

  /**
	 * @default false
	 */
  morphTargets: boolean;

  /**
	 * @default false
	 */
  morphNormals: boolean;
  /**
	 * @deprecated Use {@link ShaderMaterial#extensions.derivatives extensions.derivatives} instead.
	 */
  derivatives: any;

  /**
	 * @default { derivatives: false, fragDepth: false, drawBuffers: false, shaderTextureLOD: false }
	 */
  extensions: {
    derivatives: boolean;
    fragDepth: boolean;
    drawBuffers: boolean;
    shaderTextureLOD: boolean;
  };

  /**
	 * @default { 'color': [ 1, 1, 1 ], 'uv': [ 0, 0 ], 'uv2': [ 0, 0 ] }
	 */
  defaultAttributeValues: any;

  /**
	 * @default undefined
	 */
  index0AttributeName: string | undefined;

  /**
	 * @default false
	 */
  uniformsNeedUpdate: boolean;

  /**
	 * @default null
	 */
  glslVersion: GLSLVersion | null;

  setValues(parameters: ShaderMaterialParameters): void;
  toJSON(meta: any): any;
}