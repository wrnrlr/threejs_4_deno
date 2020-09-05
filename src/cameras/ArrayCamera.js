/// <reference types="./ArrayCamera.d.ts" />
/// <reference lib="dom" />
import { PerspectiveCamera } from "./PerspectiveCamera.js";

function ArrayCamera(array) {
  PerspectiveCamera.call(this);

  this.cameras = array || [];
}

ArrayCamera.prototype = Object.assign(
  Object.create(PerspectiveCamera.prototype),
  {
    constructor: ArrayCamera,

    isArrayCamera: true,
  },
);

export { ArrayCamera };
