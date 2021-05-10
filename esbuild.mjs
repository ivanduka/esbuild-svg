import {plugin} from "esbuild-plugin-svgj";
import {readFile} from "fs/promises";
import esbuild from "esbuild";

esbuild
    .build({
        entryPoints: ["src/main.tsx"],
        bundle: true,
        outfile: "dist/main.js",
        target: "es2015",
        plugins: [
            plugin({
                readFile: (path) => readFile(path, "utf8"),
            }),
        ],
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
