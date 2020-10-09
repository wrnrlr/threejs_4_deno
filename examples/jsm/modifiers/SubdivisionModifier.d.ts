/// <reference lib="dom" />
import { BufferGeometry, Geometry } from "../../../src/Three.d.ts";

export class SubdivisionModifier {
  constructor(subdivisions?: number);
  subdivisions: number;

  modify(geometry: BufferGeometry | Geometry): Geometry;
  smooth(geometry: Geometry): void;
}
