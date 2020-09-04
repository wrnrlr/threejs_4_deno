import { TempNode } from "../core/TempNode.d.ts";
import { Matrix4Node } from "./Matrix4Node.d.ts";
import { OperatorNode } from "../math/OperatorNode.d.ts";
import { ReflectorRTT } from "../../objects/ReflectorRTT.d.ts";
import { TextureNode } from "./TextureNode.d.ts";
import { PositionNode } from "../accessors/PositionNode.d.ts";

export class ReflectorNode extends TempNode {
  constructor(mirror?: ReflectorRTT);

  mirror: ReflectorRTT;
  textureMatrix: Matrix4Node;
  localPosition: PositionNode;
  uv: OperatorNode;
  uvResult: OperatorNode;
  texture: TextureNode;

  nodeType: string;

  copy(source: ReflectorNode): this;
}
