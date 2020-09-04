import { NodeBuilder } from "../../core/NodeBuilder.d.ts";
import { Node } from "../../core/Node.d.ts";

export class StandardNode extends Node {
  constructor();

  color: Node;
  roughness: Node;
  metalness: Node;
  nodeType: string;

  build(builder: NodeBuilder): string;
  copy(source: StandardNode): this;
}
