/// <reference lib="dom" />
import { LineSegments } from "./../objects/LineSegments.d.ts";

export class AxesHelper extends LineSegments {
  /**
	 * @param [size=1]
	 */
  constructor(size?: number);

  /**
	 * @default 'AxesHelper'
	 */
  type: string;
}
