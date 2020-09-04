import { Curve } from "./Curve.d.ts";
import { Geometry } from "./../../core/Geometry.d.ts";
import { Vector } from "./../../math/Vector2.d.ts";

export class CurvePath<T extends Vector> extends Curve<T> {
  constructor();

  /**
	 * @default 'CurvePath'
	 */
  type: string;

  /**
	 * @default []
	 */
  curves: Curve<T>[];

  /**
	 * @default false
	 */
  autoClose: boolean;

  add(curve: Curve<T>): void;
  closePath(): void;
  getPoint(t: number): T;
  getCurveLengths(): number[];

  /**
	 * @deprecated Use {@link Geometry#setFromPoints new THREE.Geometry().setFromPoints( points )} instead.
	 */
  createPointsGeometry(divisions: number): Geometry;
  /**
	 * @deprecated Use {@link Geometry#setFromPoints new THREE.Geometry().setFromPoints( points )} instead.
	 */
  createSpacedPointsGeometry(divisions: number): Geometry;
  /**
	 * @deprecated Use {@link Geometry#setFromPoints new THREE.Geometry().setFromPoints( points )} instead.
	 */
  createGeometry(points: T[]): Geometry;
}
