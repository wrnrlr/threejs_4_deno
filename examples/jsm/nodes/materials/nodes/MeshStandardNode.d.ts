/// <reference lib="dom" />
import {
  Color,
  Vector2,
} from "../../../../../src/Three.d.ts";

import { NodeBuilder } from "../../core/NodeBuilder.d.ts";
import { StandardNode } from "./StandardNode.d.ts";
import { PropertyNode } from "../../inputs/PropertyNode.d.ts";

export class MeshStandardNode extends StandardNode {
  constructor();

  properties: {
    color: Color;
    roughness: number;
    metalness: number;
    normalScale: Vector2;
  };

  inputs: {
    color: PropertyNode;
    roughness: PropertyNode;
    metalness: PropertyNode;
    normalScale: PropertyNode;
  };

  build(builder: NodeBuilder): string;
}
