/// <reference lib="dom" />
import { Color } from "../../../../src/Three.d.ts";

import { InputNode } from "../core/InputNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";

export class ColorNode extends InputNode {
  constructor(color: Color | number | string, g?: number, b?: number);

  value: Color;
  nodeType: string;

  generateReadonly(
    builder: NodeBuilder,
    output: string,
    uuid?: string,
    type?: string,
    ns?: string,
    needsUpdate?: boolean,
  ): string;
  copy(source: ColorNode): this;
}
