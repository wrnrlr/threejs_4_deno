import { Geometry } from "./../core/Geometry.d.ts";
import { BufferGeometry } from "../core/BufferGeometry.d.ts";
import { Material } from "./../materials/Material.d.ts";
import { BufferAttribute } from "./../core/BufferAttribute.d.ts";
import { Mesh } from "./Mesh.d.ts";
import { Matrix4 } from "./../math/Matrix4.d.ts";

export class InstancedMesh<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
> extends Mesh<TGeometry, TMaterial> {
  constructor(
    geometry: TGeometry,
    material: TMaterial,
    count: number,
  );

  count: number;
  instanceMatrix: BufferAttribute;
  readonly isInstancedMesh: true;

  getMatrixAt(index: number, matrix: Matrix4): void;
  setMatrixAt(index: number, matrix: Matrix4): void;
}
