/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { TextureNode } from "../inputs/TextureNode.d.ts";
import { Vector2Node } from "../inputs/Vector2Node.d.ts";

export class NormalMapNode extends TempNode {
  constructor(value: TextureNode, scale?: Vector2Node);

  value: TextureNode;
  scale: Vector2Node;
  toNormalMap: boolean;
  nodeType: string;

  copy(source: NormalMapNode): this;

  static Nodes: {
    perturbNormal2Arb: FunctionNode;
  };
}
