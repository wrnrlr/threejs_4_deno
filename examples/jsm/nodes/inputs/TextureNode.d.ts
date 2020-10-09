/// <reference lib="dom" />
import { Texture } from "../../../../src/Three.d.ts";

import { InputNode } from "../core/InputNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";
import { Node } from "../core/Node.d.ts";
import { UVNode } from "../accessors/UVNode.d.ts";

export class TextureNode extends InputNode {
  constructor(value: Texture, uv?: UVNode, bias?: Node, project?: boolean);

  value: Texture;
  uv: UVNode;
  bias: Node;
  project: boolean;
  nodeType: string;

  getTexture(builder: NodeBuilder, output: string): string;
  copy(source: TextureNode): this;
}
