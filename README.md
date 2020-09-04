# three 4 deno

Intended to be used within a deno workflow. The repository is a revision of three.js but with adjusted urls and only scripts.

```typescript
// main.ts
import { WebGLRenderer } from "https://deno.land/x/threejs_4_deno@v120/src/Three.js"
// and/or
import { OrbitalControls } from https://deno.land/x/threejs_4_deno@v120/examples/jsm/controls/OrbitControls.js"

// use as per normal
```

Then later when your ready to bundle your code for the browser.

`deno bundle main.ts`
