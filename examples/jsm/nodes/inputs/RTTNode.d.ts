/// <reference lib="dom" />
import {
  Mesh,
  OrthographicCamera,
  Scene,
  WebGLRenderTarget,
  WebGLRenderTargetOptions,
} from "../../../../src/Three.d.ts";

import { NodeBuilder } from "../core/NodeBuilder.d.ts";
import { NodeFrame } from "../core/NodeFrame.d.ts";
import { TextureNode } from "./TextureNode.d.ts";

export interface RTTNodeOptions extends WebGLRenderTargetOptions {
  clear?: boolean;
}

export class RTTNode extends TextureNode {
  constructor(
    width: number,
    height: number,
    input: TextureNode,
    options?: RTTNodeOptions,
  );

  input: TextureNode;
  clear: boolean;
  renderTarget: WebGLRenderTarget;
  material: object; // NodeMaterial
  camera: OrthographicCamera;
  scene: Scene;
  quad: Mesh;
  render: boolean;

  build(builder: NodeBuilder, output: string, uuid?: string): string;
  updateFramesaveTo(frame: NodeFrame): void;
  updateFrame(frame: NodeFrame): void;
  copy(source: RTTNode): this;
}
