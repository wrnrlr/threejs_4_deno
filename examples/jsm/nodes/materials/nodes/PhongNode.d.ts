import { NodeBuilder } from "../../core/NodeBuilder.d.ts";
import { Node } from "../../core/Node.d.ts";

export class PhongNode extends Node {
  constructor();

  color: Node;
  specular: Node;
  shininess: Node;
  nodeType: string;

  build(builder: NodeBuilder): string;
  copy(source: PhongNode): this;
}
