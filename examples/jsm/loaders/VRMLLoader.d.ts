/// <reference lib="dom" />
import {
  Scene,
  Loader,
  LoadingManager,
} from "../../../src/Three.d.ts";

export class VRMLLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (scene: Scene) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(data: string, path: string): Scene;
}
