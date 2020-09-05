/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";

export class ColorsNode extends TempNode {
  constructor(index?: number);

  index: number;
  nodeType: string;

  copy(source: ColorsNode): this;
}
