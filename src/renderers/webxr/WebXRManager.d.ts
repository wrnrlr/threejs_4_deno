/// <reference lib="dom" />
import { Group } from "../../objects/Group.d.ts";
import { Camera } from "../../cameras/Camera.d.ts";
import { EventDispatcher } from "../../core/EventDispatcher.d.ts";
import {
  XRFrameRequestCallback,
  XRReferenceSpace,
  XRReferenceSpaceType,
  XRSession,
} from "./WebXR.d.ts";

export class WebXRManager extends EventDispatcher {
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
  setReferenceSpaceType(value: XRReferenceSpaceType): void;
  getReferenceSpace(): XRReferenceSpace;
  getSession(): XRSession;
  setSession(value: XRSession): void;
  getCamera(camera: Camera): Camera;
  setAnimationLoop(callback: XRFrameRequestCallback): void;
  dispose(): void;
}
