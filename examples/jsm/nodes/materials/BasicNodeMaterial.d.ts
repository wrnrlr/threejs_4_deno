/// <reference lib="dom" />
import { Node } from "../core/Node.d.ts";
import { NodeMaterial } from "./NodeMaterial.d.ts";

export class BasicNodeMaterial extends NodeMaterial {
  constructor();

  color: Node;
  alpha: Node;
  mask: Node;
  position: Node;
}
