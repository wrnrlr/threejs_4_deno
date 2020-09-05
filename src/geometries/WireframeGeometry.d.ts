/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class WireframeGeometry extends BufferGeometry {
  constructor(geometry: Geometry | BufferGeometry);

  /**
	 * @default 'WireframeGeometry'
	 */
  type: string;
}
