/// <reference lib="dom" />
import { Node } from "../core/Node.d.ts";

export class SwitchNode extends Node {
  constructor(node: Node, components?: string);

  node: Node;
  components: string;
  nodeType: string;

  copy(source: SwitchNode): this;
}
