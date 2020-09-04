import { Color } from "./../math/Color.d.ts";
import { Texture } from "./../textures/Texture.d.ts";
import { MaterialParameters, Material } from "./Material.d.ts";

export interface SpriteMaterialParameters extends MaterialParameters {
  color?: Color | string | number;
  map?: Texture | null;
  alphaMap?: Texture | null;
  rotation?: number;
  sizeAttenuation?: boolean;
}

export class SpriteMaterial extends Material {
  constructor(parameters?: SpriteMaterialParameters);
  /**
	 * @default 'SpriteMaterial'
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
  alphaMap: Texture | null;

  /**
	 * @default 0
	 */
  rotation: number;

  /**
	 * @default true
	 */
  sizeAttenuation: boolean;

  /**
	 * @default true
	 */
  transparent: boolean;

  readonly isSpriteMaterial: true;

  setValues(parameters: SpriteMaterialParameters): void;
  copy(source: SpriteMaterial): this;
}
