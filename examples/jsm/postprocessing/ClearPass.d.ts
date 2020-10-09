/// <reference lib="dom" />
import { Color } from "../../../src/Three.d.ts";

import { Pass } from "./Pass.d.ts";

export class ClearPass extends Pass {
  constructor(clearColor?: Color | string | number, clearAlpha?: number);
  clearColor: Color | string | number;
  clearAlpha: number;
}
