/// <reference lib="dom" />
import { BufferGeometry } from "../core/BufferGeometry.d.ts";
import { Geometry } from "../core/Geometry.d.ts";

export class EdgesGeometry extends BufferGeometry {
  /**
	 * @param geometry
	 * @param [thresholdAngle=1]
	 */
  constructor(geometry: BufferGeometry | Geometry, thresholdAngle?: number);

  /**
	 * @default 'EdgesGeometry'
	 */
  type: string;

  parameters: {
    thresholdAngle: number;
  };
}
