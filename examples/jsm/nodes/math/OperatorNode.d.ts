import { TempNode } from "../core/TempNode.d.ts";
import { Node } from "../core/Node.d.ts";

export class OperatorNode extends TempNode {
  constructor(a: Node, b: Node, op: string);

  a: Node;
  b: Node;
  op: string;

  copy(source: OperatorNode): this;

  static ADD: string;
  static SUB: string;
  static MUL: string;
  static DIV: string;
}
