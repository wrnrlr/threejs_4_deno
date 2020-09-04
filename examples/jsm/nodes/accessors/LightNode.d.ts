import { TempNode } from "../core/TempNode.d.ts";

export class LightNode extends TempNode {
  constructor(scope?: string);

  scope: string;
  nodeType: string;

  copy(source: LightNode): this;

  static TOTAL: string;
}
