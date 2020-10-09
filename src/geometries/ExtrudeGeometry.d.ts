/// <reference lib="dom" />
import { Shape } from "./../extras/core/Shape.d.ts";
import { Geometry } from "./../core/Geometry.d.ts";
import { ExtrudeGeometryOptions } from "./ExtrudeBufferGeometry.d.ts";

export class ExtrudeGeometry extends Geometry {
  constructor(shapes: Shape | Shape[], options?: ExtrudeGeometryOptions);

  /**
	 * @default 'ExtrudeGeometry'
	 */
  type: string;

  addShapeList(shapes: Shape[], options?: any): void;
  addShape(shape: Shape, options?: any): void;
}
