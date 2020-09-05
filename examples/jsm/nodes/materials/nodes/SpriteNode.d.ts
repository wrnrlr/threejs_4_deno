/// <reference lib="dom" />
import { NodeBuilder } from "../../core/NodeBuilder.d.ts";
import { Node } from "../../core/Node.d.ts";

export class SpriteNode extends Node {
  constructor();

  color: Node;
  spherical: true;
  nodeType: string;

  build(builder: NodeBuilder): string;
  copy(source: SpriteNode): this;
}
