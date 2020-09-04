# three 4 deno

Intended to be used within a deno workflow. The repository is a revision of three.js but with adjusted urls and only scripts.

```typescript
// main.ts
import { ... } from "https://deno.land/x/threejs_4_deno"

// use as per normal
```

Then later when your ready to bundle your code.

`deno bundle main.ts`