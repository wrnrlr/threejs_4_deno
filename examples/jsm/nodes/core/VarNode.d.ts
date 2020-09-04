import { Node } from "./Node.d.ts";
import { NodeBuilder } from "./NodeBuilder.d.ts";

export class VarNode extends Node {
  constructor(type: string, value?: any);

  value: any;
  nodeType: string;

  getType(builder: NodeBuilder): string;
  copy(source: VarNode): this;
}
