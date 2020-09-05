/// <reference lib="dom" />
import { Shape } from "./../extras/core/Shape.d.ts";
import { Geometry } from "./../core/Geometry.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class ShapeBufferGeometry extends BufferGeometry {
  /**
	 * @default 'ShapeBufferGeometry'
	 */
  type: string;

  constructor(shapes: Shape | Shape[], curveSegments?: number);
}

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
