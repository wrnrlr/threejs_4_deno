// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#ifdef DITHERING

	gl_FragColor.rgb = dithering( gl_FragColor.rgb );

#endif
`;
