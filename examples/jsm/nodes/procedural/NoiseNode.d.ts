/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { UVNode } from "../accessors/UVNode.d.ts";
import { UVTransformNode } from "../utils/UVTransformNode.d.ts";

export class NoiseNode extends TempNode {
  constructor(uv?: UVNode | UVTransformNode);

  uv: UVNode | UVTransformNode;
  nodeType: string;

  copy(source: NoiseNode): this;

  static Nodes: {
    snoise: FunctionNode;
  };
}
