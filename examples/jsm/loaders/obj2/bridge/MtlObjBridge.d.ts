import {
  MTLLoader,
} from "../../MTLLoader.d.ts";

export namespace MtlObjBridge {
  export function link(processResult: object, assetLoader: object): void;
  export function addMaterialsFromMtlLoader(
    materialCreator: MTLLoader.MaterialCreator,
  ): object;
}
