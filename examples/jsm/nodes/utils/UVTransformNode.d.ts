/// <reference lib="dom" />
import { ExpressionNode } from "../core/ExpressionNode.d.ts";
import { Matrix3Node } from "../inputs/Matrix3Node.d.ts";
import { UVNode } from "../accessors/UVNode.d.ts";

export class UVTransformNode extends ExpressionNode {
  constructor(uv?: UVNode, position?: Matrix3Node);

  uv: UVNode;
  position: Matrix3Node;

  nodeType: string;

  setUvTransform(
    tx: number,
    ty: number,
    sx: number,
    sy: number,
    rotation: number,
    cx?: number,
    cy?: number,
  ): void;
  copy(source: UVTransformNode): this;
}
