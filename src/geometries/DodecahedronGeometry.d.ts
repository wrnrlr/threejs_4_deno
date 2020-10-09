/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";

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
