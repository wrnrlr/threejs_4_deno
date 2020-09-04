import { TypedArray } from "../polyfills.d.ts";

export class LoaderUtils {
  static decodeText(array: TypedArray): string;
  static extractUrlBase(url: string): string;
}
