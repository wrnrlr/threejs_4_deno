import { Loader } from "./Loader.d.ts";
import { LoadingManager } from "./LoadingManager.d.ts";
import { Object3D } from "./../core/Object3D.d.ts";
import { Texture } from "./../textures/Texture.d.ts";
import { Material } from "./../materials/Material.d.ts";
import { AnimationClip } from "./../animation/AnimationClip.d.ts";

export class ObjectLoader extends Loader {
  constructor(manager?: LoadingManager);

  load(
    url: string,
    onLoad?: <ObjectType extends Object3D>(object: ObjectType) => void,
    onProgress?: (event: ProgressEvent) => void,
    onError?: (event: Error | ErrorEvent) => void,
  ): void;
  parse<T extends Object3D>(json: any, onLoad?: (object: Object3D) => void): T;
  parseGeometries(json: any): any[]; // Array of BufferGeometry or Geometry or Geometry2.
  parseMaterials(json: any, textures: Texture[]): Material[]; // Array of Classes that inherits from Matrial.
  parseAnimations(json: any): AnimationClip[];
  parseImages(
    json: any,
    onLoad: () => void,
  ): { [key: string]: HTMLImageElement };
  parseTextures(json: any, images: any): Texture[];
  parseObject<T extends Object3D>(
    data: any,
    geometries: any[],
    materials: Material[],
  ): T;
}
