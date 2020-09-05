/// <reference lib="dom" />
import { Color } from "../../../../src/math/Color.d.ts";
import { Texture } from "../../../../src/textures/Texture.d.ts";
import { CubeTexture } from "../../../../src/textures/CubeTexture.d.ts";
import { Vector2 } from "../../../../src/math/Vector2.d.ts";

import { Node } from "../core/Node.d.ts";
import { NodeMaterial } from "./NodeMaterial.d.ts";

export class MeshStandardNodeMaterial extends NodeMaterial {
  constructor();

  color: Color | Node;
  roughness: number | Node;
  metalness: number | Node;
  map: Texture | Node;
  normalMap: Texture | Node;
  normalScale: Vector2 | Node;
  metalnessMap: Texture | Node;
  roughnessMap: Texture | Node;
  envMap: CubeTexture | Node;
}
