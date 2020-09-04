import { Node } from "../../core/Node.d.ts";

export class RawNode extends Node {
  constructor(value: Node);

  value: Node;
  nodeType: string;

  copy(source: RawNode): this;
}
