/// <reference lib="dom" />
import {
  BufferGeometry,
  Geometry,
  Vector3,
} from "../../../src/Three.d.ts";

export class ConvexGeometry extends Geometry {
  constructor(points: Vector3[]);
}

export class ConvexBufferGeometry extends BufferGeometry {
  constructor(points: Vector3[]);
}
