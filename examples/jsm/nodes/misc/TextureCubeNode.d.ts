/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { NodeBuilder } from "../core/NodeBuilder.d.ts";
import { TextureNode } from "../inputs/TextureNode.d.ts";
import { FloatNode } from "../inputs/FloatNode.d.ts";
import { TextureCubeUVNode } from "./TextureCubeUVNode.d.ts";

export class TextureCubeNode extends TempNode {
  constructor(value: TextureNode, textureSize?: FloatNode);

  value: TextureNode;
  textureSize: FloatNode;
  radianceCache: {
    uv: TextureCubeUVNode;
  };
  irradianceCache: {
    uv: TextureCubeUVNode;
  };
  nodeType: string;

  generateTextureCubeUV(builder: NodeBuilder, output: string): string;
}
