/// <reference lib="dom" />
import { Geometry } from "../../../src/Three.d.ts";

export class TessellateModifier {
  constructor(maxEdgeLength: number);
  maxEdgeLength: number;

  modify(geometry: Geometry): void;
}
