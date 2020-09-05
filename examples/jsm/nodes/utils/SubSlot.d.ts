/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";

export class SubSlots extends TempNode {
  constructor(slots?: object);

  slots: Node[];

  copy(source: SubSlots): this;
}
