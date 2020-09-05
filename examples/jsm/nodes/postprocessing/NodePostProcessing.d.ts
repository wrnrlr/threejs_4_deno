/// <reference lib="dom" />
import {
  Camera,
  Mesh,
  OrthographicCamera,
  Scene,
  WebGLRenderer,
  WebGLRenderTarget,
} from "../../../../src/Three.d.ts";

import { ScreenNode } from "../inputs/ScreenNode.d.ts";
import { NodeMaterial } from "../materials/NodeMaterial.d.ts";
import { NodeFrame } from "../core/NodeFrame.d.ts";

export class NodePostProcessing {
  constructor(renderer: WebGLRenderer, renderTarget?: WebGLRenderTarget);

  renderer: WebGLRenderer;
  renderTarget: WebGLRenderTarget;

  output: ScreenNode;
  material: NodeMaterial;

  camera: OrthographicCamera;
  scene: Scene;

  quad: Mesh;
  needsUpdate: boolean;

  render(scene: Scene, camera: Camera, frame: NodeFrame): void;
  setSize(width: number, height: number): void;
  copy(source: NodePostProcessing): this;
  toJSON(meta?: object | string): object;
}
