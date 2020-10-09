/// <reference lib="dom" />
import { Loader, LoadingManager, Mesh } from "../../../src/Three.d.ts";

export interface XResult {
  animations: object[];
  models: Mesh[];
}

export class XLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (object: XResult) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(data: ArrayBuffer | string, onLoad: (object: object) => void): object;
}
