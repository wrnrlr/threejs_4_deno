/// <reference lib="dom" />
import { Font } from "./../extras/core/Font.d.ts";
import { ExtrudeGeometry, ExtrudeBufferGeometry } from "./ExtrudeGeometry.d.ts";

export interface TextGeometryParameters {
  font: Font;
  size?: number;
  height?: number;
  curveSegments?: number;
  bevelEnabled?: boolean;
  bevelThickness?: number;
  bevelSize?: number;
  bevelOffset?: number;
  bevelSegments?: number;
}

export class TextBufferGeometry extends ExtrudeBufferGeometry {
  /**
	 * @default 'TextBufferGeometry'
	 */
  type: string;

  constructor(text: string, parameters: TextGeometryParameters);

  parameters: {
    font: Font;
    size: number;
    height: number;
    curveSegments: number;
    bevelEnabled: boolean;
    bevelThickness: number;
    bevelSize: number;
    bevelOffset: number;
    bevelSegments: number;
  };
}

export class TextGeometry extends ExtrudeGeometry {
  constructor(text: string, parameters: TextGeometryParameters);

  /**
	 * @default 'TextGeometry'
	 */
  type: string;

  parameters: {
    font: Font;
    size: number;
    /**
		 * @default 50
		 */
    height: number;
    curveSegments: number;
    /**
		 * @default false
		 */
    bevelEnabled: boolean;
    /**
		 * @default 10
		 */
    bevelThickness: number;
    /**
		 * @default 8
		 */
    bevelSize: number;
    bevelOffset: number;
    bevelSegments: number;
  };
}
