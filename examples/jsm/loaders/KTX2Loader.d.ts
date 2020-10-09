/// <reference lib="dom" />
import {
  CompressedTexture,
  CompressedTextureLoader,
  LoadingManager,
  WebGLRenderer,
} from "../../../src/Three.d.ts";

export class KTX2Loader extends CompressedTextureLoader {
  constructor(manager?: LoadingManager);

  detectSupport(renderer: WebGLRenderer): KTX2Loader;
  initModule(): void;

  parse(
    buffer: ArrayBuffer,
    onLoad: (texture: CompressedTexture) => void,
    onError?: (event: ErrorEvent) => void,
  ): KTX2Loader;
}
