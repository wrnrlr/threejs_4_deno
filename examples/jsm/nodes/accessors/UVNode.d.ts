/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";

export class UVNode extends TempNode {
  constructor(index?: number);

  index: number;
  nodeType: string;

  copy(source: UVNode): this;
}
