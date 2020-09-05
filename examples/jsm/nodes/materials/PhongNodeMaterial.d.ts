/// <reference lib="dom" />
import { Node } from "../core/Node.d.ts";
import { NodeMaterial } from "./NodeMaterial.d.ts";

export class PhongNodeMaterial extends NodeMaterial {
  constructor();

  color: Node;
  alpha: Node;
  specular: Node;
  shininess: Node;
  normal: Node;
  emissive: Node;
  ambient: Node;
  light: Node;
  shadow: Node;
  ao: Node;
  environment: Node;
  environmentAlpha: Node;
  mask: Node;
  position: Node;
}
