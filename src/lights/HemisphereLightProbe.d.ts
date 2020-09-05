/// <reference lib="dom" />
import { Color } from "./../math/Color.d.ts";
import { LightProbe } from "./LightProbe.d.ts";

export class HemisphereLightProbe extends LightProbe {
  constructor(
    skyColor?: Color | string | number,
    groundColor?: Color | string | number,
    intensity?: number,
  );

  readonly isHemisphereLightProbe: true;
}
