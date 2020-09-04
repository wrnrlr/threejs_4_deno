import { Matrix3 } from "../../../../src/Three.d.ts";

import { InputNode } from "../core/InputNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";

export class Matrix3Node extends InputNode {
  constructor(matrix?: Matrix3);

  value: Matrix3;
  nodeType: string;
  elements: number[];

  generateReadonly(
    builder: NodeBuilder,
    output: string,
    uuid?: string,
    type?: string,
    ns?: string,
    needsUpdate?: boolean,
  ): string;
  copy(source: Matrix3Node): this;
}
