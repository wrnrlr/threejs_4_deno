/// <reference lib="dom" />
import { Loader } from "./Loader.d.ts";
import { LoadingManager } from "./LoadingManager.d.ts";
import { Font } from "./../extras/core/Font.d.ts";

export class FontLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad?: (responseFont: Font) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(json: any): Font;
}
