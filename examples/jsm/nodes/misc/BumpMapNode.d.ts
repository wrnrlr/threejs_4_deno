/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { FloatNode } from "../inputs/FloatNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { TextureNode } from "../inputs/TextureNode.d.ts";

export class BumpMapNode extends TempNode {
  constructor(value: TextureNode, scale?: FloatNode);

  value: TextureNode;
  scale: FloatNode;
  toNormalMap: boolean;
  nodeType: string;

  copy(source: BumpMapNode): this;

  static Nodes: {
    dHdxy_fwd: FunctionNode;
    perturbNormalArb: FunctionNode;
    bumpToNormal: FunctionNode;
  };
}
