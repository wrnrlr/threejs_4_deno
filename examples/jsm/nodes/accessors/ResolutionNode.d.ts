/// <reference lib="dom" />
import { Vector2 } from "../../../../src/Three.d.ts";

import { NodeFrame } from "../core/NodeFrame.d.ts";
import { Vector2Node } from "../inputs/Vector2Node.d.ts";

export class ResolutionNode extends Vector2Node {
  constructor();

  size: Vector2;
  nodeType: string;

  updateFrame(frame: NodeFrame): void;
  copy(source: ResolutionNode): this;
}
