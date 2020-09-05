/// <reference lib="dom" />
import { Object3D } from "./../../core/Object3D.d.ts";
import { Material } from "./../../materials/Material.d.ts";

// Extras / Objects /////////////////////////////////////////////////////////////////////

export class ImmediateRenderObject extends Object3D {
  constructor(material: Material);

  readonly isImmediateRenderObject: true;

  material: Material;

  /**
	 * @default false
	 */
  hasPositions: boolean;

  /**
	 * @default false
	 */
  hasNormals: boolean;

  /**
	 * @default false
	 */
  hasColors: boolean;

  /**
	 * @default false
	 */
  hasUvs: boolean;

  /**
	 * @default null
	 */
  positionArray: null | Float32Array;

  /**
	 * @default null
	 */
  normalArray: null | Float32Array;

  /**
	 * @default null
	 */
  colorArray: null | Float32Array;

  /**
	 * @default null
	 */
  uvArray: null | Float32Array;

  /**
	 * @default 0
	 */
  count: number;

  render(renderCallback: Function): void;
}
