import { Light } from "./../lights/Light.d.ts";
import { Color } from "./../math/Color.d.ts";
import { Matrix4 } from "./../math/Matrix4.d.ts";
import { Object3D } from "./../core/Object3D.d.ts";
import { LineSegments } from "../objects/LineSegments.d.ts";

export class SpotLightHelper extends Object3D {
  constructor(light: Light, color?: Color | string | number);

  light: Light;
  matrix: Matrix4;

  /**
	 * @default false
	 */
  matrixAutoUpdate: boolean;
  color: Color | string | number | undefined;
  cone: LineSegments;

  dispose(): void;
  update(): void;
}
