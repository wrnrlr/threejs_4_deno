/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { FloatNode } from "../inputs/FloatNode.d.ts";
import { StructNode } from "../core/StructNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { Node } from "../core/Node.d.ts";

export class TextureCubeUVNode extends TempNode {
  constructor(uv: Node, textureSize: FloatNode);

  uv: Node;
  textureSize: FloatNode;
  nodeType: string;

  static Nodes: {
    TextureCubeUVData: StructNode;
    textureCubeUV: FunctionNode;
  };
}
