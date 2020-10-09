/// <reference lib="dom" />
import { Shape } from "./../extras/core/Shape.d.ts";
import { Geometry } from "./../core/Geometry.d.ts";

export class ShapeGeometry extends Geometry {
  /**
	 * @param shapes
	 * @param [curveSegments=12]
	 */
  constructor(shapes: Shape | Shape[], curveSegments?: number);

  /**
	 * @default 'ShapeGeometry'
	 */
  type: string;

  addShapeList(shapes: Shape[], options: any): ShapeGeometry;
  addShape(shape: Shape, options?: any): void;
}
