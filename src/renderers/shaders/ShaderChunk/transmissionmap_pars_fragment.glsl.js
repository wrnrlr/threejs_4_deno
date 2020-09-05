// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_TRANSMISSIONMAP

	uniform sampler2D transmissionMap;

#endif
`;
