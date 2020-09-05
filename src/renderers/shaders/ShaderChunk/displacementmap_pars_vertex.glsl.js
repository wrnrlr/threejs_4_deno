// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_DISPLACEMENTMAP

	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;

#endif
`;
