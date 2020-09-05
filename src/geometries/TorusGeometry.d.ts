/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class TorusBufferGeometry extends BufferGeometry {
  /**
	 * @param [radius=1]
	 * @param [tube=0.4]
	 * @param [radialSegments=8]
	 * @param [tubularSegments=6]
	 * @param [arc=Math.PI * 2]
	 */
  constructor(
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number,
  );

  /**
	 * @default 'TorusBufferGeometry'
	 */
  type: string;

  parameters: {
    radius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
  };
}

export class TorusGeometry extends Geometry {
  /**
	 * @param [radius=1]
	 * @param [tube=0.4]
	 * @param [radialSegments=8]
	 * @param [tubularSegments=6]
	 * @param [arc=Math.PI * 2]
	 */
  constructor(
    radius?: number,
    tube?: number,
    radialSegments?: number,
    tubularSegments?: number,
    arc?: number,
  );

  /**
	 * @default 'TorusGeometry'
	 */
  type: string;

  parameters: {
    radius: number;
    tube: number;
    radialSegments: number;
    tubularSegments: number;
    arc: number;
  };
}
