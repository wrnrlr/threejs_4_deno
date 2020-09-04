import { InputNode } from "../core/InputNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";

export class FloatNode extends InputNode {
  constructor(value?: number);

  value: number;
  nodeType: string;

  generateReadonly(
    builder: NodeBuilder,
    output: string,
    uuid?: string,
    type?: string,
    ns?: string,
    needsUpdate?: boolean,
  ): string;
  copy(source: FloatNode): this;
}
