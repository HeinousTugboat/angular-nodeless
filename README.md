# Angular Nodeless

This is a little project I did sort of to challenge myself and to see if I could do it. The whole point of this is to have a fully *functioning* Angular set up, without using node or NPM directly. In fact, the only local software this uses are a browser and a text editor. It was written primarily using Sublime Text on Firefox, and then rewritten with VS Code. I wouldn't suggest doing this, it's painstakingly slow and there are a lot of peculiar little quirks. Debugging can sometimes be a nightmare, too. On top of that, from what I can only guess is due to restrictions on `file://` handling, every local file that gets loaded throws up an error of some sort.

## How?

So, the central idea is to use SystemJS along with remotely hosted NPM packages to process all of the code on the fly. It uses `typescript` and `plugin-typescript` to compile the TypeScript in the browser, and then pulls the requested `@angular` and `rxjs` modules from [Unpkg](http://unpkg.com). My goal is to also have it interpret Sass and Pug files. It follows along with the Angular Tour of Heroes tutorial, and works exactly as described by that.

## Why?

Because sometimes I have a browser and a fancy text editor but no server or node. And to see if I could. That's always been my biggest issue with really working with Angular, is the necessity to have it set up and running without the infrastructure. As far as I can tell, the components that work with this should be perfect drop-in replacements for a regular Angular installation.
