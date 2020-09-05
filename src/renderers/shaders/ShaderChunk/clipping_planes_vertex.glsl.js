// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#if NUM_CLIPPING_PLANES > 0

	vClipPosition = - mvPosition.xyz;

#endif
`;
