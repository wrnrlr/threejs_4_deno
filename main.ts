// Next steps:
// possibly create a mod.ts file within examples for easy import/exporting of `examples/jsm` scripts

const filesToDelete: string[] = [];
const filesForExampleModts: string[] = [];
const UnusedFilesAndFolders = [
  "./three.js/.github",
  "./three.js/build",
  "./three.js/docs",
  "./three.js/editor",
  "./three.js/examples/files",
  "./three.js/examples/fonts",
  "./three.js/examples/js",
  "./three.js/examples/models",
  "./three.js/examples/screenshots",
  "./three.js/examples/sounds",
  "./three.js/examples/textures",
  "./three.js/examples/files.js",
  "./three.js/examples/main.css",
  "./three.js/files",
  "./three.js/test",
  "./three.js/utils",
  "./three.js/.editorconfig",
  "./three.js/.gitattributes",
  "./three.js/.gitignore",
  "./three.js/icon.png",
  "./three.js/package.json",
  "./three.js/package-lock.json",
  "./three.js/README.md",
];

const examplesPath = "three.js/examples/";
const srcPath = "three.js/src/";

const pathToNewDir = "three.deno/";

function loopDirAndMatch(path: string, pattern: RegExp, callBack: Function) {
  for (const dirEntry of Deno.readDirSync(path)) {
    if (dirEntry.isDirectory) {
      loopDirAndMatch(`${path}${dirEntry.name}/`, pattern, callBack);
    } else {
      // look for matches files
      const match = dirEntry.name.match(pattern);
      if (match) {
        callBack(dirEntry.name, path);
      }
    }
  }
}

function addToDeleteList(fileName: string, path: string) {
  filesToDelete.push(`${path}${fileName}`);
}

function updateScripts(fileName: string, path: string) {
  // update .js script imports with deno appropriate urls
  let data = Deno.readTextFileSync(`${path}${fileName}`);

  // match the import
  data = data.replaceAll(/import .+?;/gms, (m) => {
    m = m.replace(/build\/three.module.js/g, "src/Three.js");
    return m;
  });

  // make sure each file references its own types.
  // make relative path url
  console.log(path, fileName);
  // if (!data.includes('<reference types="./Three.d.ts"')) {
  //   data = data.replace(
  //     /^/,
  //     `/// <reference types="./Three.d.ts" />\n/// <reference lib="dom" />\n`,
  //   );
  // }

  // write the new text to the same path
  //Deno.writeTextFileSync(path, data);
}

function updateTypescripts(fileName: string, path: string) {
  // update .d.ts script imports with deno appropriate urls
  let data = Deno.readTextFileSync(`${path}${fileName}`);

  // match imports
  data = data.replaceAll(/import .+?;/gms, (m) => {
    if (!m.includes(".d.ts")) {
      m = `${m.slice(0, m.length - 2)}.d.ts${m.slice(m.length - 2)}`;
    }
    return m;
  });

  // match exports
  data = data.replaceAll(/export \* from .+?;/gms, (m) => {
    if (!m.includes(".d.ts")) {
      m = `${m.slice(0, m.length - 2)}.d.ts${m.slice(m.length - 2)}`;
    }
    return m;
  });

  // write the new text to the same path
  //Deno.writeTextFileSync(path, data);
}

function existsSync(path: string): boolean {
  try {
    Deno.lstatSync(path);
    return true;
  } catch (err) {
    if (err instanceof Deno.errors.NotFound) {
      return false;
    }
    throw err;
  }
}

if (import.meta.main) {
  // ensure that the three.js directory is there
  // existsSync(examplesPath)
  // existsSync(srcPath)

  // otherwise run git clone --depth=1 

  // ensure that the three.deno directory is empty
  // https://deno.land/std@0.68.0/fs/empty_dir.ts

  // Delete the folders/files we're not using
  UnusedFilesAndFolders.forEach((path) => {
    if (existsSync(path)) {
      //Deno.removeSync(path, { recursive: true });
    }
  });

  // Delete extra .html files within the examples folder
  loopDirAndMatch(examplesPath, /.html/g, addToDeleteList);

  if (filesToDelete.length != 0) {
    console.log(`Some .html files were deleted from ${examplesPath}`);
    console.log(filesToDelete);
    filesToDelete.forEach((path) => {
      //Deno.removeSync(path);
    });
  }

  // Update .d.ts urls in remaining folders
  loopDirAndMatch(examplesPath, /.d.ts/g, updateTypescripts);
  loopDirAndMatch(srcPath, /.d.ts/g, updateTypescripts);

  // Update .js urls in the examples folder
  loopDirAndMatch(examplesPath, /.js/g, updateScripts);

  // Add types reference to top of src/Three.js [/// <reference types="..." />]
  // If needed, add '/// <reference lib="dom" />' to the top of src/Three.js as well
  let THREEJS = Deno.readTextFileSync("./three.js/src/Three.js");
  if (!THREEJS.includes('<reference types="./Three.d.ts"')) {
    THREEJS = THREEJS.replace(
      /^/,
      `/// <reference types="./Three.d.ts" />\n/// <reference lib="dom" />\n`,
    );
  }
  //Deno.writeTextFileSync("./three.js/src/Three.js", THREEJS);

  // update exported types url within src/Three.d.ts
  let THREEDTS = Deno.readTextFileSync("./three.js/src/Three.d.ts");
  THREEDTS = THREEDTS.replaceAll(/export \* from .+?;/gms, (m) => {
    if (!m.includes(".d.ts")) {
      m = `${m.slice(0, m.length - 2)}.d.ts${m.slice(m.length - 2)}`;
    }
    return m;
  });
  //Deno.writeTextFileSync("./three.js/src/Three.d.ts", THREEDTS);
}
