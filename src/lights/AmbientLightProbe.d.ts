import { Color } from "./../math/Color.d.ts";
import { LightProbe } from "./LightProbe.d.ts";

export class AmbientLightProbe extends LightProbe {
  constructor(color?: Color | string | number, intensity?: number);

  readonly isAmbientLightProbe: true;
}
