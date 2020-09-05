/// <reference lib="dom" />
import {
  Loader,
  LoadingManager,
} from "../../../src/Three.d.ts";

export class TTFLoader extends Loader {
  constructor(manager?: LoadingManager);
  reversed: boolean;

  load(
    url: string,
    onLoad: (json: object) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(arraybuffer: ArrayBuffer): object;
}
