/// <reference lib="dom" />
import { Mapping } from "../constants.d.ts";
import { Texture } from "../textures/Texture.d.ts";

export namespace ImageUtils {
  export function getDataURL(
    image: any,
  ): string;

  /**
	 * @deprecated
	 */
  export let crossOrigin: string;

  /**
	 * @deprecated Use {@link TextureLoader THREE.TextureLoader()} instead.
	 */
  export function loadTexture(
    url: string,
    mapping?: Mapping,
    onLoad?: (texture: Texture) => void,
    onError?: (message: string) => void,
  ): Texture;

  /**
	 * @deprecated Use {@link CubeTextureLoader THREE.CubeTextureLoader()} instead.
	 */
  export function loadTextureCube(
    array: string[],
    mapping?: Mapping,
    onLoad?: (texture: Texture) => void,
    onError?: (message: string) => void,
  ): Texture;
}
