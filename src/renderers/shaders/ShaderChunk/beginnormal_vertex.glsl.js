// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
vec3 objectNormal = vec3( normal );

#ifdef USE_TANGENT

	vec3 objectTangent = vec3( tangent.xyz );

#endif
`;
