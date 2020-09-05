/// <reference lib="dom" />
import {
  BufferGeometry,
  Geometry,
} from "../../../src/Three.d.ts";

export class SimplifyModifier {
  constructor();
  modify(geometry: BufferGeometry | Geometry, count: number): BufferGeometry;
}
