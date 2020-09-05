/// <reference lib="dom" />
import {
  Loader,
  LoadingManager,
  Group,
} from "../../../src/Three.d.ts";

export class AMFLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (object: Group) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(data: ArrayBuffer): Group;
}
