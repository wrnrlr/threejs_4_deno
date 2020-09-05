/// <reference lib="dom" />

import { Color } from "../../math/Color.d.ts";
import { WebGLRenderer } from "../WebGLRenderer.d.ts";
import { WebGLState } from "./WebGLState.d.ts";
import { WebGLObjects } from "./WebGLObjects.d.ts";
import { WebGLRenderList } from "./WebGLRenderLists.d.ts";
import { Scene } from "../../scenes/Scene.d.ts";
import { Camera } from "../../cameras/Camera.d.ts";
import { WebGLCubeMaps } from "./WebGLCubeMaps.d.ts";

export class WebGLBackground {
  constructor(
    renderer: WebGLRenderer,
    cubemaps: WebGLCubeMaps,
    state: WebGLState,
    objects: WebGLObjects,
    premultipliedAlpha: boolean,
  );

  getClearColor(): Color;
  setClearColor(color: Color, alpha: number): void;
  getClearAlpha(): number;
  setClearAlpha(alpha: number): void;
  render(
    renderList: WebGLRenderList,
    scene: Scene,
    camera: Camera,
    forceClear: boolean,
  ): void;
}
