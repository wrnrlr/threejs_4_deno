import { Geometry } from "./core/Geometry.d.ts";
import { Material } from "./materials/Material.d.ts";
import { Object3D } from "./core/Object3D.d.ts";
import { Scene } from "./scenes/Scene.d.ts";

export namespace SceneUtils {
  export function createMultiMaterialObject(
    geometry: Geometry,
    materials: Material[],
  ): Object3D;
  export function detach(child: Object3D, parent: Object3D, scene: Scene): void;
  export function attach(child: Object3D, scene: Scene, parent: Object3D): void;
}

/**
 * @deprecated Use an Array instead.
 */
export class MultiMaterial extends Material {
  constructor(materials?: Material[]);

  readonly isMultiMaterial: true;

  materials: Material[];

  toJSON(meta: any): any;
}

/**
 * @deprecated Material.vertexColors is now a boolean.
 */
export enum Colors {}
export const NoColors: Colors;
export const FaceColors: Colors;
export const VertexColors: Colors;
