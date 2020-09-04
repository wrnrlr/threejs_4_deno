import { TempNode } from "./TempNode.d.ts";
import { NodeBuilder } from "./NodeBuilder.d.ts";

export class AttributeNode extends TempNode {
  constructor(name: string, type?: string);

  name: string;
  nodeType: string;

  getAttributeType(builder: NodeBuilder): string;
  getType(builder: NodeBuilder): string;
  copy(source: AttributeNode): this;
}
