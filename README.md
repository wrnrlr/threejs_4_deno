# three 4 deno

Intended to be used within a deno workflow. The repository is a revision of three.js but with adjusted urls and only scripts.

```typescript
import { ... } from "https://deno.land/x/"

// use as per normal
```

Then later when your ready to bundle your code.

`deno bundle path/to/your/script`