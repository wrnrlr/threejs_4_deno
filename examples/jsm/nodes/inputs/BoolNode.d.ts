import { InputNode } from "../core/InputNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";

export class BoolNode extends InputNode {
  constructor(value?: boolean);

  value: boolean;
  nodeType: string;

  generateReadonly(
    builder: NodeBuilder,
    output: string,
    uuid?: string,
    type?: string,
    ns?: string,
    needsUpdate?: boolean,
  ): string;
  copy(source: BoolNode): this;
}
