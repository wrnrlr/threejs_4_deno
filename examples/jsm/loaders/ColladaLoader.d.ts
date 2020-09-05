/// <reference lib="dom" />
import {
  AnimationClip,
  Loader,
  LoadingManager,
  Scene,
} from "../../../src/Three.d.ts";

export interface Collada {
  animations: AnimationClip[];
  kinematics: object;
  library: object;
  scene: Scene;
}

export class ColladaLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (collada: Collada) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(text: string, path: string): Collada;
}
