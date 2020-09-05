/// <reference lib="dom" />
import {
  Object3D,
  AnimationClip,
} from "../../../src/Three.d.ts";

export interface GLTFExporterOptions {
  binary?: boolean;
  trs?: boolean;
  onlyVisible?: boolean;
  truncateDrawRange?: boolean;
  embedImages?: boolean;
  animations?: AnimationClip[];
  forceIndices?: boolean;
  forcePowerOfTwoTextures?: boolean;
  includeCustomExtensions?: boolean;
}

export class GLTFExporter {
  constructor();

  parse(
    input: Object3D,
    onCompleted: (gltf: object) => void,
    options: GLTFExporterOptions,
  ): void;
}
