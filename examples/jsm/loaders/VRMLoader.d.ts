import {
  Loader,
  LoadingManager,
} from "../../../src/Three.d.ts";

import { GLTFLoader, GLTF } from "./GLTFLoader.d.ts";
import { DRACOLoader } from "./DRACOLoader.d.ts";

export class VRMLoader extends Loader {
  constructor(manager?: LoadingManager);
  gltfLoader: GLTFLoader;

  load(
    url: string,
    onLoad: (scene: GLTF) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(gltf: GLTF, onLoad: (scene: GLTF) => void): void;
  setDRACOLoader(dracoLoader: DRACOLoader): this;
}
