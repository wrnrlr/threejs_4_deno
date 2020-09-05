/// <reference lib="dom" />
import { HemisphereLight } from "./../lights/HemisphereLight.d.ts";
import { Color } from "./../math/Color.d.ts";
import { Matrix4 } from "./../math/Matrix4.d.ts";
import { MeshBasicMaterial } from "./../materials/MeshBasicMaterial.d.ts";
import { Object3D } from "./../core/Object3D.d.ts";

export class HemisphereLightHelper extends Object3D {
  constructor(
    light: HemisphereLight,
    size: number,
    color?: Color | number | string,
  );

  light: HemisphereLight;
  matrix: Matrix4;
  matrixAutoUpdate: boolean;
  material: MeshBasicMaterial;

  color: Color | string | number | undefined;

  dispose(): void;
  update(): void;
}
