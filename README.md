# three.js 4 deno

[Manage your external dependencies with care.](https://deno.land/manual/examples/manage_dependencies)

```typescript
// deps.ts
import { WebGLRenderer } from "https://deno.land/x/threejs_4_deno@v120/src/Three.js"
import { OrbitalControls } from "https://deno.land/x/threejs_4_deno@v120/examples/jsm/controls/OrbitControls.js"

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
