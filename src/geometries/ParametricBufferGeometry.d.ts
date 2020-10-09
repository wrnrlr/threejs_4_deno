/// <reference lib="dom" />
import { Vector3 } from "./../math/Vector3.d.ts";
import { BufferGeometry } from "./../core/BufferGeometry.d.ts";

export class ParametricBufferGeometry extends BufferGeometry {
  constructor(
    func: (u: number, v: number, dest: Vector3) => void,
    slices: number,
    stacks: number,
  );

  /**
	 * @default 'ParametricBufferGeometry'
	 */
  type: string;

  parameters: {
    func: (u: number, v: number, dest: Vector3) => void;
    slices: number;
    stacks: number;
  };
}
