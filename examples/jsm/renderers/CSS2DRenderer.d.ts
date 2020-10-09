/// <reference lib="dom" />
import { Camera, Object3D, Scene } from "../../../src/Three.d.ts";

export class CSS2DObject extends Object3D {
  constructor(element: HTMLElement);
  element: HTMLElement;

  onBeforeRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
  onAfterRender: (renderer: unknown, scene: Scene, camera: Camera) => void;
}

export class CSS2DRenderer {
  constructor();
  domElement: HTMLElement;

  getSize(): { width: number; height: number };
  setSize(width: number, height: number): void;
  render(scene: Scene, camera: Camera): void;
}
