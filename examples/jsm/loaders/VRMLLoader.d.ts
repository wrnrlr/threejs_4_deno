/// <reference lib="dom" />
import { Loader, LoadingManager, Scene } from "../../../src/Three.d.ts";

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
