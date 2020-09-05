/// <reference lib="dom" />
import { KeyframeTrack } from "./KeyframeTrack.d.ts";
import { Bone } from "./../objects/Bone.d.ts";
import { MorphTarget } from "../core/Geometry.d.ts";
import { AnimationBlendMode } from "../constants.d.ts";

export class AnimationClip {
  constructor(
    name?: string,
    duration?: number,
    tracks?: KeyframeTrack[],
    blendMode?: AnimationBlendMode,
  );

  name: string;
  tracks: KeyframeTrack[];

  /**
	 * @default THREE.NormalAnimationBlendMode
	 */
  blendMode: AnimationBlendMode;

  /**
	 * @default -1
	 */
  duration: number;
  uuid: string;
  results: any[];

  resetDuration(): AnimationClip;
  trim(): AnimationClip;
  validate(): boolean;
  optimize(): AnimationClip;
  clone(): AnimationClip;

  static CreateFromMorphTargetSequence(
    name: string,
    morphTargetSequence: MorphTarget[],
    fps: number,
    noLoop: boolean,
  ): AnimationClip;
  static findByName(clipArray: AnimationClip[], name: string): AnimationClip;
  static CreateClipsFromMorphTargetSequences(
    morphTargets: MorphTarget[],
    fps: number,
    noLoop: boolean,
  ): AnimationClip[];
  static parse(json: any): AnimationClip;
  static parseAnimation(
    animation: any,
    bones: Bone[],
  ): AnimationClip;
  static toJSON(): any;
}
