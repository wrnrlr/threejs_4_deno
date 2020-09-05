/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class RingBufferGeometry extends BufferGeometry {
  /**
	 * @param [innerRadius=0.5]
	 * @param [outerRadius=1]
	 * @param [thetaSegments=8]
	 * @param [phiSegments=1]
	 * @param [thetaStart=0]
	 * @param [thetaLength=Math.PI * 2]
	 */
  constructor(
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number,
  );

  /**
	 * @default 'RingBufferGeometry'
	 */
  type: string;

  parameters: {
    innerRadius: number;
    outerRadius: number;
    thetaSegments: number;
    phiSegments: number;
    thetaStart: number;
    thetaLength: number;
  };
}

export class RingGeometry extends Geometry {
  /**
	 * @param [innerRadius=0.5]
	 * @param [outerRadius=1]
	 * @param [thetaSegments=8]
	 * @param [phiSegments=1]
	 * @param [thetaStart=0]
	 * @param [thetaLength=Math.PI * 2]
	 */
  constructor(
    innerRadius?: number,
    outerRadius?: number,
    thetaSegments?: number,
    phiSegments?: number,
    thetaStart?: number,
    thetaLength?: number,
  );

  /**
	 * @default 'RingGeometry'
	 */
  type: string;

  parameters: {
    innerRadius: number;
    outerRadius: number;
    thetaSegments: number;
    phiSegments: number;
    thetaStart: number;
    thetaLength: number;
  };
}
