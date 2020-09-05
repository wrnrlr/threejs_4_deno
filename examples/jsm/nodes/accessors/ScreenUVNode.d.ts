/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";
import { ResolutionNode } from "./ResolutionNode.d.ts";

export class ScreenUVNode extends TempNode {
  constructor(resolution?: ResolutionNode);

  resolution: ResolutionNode;
  nodeType: string;

  copy(source: ScreenUVNode): this;
}
