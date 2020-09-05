// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
gl_FragColor = linearToOutputTexel( gl_FragColor );
`;
