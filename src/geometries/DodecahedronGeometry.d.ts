import { Geometry } from "./../core/Geometry.d.ts";
import { PolyhedronBufferGeometry } from "./PolyhedronGeometry.d.ts";

export class DodecahedronBufferGeometry extends PolyhedronBufferGeometry {
  /**
	 * @param [radius=1]
	 * @param [detail=0]
	 */
  constructor(radius?: number, detail?: number);

  /**
	 * @default 'DodecahedronBufferGeometry'
	 */
  type: string;
}

export class DodecahedronGeometry extends Geometry {
  /**
	 * @param [radius=1]
	 * @param [detail=0]
	 */
  constructor(radius?: number, detail?: number);

  /**
	 * @default 'DodecahedronGeometry'
	 */
  type: string;

  parameters: {
    radius: number;
    detail: number;
  };
}
