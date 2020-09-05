// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_COLOR

	diffuseColor.rgb *= vColor;

#endif
`;
