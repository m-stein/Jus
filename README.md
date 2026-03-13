# Jus Game Engine

Jus is a vanilla JavaScript game engine for 2D games that renders directly
to an HTML canvas. It aims for providing versatile tools for game development
while imposing as few framework as possible.

## How to use the engine in your project

If you want to use Jus in your JavaScript project, the file types/jus.d.ts
can provide the public interface of Jus to your type server, thereby enabling
type checking, import checking, and code completion. Just copy the correct
version of this file to the types/ sub-directory in your project directory and
make sure to add it to the "include" array in your jsconfig.json file.

## Development

### Initialize for development

! > npm install

### Update the type declarations file before committing changes

! > npm run buildTypes

### Check for newer versions of dependencies and set them

! npm install -g npm-check-updates
! npm-check-updates
