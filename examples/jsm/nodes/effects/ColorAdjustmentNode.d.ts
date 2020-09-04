import { TempNode } from "../core/TempNode.d.ts";
import { FloatNode } from "../inputs/FloatNode.d.ts";
import { FunctionNode } from "../core/FunctionNode.d.ts";
import { Node } from "../core/Node.d.ts";

export class ColorAdjustmentNode extends TempNode {
  constructor(rgb: Node, adjustment?: FloatNode, method?: string);

  rgb: Node;
  adjustment: FloatNode | undefined;
  method: string;
  nodeType: string;

  copy(source: ColorAdjustmentNode): this;

  static Nodes: {
    hue: FunctionNode;
    saturation: FunctionNode;
    vibrance: FunctionNode;
  };

  static SATURATION: string;
  static HUE: string;
  static VIBRANCE: string;
  static BRIGHTNESS: string;
  static CONTRAST: string;
}
