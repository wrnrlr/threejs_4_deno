/// <reference lib="dom" />
import { TempNode, TempNodeParams } from "./TempNode.d.ts";
import { NodeBuilder } from "./NodeBuilder.d.ts";

export class InputNode extends TempNode {
  constructor(type: string, params?: TempNodeParams);

  readonly: boolean;

  setReadonly(value: boolean): this;
  getReadonly(builder: NodeBuilder): boolean;
  copy(source: InputNode): this;
}
