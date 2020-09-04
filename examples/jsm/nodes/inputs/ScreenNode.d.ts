import { NodeBuilder } from "../core/NodeBuilder.d.ts";
import { TextureNode } from "./TextureNode.d.ts";
import { UVNode } from "../accessors/UVNode.d.ts";

export class ScreenNode extends TextureNode {
  constructor(uv?: UVNode);

  nodeType: string;

  getTexture(builder: NodeBuilder, output: string): string;
}
