/// <reference lib="dom" />
import {
  ShaderMaterial,
  WebGLRenderer,
} from "../../../../src/Three.d.ts";

import { Node } from "../core/Node.js.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";
import { NodeFrame } from "../core/NodeFrame.d.ts";
import { RawNode } from "./nodes/RawNode.d.ts";

export interface NodeMaterialBuildParams {
  builder?: NodeBuilder;
  renderer?: WebGLRenderer;
}

export class NodeMaterial extends ShaderMaterial {
  constructor(vertex: Node, fragment: Node);

  vertex: Node | RawNode;
  fragment: Node | RawNode;

  updaters: object[];

  readonly isNodeMaterial: true;
  properties: object;

  updateFrame(frame: NodeFrame): void;
  build(params?: NodeMaterialBuildParams): this;
  getHash(): string;
  copy(source: NodeMaterial): this;
}
