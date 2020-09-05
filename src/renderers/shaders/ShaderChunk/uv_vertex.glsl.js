// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_UV

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;
