/// <reference lib="dom" />
import { Group } from "../../objects/Group.d.ts";
import {
  XREventType,
  XRFrame,
  XRInputSource,
  XRReferenceSpace,
} from "./WebXR.d.ts";

export type XRControllerEventType = XREventType | "disconnected" | "connected";

export class WebXRController {
  constructor();

  getTargetRaySpace(): Group;
  getGripSpace(): Group;
  dispatchEvent(
    event: { type: XRControllerEventType; data?: XRInputSource },
  ): this;
  disconnect(inputSource: XRInputSource): this;
  update(
    inputSource: XRInputSource,
    frame: XRFrame,
    referenceSpace: XRReferenceSpace,
  ): this;
}
