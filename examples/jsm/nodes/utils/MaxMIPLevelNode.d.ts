/// <reference lib="dom" />
import { FloatNode } from "../inputs/FloatNode.d.ts";
import { Node } from "../core/Node.d.ts";

export class MaxMIPLevelNode extends FloatNode {
  constructor(texture: Node);

  texture: Node;
  maxMIPLevel: number;
  nodeType: string;
  value: number;
}
