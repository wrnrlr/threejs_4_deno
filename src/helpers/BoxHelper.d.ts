/// <reference lib="dom" />
import { Object3D } from "./../core/Object3D.d.ts";
import { Color } from "./../math/Color.d.ts";
import { LineSegments } from "./../objects/LineSegments.d.ts";

export class BoxHelper extends LineSegments {
  /**
	 * @param object
	 * @param [color=0xffff00]
	 */
  constructor(object: Object3D, color?: Color | string | number);

  /**
	 * @default 'BoxHelper'
	 */
  type: string;

  update(object?: Object3D): void;

  setFromObject(object: Object3D): this;
}
