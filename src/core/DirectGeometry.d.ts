import { Vector3 } from "./../math/Vector3.d.ts";
import { Color } from "./../math/Color.d.ts";
import { Vector2 } from "./../math/Vector2.d.ts";
import { Vector4 } from "./../math/Vector4.d.ts";
import { Box3 } from "./../math/Box3.d.ts";
import { Sphere } from "./../math/Sphere.d.ts";
import { Geometry } from "./Geometry.d.ts";
import { MorphTarget } from "./Geometry.d.ts";

/**
 * @see {@link https://github.com/mrdoob/three.js/blob/master/src/core/DirectGeometry.js|src/core/DirectGeometry.js}
 */
export class DirectGeometry {
  constructor();

  id: number;
  uuid: string;
  name: string;
  type: string;

  /**
	 * @default []
	 */
  indices: number[];

  /**
	 * @default []
	 */
  vertices: Vector3[];

  /**
	 * @default []
	 */
  normals: Vector3[];

  /**
	 * @default []
	 */
  colors: Color[];

  /**
	 * @default []
	 */
  uvs: Vector2[];

  /**
	 * @default []
	 */
  uvs2: Vector2[];

  /**
	 * @default []
	 */
  groups: { start: number; materialIndex: number }[];

  /**
	 * @default {}
	 */
  morphTargets: MorphTarget[];

  /**
	 * @default []
	 */
  skinWeights: Vector4[];

  /**
	 * @default []
	 */
  skinIndices: Vector4[];

  /**
	 * @default null
	 */
  boundingBox: Box3 | null;

  /**
	 * @default null
	 */
  boundingSphere: Sphere | null;

  /**
	 * @default false
	 */
  verticesNeedUpdate: boolean;

  /**
	 * @default false
	 */
  normalsNeedUpdate: boolean;

  /**
	 * @default false
	 */
  colorsNeedUpdate: boolean;

  /**
	 * @default false
	 */
  uvsNeedUpdate: boolean;

  /**
	 * @default false
	 */
  groupsNeedUpdate: boolean;

  computeBoundingBox(): void;
  computeBoundingSphere(): void;
  computeGroups(geometry: Geometry): void;
  fromGeometry(geometry: Geometry): DirectGeometry;
  dispose(): void;
}
