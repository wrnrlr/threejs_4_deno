import { Matrix4 } from "../../../../src/Three.d.ts";

import { InputNode } from "../core/InputNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";

export class Matrix4Node extends InputNode {
  constructor(matrix?: Matrix4);

  value: Matrix4;
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
  copy(source: Matrix4Node): this;
}
