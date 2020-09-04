import {
  BufferGeometry,
  Loader,
  LoadingManager,
} from "../../../src/Three.d.ts";

export class MD2Loader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad: (geometry: BufferGeometry) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(data: ArrayBuffer): BufferGeometry;
}
