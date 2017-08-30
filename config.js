/**
 * This is the magic-sauce. We can set a mini-tsconfig here under
 * typescriptOptions. Unfortunately, System.JS **does not** type check, so any
 * actual typechecking is totally wasted here. I've got a separate tsconfig I
 * use for editor typechecking.
 *
 * I don't really know a whole lot about the arrangement of the `ts` and
 * `typescript` packages, except that's how the `plugin-typescript` guy said to
 * do it. It works. I'm not complaining.
 *
 * The `app` package is where we handle everything else. Default extension set
 * to ts so we don't have to include `.ts` on every single local import call.
 *
 * Finally, the `map` section is where we map our local imports to the unpkg
 * calls. It's probably more sensible to actually download the packages and
 * store them somewhere luckily, and you can easily add individual files by
 * adding, for instance, a `"@angular/core"` mapping to a local file. SystemJS
 * is smart enough that it'll map `@angular/core/*` to there, and all other
 * `@angular` calls to the CDN.
 */
SystemJS.config({
    typescriptOptions: {
        module: 'system',
        // Need these so @Inject works properly with DI.
        experimentalDecorators: true,
        emitDecoratorMetadata: true
    },
    packages: {
        "ts": {
            "main": "lib/plugin.js"
        },
        "typescript": {
            "main": "lib/typescript.js",
            "meta": {
                "lib/typescript.js": {
                    "exports": "ts"
                }
            }
        },
        "app": {
            defaultExtension: 'ts'
        },
        "Rx": {
            defaultExtension: 'js'
        }
    },
    map: {
        "ts": "https://unpkg.com/plugin-typescript@7.1.0",
        "typescript": "https://unpkg.com/typescript@2.4.2",
        "rxjs": "https://unpkg.com/rxjs",
        "Rx": "https://unpkg.com/rxjs/bundles/Rx",
        "@angular": "https://unpkg.com/@angular",
        "angular-in-memory-web-api": "https://unpkg.com/angular-in-memory-web-api@0.3.2"
    },
    transpiler: 'ts',
    warnings: true
});
