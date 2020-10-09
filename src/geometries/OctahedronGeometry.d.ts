/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";

export class OctahedronGeometry extends Geometry {
  /**
	 * @param [radius=1]
	 * @param [detail=0]
	 */
  constructor(radius?: number, detail?: number);

  /**
	 * @default 'OctahedronGeometry'
	 */
  type: string;
}
