/// <reference lib="dom" />
import {
  CubeTexture,
  Loader,
  LoadingManager,
  TextureDataType,
} from "../../../src/Three.d.ts";

import { RGBELoader } from "./RGBELoader.d.ts";

export class HDRCubeTextureLoader extends Loader {
  constructor(manager?: LoadingManager);
  hdrLoader: RGBELoader;
  type: TextureDataType;

  load(
    urls: string[],
    onLoad: (texture: CubeTexture) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  setDataType(type: TextureDataType): this;
}
