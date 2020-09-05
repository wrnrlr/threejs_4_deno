/// <reference lib="dom" />
import { Camera } from "./../cameras/Camera.d.ts";
import { Light } from "./../lights/Light.d.ts";
import { Vector2 } from "./../math/Vector2.d.ts";
import { Vector4 } from "./../math/Vector4.d.ts";
import { Matrix4 } from "./../math/Matrix4.d.ts";
import { RenderTarget } from "../renderers/webgl/WebGLRenderLists.d.ts";

export class LightShadow {
  constructor(camera: Camera);

  camera: Camera;

  /**
	 * @default 0
	 */
  bias: number;

  /**
	 * @default 0
	 */
  normalBias: number;

  /**
	 * @default 1
	 */
  radius: number;

  /**
	 * @default new THREE.Vector2( 512, 512 )
	 */
  mapSize: Vector2;

  /**
	 * @default null
	 */
  map: RenderTarget;

  /**
	 * @default null
	 */
  mapPass: RenderTarget;

  /**
	 * @default new THREE.Matrix4()
	 */
  matrix: Matrix4;

  /**
	 * @default true
	 */
  autoUpdate: boolean;

  /**
	 * @default false
	 */
  needsUpdate: boolean;

  copy(source: LightShadow): this;
  clone(recursive?: boolean): this;
  toJSON(): any;
  getFrustum(): number;
  updateMatrices(light: Light, viewportIndex?: number): void;
  getViewport(viewportIndex: number): Vector4;
  getFrameExtents(): Vector2;
}
