// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef USE_TRANSMISSIONMAP

	totalTransmission *= texture2D( transmissionMap, vUv ).r;

#endif
`;
