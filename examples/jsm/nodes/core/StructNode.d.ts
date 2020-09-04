import { TempNode } from "./TempNode.d.ts";
import { NodeBuilder } from "./NodeBuilder.d.ts";

export interface StructNodeInput {
  type: string;
  name: string;
}

export class StructNode extends TempNode {
  constructor(src?: string);

  inputs: StructNodeInput[];
  src: string;
  nodeType: string;

  getType(builder: NodeBuilder): string;
  getInputByName(name: string): StructNodeInput;
  parse(src: string): void;
}
