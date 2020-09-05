// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`;
