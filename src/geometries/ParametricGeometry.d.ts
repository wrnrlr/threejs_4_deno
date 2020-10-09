/// <reference lib="dom" />
import { Vector3 } from "./../math/Vector3.d.ts";
import { Geometry } from "./../core/Geometry.d.ts";

export class ParametricGeometry extends Geometry {
  constructor(
    func: (u: number, v: number, dest: Vector3) => void,
    slices: number,
    stacks: number,
  );

  /**
	 * @default 'ParametricGeometry'
	 */
  type: string;

  parameters: {
    func: (u: number, v: number, dest: Vector3) => void;
    slices: number;
    stacks: number;
  };
}
