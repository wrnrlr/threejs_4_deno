import { Color } from "./../math/Color.d.ts";
import { Vector3 } from "../math/Vector3.d.ts";
import { Light } from "./Light.d.ts";

export class HemisphereLight extends Light {
  /**
	 * @param skyColor
	 * @param groundColor
	 * @param [intensity=1]
	 */
  constructor(
    skyColor?: Color | string | number,
    groundColor?: Color | string | number,
    intensity?: number,
  );

  /**
	 * @default 'HemisphereLight'
	 */
  type: string;

  /**
	 * @default THREE.Object3D.DefaultUp
	 */
  position: Vector3;

  /**
	 * @default undefined
	 */
  castShadow: boolean;

  groundColor: Color;

  readonly isHemisphereLight: true;
}
