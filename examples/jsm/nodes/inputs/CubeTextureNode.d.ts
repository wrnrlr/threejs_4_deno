import { CubeTexture } from "../../../../src/Three.d.ts";

import { InputNode } from "../core/InputNode.d.ts";
import { Node } from "../core/Node.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";

export class CubeTextureNode extends InputNode {
  constructor(value: CubeTexture, uv?: Node, bias?: Node);

  value: CubeTexture;
  uv: Node | undefined;
  bias: Node | undefined;
  nodeType: string;

  getTexture(builder: NodeBuilder, output: string): string;
  copy(source: CubeTextureNode): this;
}
