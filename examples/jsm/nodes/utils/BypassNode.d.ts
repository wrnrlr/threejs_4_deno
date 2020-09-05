/// <reference lib="dom" />
import { Node } from "../core/Node.d.ts";

export class BypassNode extends Node {
  constructor(code: Node, value?: Node);

  code: Node;
  value: Node | undefined;
  nodeType: string;

  copy(source: BypassNode): this;
}
