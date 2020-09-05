/// <reference lib="dom" />
import { Camera } from "../../../../src/Three.d.ts";

import { NodeFrame } from "../core/NodeFrame.d.ts";
import { TempNode } from "../core/TempNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { FloatNode } from "../inputs/FloatNode.d.ts";

export class CameraNode extends TempNode {
  constructor(scope?: string, camera?: Camera);

  scope: string;
  near: FloatNode | undefined;
  far: FloatNode | undefined;
  camera: Camera | undefined;
  updateFrame: boolean | undefined;
  nodeType: string;

  setCamera(camera: Camera): void;
  setScope(scope: string): void;
  onUpdateFrame(frame: NodeFrame): void;
  copy(source: CameraNode): this;

  static Nodes: {
    depthColor: FunctionNode;
  };
  static POSITION: string;
  static DEPTH: string;
  static TO_VERTEX: string;
}
