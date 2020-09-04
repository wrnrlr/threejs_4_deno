import {
  BufferGeometry,
  Geometry,
} from "../../../src/Three.d.ts";

import { LineSegmentsGeometry } from "./LineSegmentsGeometry.d.ts";

export class WireframeGeometry2 extends LineSegmentsGeometry {
  constructor(geometry: Geometry | BufferGeometry);
  readonly sWireframeGeometry2: boolean;
}
