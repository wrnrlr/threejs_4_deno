/// <reference lib="dom" />
import { Color } from "./../math/Color.d.ts";
import { Material, MaterialParameters } from "./Material.d.ts";

export interface ShadowMaterialParameters extends MaterialParameters {
  color?: Color | string | number;
}

export class ShadowMaterial extends Material {
  constructor(parameters?: ShadowMaterialParameters);

  /**
	 * @default 'ShadowMaterial'
	 */
  type: string;

  /**
	 * @default new THREE.Color( 0x000000 )
	 */
  color: Color;

  /**
	 * @default true
	 */
  transparent: boolean;
}
