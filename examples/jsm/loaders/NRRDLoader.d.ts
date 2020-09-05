/// <reference lib="dom" />
import {
  LoadingManager,
} from "../../../src/Three.d.ts";

import {
  Volume,
} from "../misc/Volume.d.ts";

export class NRRDLoader {
  constructor(manager?: LoadingManager);
  manager: LoadingManager;
  path: string;

  fieldFunctions: object;

  load(
    url: string,
    onLoad: (group: Volume) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: ErrorEvent) => void,
  ): void;
  parse(data: string): Volume;
  parseChars(array: number[], start?: number, end?: number): string;
  setPath(value: string): this;
}
