# three.js 4 deno

[Manage your external dependencies with care.](https://deno.land/manual/examples/manage_dependencies)

```typescript
// deps.ts
import { WebGLRenderer } from "https://deno.land/x/threejs_4_deno@v121/src/Three.js"
import { OrbitalControls } from "https://deno.land/x/threejs_4_deno@v121/examples/jsm/controls/OrbitControls.js"

// main.ts
import { WebGLRenderer } from "deps.ts"
//use as per normal
```

To see your code in action in the browser:

- compile your typescript into javascript
- update any urls as neccessary (.ts -> .js)
- include your main.js script within your html

```html
<script type="module" src="main.js"></script>
```


The following tsconfig.json may come in handy:
```json
// tsconfig.json
{
  "compilerOptions": {
    "allowJs": true,
    "lib": ["ESNext"],
  }
}
```

Your more than welcome to use the `main.ts` script to create your own version or tweek the way I've done it.
Let me know if you run into any issues or open a PR if you see some possible improvements :)
