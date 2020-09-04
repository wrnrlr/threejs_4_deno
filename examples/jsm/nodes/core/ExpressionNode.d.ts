import { FunctionNode } from "./FunctionNode.d.ts";

export class ExpressionNode extends FunctionNode {
  constructor(
    src: string,
    includes?: object[],
    extensions?: object,
    keywords?: object,
    type?: string,
  );
}
