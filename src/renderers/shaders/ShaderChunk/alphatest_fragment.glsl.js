// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef ALPHATEST

	if ( diffuseColor.a < ALPHATEST ) discard;

#endif
`;
