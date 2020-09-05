/// <reference lib="dom" />
import { Node } from "./Node.d.ts";
import { FunctionNode } from "./FunctionNode.d.ts";
import { TempNode } from "./TempNode.d.ts";

export class FunctionCallNode extends TempNode {
  constructor(func: FunctionNode, inputs?: Node[]);

  nodeType: string;

  value: FunctionNode;
  inputs: Node[];

  setFunction(func: FunctionNode, inputs?: Node[]): void;
  getFunction(): FunctionNode;
  getType(): string;
  copy(source: FunctionCallNode): this;
}
