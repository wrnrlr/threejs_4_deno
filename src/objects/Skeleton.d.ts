import { Bone } from "./Bone.d.ts";
import { Matrix4 } from "./../math/Matrix4.d.ts";
import { DataTexture } from "./../textures/DataTexture.d.ts";

export class Skeleton {
  constructor(bones: Bone[], boneInverses?: Matrix4[]);

  /**
	 * @deprecated This property has been removed completely.
	 */
  useVertexTexture: boolean;
  bones: Bone[];
  boneMatrices: Float32Array;
  boneTexture: undefined | DataTexture;
  boneInverses: Matrix4[];

  calculateInverses(bone: Bone): void;
  pose(): void;
  update(): void;
  clone(): Skeleton;
  getBoneByName(name: string): undefined | Bone;

  dispose(): void;
}
