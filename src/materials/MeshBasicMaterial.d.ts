/// <reference lib="dom" />
import { Color } from "./../math/Color.d.ts";
import { Texture } from "./../textures/Texture.d.ts";
import { Material, MaterialParameters } from "./Material.d.ts";
import { Combine } from "../constants.d.ts";
/**
 * parameters is an object with one or more properties defining the material's appearance.
 */
export interface MeshBasicMaterialParameters extends MaterialParameters {
  color?: Color | string | number;
  opacity?: number;
  map?: Texture | null;
  aoMap?: Texture | null;
  aoMapIntensity?: number;
  specularMap?: Texture | null;
  alphaMap?: Texture | null;
  envMap?: Texture | null;
  combine?: Combine;
  reflectivity?: number;
  refractionRatio?: number;
  wireframe?: boolean;
  wireframeLinewidth?: number;
  wireframeLinecap?: string;
  wireframeLinejoin?: string;
  skinning?: boolean;
  morphTargets?: boolean;
}

export class MeshBasicMaterial extends Material {
  constructor(parameters?: MeshBasicMaterialParameters);

  /**
	 * @default 'MeshBasicMaterial'
	 */
  type: string;

  /**
	 * @default new THREE.Color( 0xffffff )
	 */
  color: Color;

  /**
	 * @default null
	 */
  map: Texture | null;

  /**
	 * @default null
	 */
  aoMap: Texture | null;

  /**
	 * @default 1
	 */
  aoMapIntensity: number;

  /**
	 * @default null
	 */
  specularMap: Texture | null;

  /**
	 * @default null
	 */
  alphaMap: Texture | null;

  /**
	 * @default null
	 */
  envMap: Texture | null;

  /**
	 * @default THREE.MultiplyOperation
	 */
  combine: Combine;

  /**
	 * @default 1
	 */
  reflectivity: number;

  /**
	 * @default 0.98
	 */
  refractionRatio: number;

  /**
	 * @default false
	 */
  wireframe: boolean;

  /**
	 * @default 1
	 */
  wireframeLinewidth: number;

  /**
	 * @default 'round'
	 */
  wireframeLinecap: string;

  /**
	 * @default 'round'
	 */
  wireframeLinejoin: string;

  /**
	 * @default false
	 */
  skinning: boolean;

  /**
	 * @default false
	 */
  morphTargets: boolean;

  setValues(parameters: MeshBasicMaterialParameters): void;
}
