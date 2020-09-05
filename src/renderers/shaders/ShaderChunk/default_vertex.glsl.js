// deno-fmt-ignore-file
/// <reference lib="dom" />
export default /* glsl */`
void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;
