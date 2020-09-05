/// <reference lib="dom" />
import { Loader } from "./Loader.d.ts";
import { LoadingManager } from "./LoadingManager.d.ts";
import { DataTexture } from "./../textures/DataTexture.d.ts";

export class DataTextureLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (dataTexture: DataTexture) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
}
