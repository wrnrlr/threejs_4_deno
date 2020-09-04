import { ShaderPass } from "../../postprocessing/ShaderPass.d.ts";
import { ScreenNode } from "../inputs/ScreenNode.d.ts";

export class NodePass extends ShaderPass {
  constructor();

  name: string;
  uuid: string;
  userData: object;
  input: ScreenNode;
  needsUpdate: boolean;

  copy(source: NodePass): this;
  toJSON(meta?: object | string): object;
}
