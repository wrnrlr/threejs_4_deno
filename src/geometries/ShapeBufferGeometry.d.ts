/// <reference lib="dom" />
import { Shape } from "./../extras/core/Shape.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class ShapeBufferGeometry extends BufferGeometry {
  /**
	 * @default 'ShapeBufferGeometry'
	 */
  type: string;

  constructor(shapes: Shape | Shape[], curveSegments?: number);
}
