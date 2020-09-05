/// <reference lib="dom" />
import { Geometry } from "./../core/Geometry.d.ts";
import { Material } from "./../materials/Material.d.ts";
import { Raycaster } from "./../core/Raycaster.d.ts";
import { Object3D } from "./../core/Object3D.d.ts";
import { BufferGeometry } from "../core/BufferGeometry.d.ts";
import { Intersection } from "../core/Raycaster.d.ts";

export class Line<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
> extends Object3D {
  constructor(
    geometry?: TGeometry,
    material?: TMaterial,
    mode?: number,
  );

  geometry: TGeometry;
  material: TMaterial;

  type: "Line" | "LineLoop" | "LineSegments" | string;
  readonly isLine: true;

  morphTargetInfluences?: number[];
  morphTargetDictionary?: { [key: string]: number };

  computeLineDistances(): this;
  raycast(raycaster: Raycaster, intersects: Intersection[]): void;
  updateMorphTargets(): void;
}
