/// <reference lib="dom" />
import { Scene } from "./../../scenes/Scene.d.ts";
import { Camera } from "./../../cameras/Camera.d.ts";
import { WebGLRenderer } from "../WebGLRenderer.d.ts";
import { ShadowMapType } from "../../constants.d.ts";
import { WebGLObjects } from "./WebGLObjects.d.ts";
import { Light } from "../../lights/Light.d.ts";

export class WebGLShadowMap {
  constructor(
    _renderer: WebGLRenderer,
    _objects: WebGLObjects,
    maxTextureSize: number,
  );

  /**
	 * @default false
	 */
  enabled: boolean;

  /**
	 * @default true
	 */
  autoUpdate: boolean;

  /**
	 * @default false
	 */
  needsUpdate: boolean;

  /**
	 * @default THREE.PCFShadowMap
	 */
  type: ShadowMapType;

  render(shadowsArray: Light[], scene: Scene, camera: Camera): void;

  /**
	 * @deprecated Use {@link WebGLShadowMap#renderReverseSided .shadowMap.renderReverseSided} instead.
	 */
  cullFace: any;
}
