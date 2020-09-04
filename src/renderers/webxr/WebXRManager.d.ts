import { Group } from "../../objects/Group.d.ts";
import { Camera } from "../../cameras/Camera.d.ts";

export class WebXRManager {
  constructor(renderer: any, gl: WebGLRenderingContext);

  /**
	 * @default false
	 */
  enabled: boolean;

  /**
	 * @default false
	 */
  isPresenting: boolean;

  getController(id: number): Group;
  getControllerGrip(id: number): Group;
  setFramebufferScaleFactor(value: number): void;
  setReferenceSpaceType(value: string): void;
  getReferenceSpace(): any;
  getSession(): any;
  setSession(value: any): void;
  getCamera(camera: Camera): Camera;
  setAnimationLoop(callback: Function): void;
  dispose(): void;
}
