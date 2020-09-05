/// <reference lib="dom" />
import { Node } from "../core/Node.d.ts";
import { NodeMaterial } from "./NodeMaterial.d.ts";

export class StandardNodeMaterial extends NodeMaterial {
  constructor();

  color: Node;
  alpha: Node;
  roughness: Node;
  metalness: Node;
  reflectivity: Node;
  clearcoat: Node;
  clearcoatRoughness: Node;
  clearcoatNormal: Node;
  normal: Node;
  emissive: Node;
  ambient: Node;
  light: Node;
  shadow: Node;
  ao: Node;
  environment: Node;
  mask: Node;
  position: Node;
  sheen: Node;
}
