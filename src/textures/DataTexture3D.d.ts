/// <reference lib="dom" />
import { Texture } from "./Texture.d.ts";
import { TypedArray } from "../polyfills.d.ts";
import { TextureFilter } from "../constants.d.ts";

export class DataTexture3D extends Texture {
  constructor(
    data: TypedArray,
    width: number,
    height: number,
    depth: number,
  );

  /**
	 * @default THREE.NearestFilter
	 */
  magFilter: TextureFilter;

  /**
	 * @default THREE.NearestFilter
	 */
  minFilter: TextureFilter;

  /**
	 * @default THREE.ClampToEdgeWrapping
	 */
  wrapR: boolean;

  /**
	 * @default false
	 */
  flipY: boolean;

  /**
	 * @default false
	 */
  generateMipmaps: boolean;

  readonly isDataTexture3D: true;
}
