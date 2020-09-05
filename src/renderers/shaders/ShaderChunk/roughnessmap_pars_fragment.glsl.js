// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_ROUGHNESSMAP

	uniform sampler2D roughnessMap;

#endif
`;
