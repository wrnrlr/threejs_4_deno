// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
#if defined( TONE_MAPPING )

	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );

#endif
`;
