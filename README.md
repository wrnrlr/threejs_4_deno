# three.js 4 deno

```typescript
// main.ts
import { WebGLRenderer } from "https://deno.land/x/threejs_4_deno@v120/src/Three.js"
// and/or
import { OrbitalControls } from "https://deno.land/x/threejs_4_deno@v120/examples/jsm/controls/OrbitControls.js"

// use as per normal
```

To see your code in action in the browser:

`deno bundle -c tsconfig.json main.ts main.bundle.js`

Make sure you've correctly configured deno's typescript compiler. Deno needs to be told that theres javascript and that the ESNEXT & DOM libs should be used.

```json
// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "lib": ["DOM", "ESNext"],
  }
}
```

and then include the outputed bundle within your html

```html
<script type="module" src="main.bundle.js"></script>
```