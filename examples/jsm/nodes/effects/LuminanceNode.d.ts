import { TempNode } from "../core/TempNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { ConstNode } from "../core/ConstNode.d.ts";
import { Node } from "../core/Node.d.ts";

export class LuminanceNode extends TempNode {
  constructor(rgb: Node);

  rgb: Node;
  nodeType: string;

  copy(source: LuminanceNode): this;

  static Nodes: {
    LUMA: ConstNode;
    luminance: FunctionNode;
  };
}
