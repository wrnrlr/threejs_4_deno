/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { MaxMIPLevelNode } from "../utils/MaxMIPLevelNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";

export class SpecularMIPLevelNode extends TempNode {
  constructor(texture: Node);

  texture: Node;
  maxMIPLevel: MaxMIPLevelNode;
  nodeType: string;

  copy(source: SpecularMIPLevelNode): this;

  static Nodes: {
    getSpecularMIPLevel: FunctionNode;
  };
}
