import { Sphere } from "./../math/Sphere.d.ts";
import { Geometry } from "./../core/Geometry.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class PolyhedronBufferGeometry extends BufferGeometry {
  /**
	 * @param vertices
	 * @param indices
	 * @param [radius=1]
	 * @param [detail=0]
	 */
  constructor(
    vertices: number[],
    indices: number[],
    radius?: number,
    detail?: number,
  );

  /**
	 * @default 'PolyhedronBufferGeometry'
	 */
  type: string;

  parameters: {
    vertices: number[];
    indices: number[];
    radius: number;
    detail: number;
  };
}

export class PolyhedronGeometry extends Geometry {
  /**
	 * @param vertices
	 * @param indices
	 * @param [radius=1]
	 * @param [detail=0]
	 */
  constructor(
    vertices: number[],
    indices: number[],
    radius?: number,
    detail?: number,
  );

  /**
	 * @default 'PolyhedronGeometry'
	 */
  type: string;

  parameters: {
    vertices: number[];
    indices: number[];
    radius: number;
    detail: number;
  };
  boundingSphere: Sphere;
}
