/// <reference lib="dom" />
import { Vector2 } from "../../../../src/Three.d.ts";

import { TempNode } from "../core/TempNode.d.ts";
import { NodeFrame } from "../core/NodeFrame.d.ts";
import { UVNode } from "../accessors/UVNode.d.ts";
import { Vector2Node } from "../inputs/Vector2Node.d.ts";
import { FloatNode } from "../inputs/FloatNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { TextureNode } from "../inputs/TextureNode.d.ts";

export class BlurNode extends TempNode {
  constructor(value: TextureNode, uv?: UVNode, radius?: number, size?: Vector2);

  value: TextureNode;
  uv: UVNode;
  radius: Vector2Node;
  size: Vector2;
  blurX: boolean;
  blurY: boolean;
  horizontal: FloatNode;
  vertical: FloatNode;
  nodeType: string;

  updateFrame(frame: NodeFrame): void;
  copy(source: BlurNode): this;

  static Nodes: {
    blurX: FunctionNode;
    blurY: FunctionNode;
  };
}
