/// <reference lib="dom" />
import { TempNode } from "../core/TempNode.d.ts";

export class ReflectNode extends TempNode {
  constructor(scope?: string);

  scope: string;
  nodeType: string;

  static CUBE: string;
  static SPHERE: string;
  static VECTOR: string;
}
