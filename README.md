# Jet Game Engine

Jet (Javascript Entertainment Toolkit) is a vanilla JavaScript game engine for
2D games that renders directly to an HTML canvas. It aims for providing versatile
tools for game development while imposing as few framework as possible.

## Using the engine in your project

If you want to use Jet in your JavaScript project, the file types/jet.d.ts
can provide the public interface of Jet to your type server, thereby enabling
type checking, import checking, and code completion. Just copy the correct
version of this file into your project and make sure to add it to the "include"
array in your jsconfig or tsconfig.

You can then enable clean import paths by adding an import map in your HTML
before the scripts that use the engine:

```html
    <script type="importmap">
        {
            "imports": {
                "jet/": "https://m-stein.github.io/jet/src/jet/"
            }
        }
    </script>
```

And then import from the engine like this:

```js
    import { Vector2 } from 'jet/vector_2.js';
```

## Developing the engine

### Initialize for development

    npm install

### Update the type declarations file before committing changes

    npm run buildDtsFile

### Check for newer versions of dependencies and set them

    npm install -g npm-check-updates
    npm-check-updates
