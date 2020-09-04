import { Scene } from "../../scenes/Scene.d.ts";
import { Camera } from "../../cameras/Camera.d.ts";
import { Light } from "../../lights/Light.d.ts";
import { WebGLLights } from "./WebGLLights.d.ts";

interface WebGLRenderState {
  init(): void;

  state: {
    lightsArray: Light[];
    shadowsArray: Light[];
    lights: WebGLLights;
  };
  setupLights(camera: Camera): void;
  pushLight(light: Light): void;
  pushShadow(shadowLight: Light): void;
}

export class WebGLRenderStates {
  get(scene: Scene, camera: Camera): WebGLRenderState;
  dispose(): void;
}
