// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_AOMAP

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;
