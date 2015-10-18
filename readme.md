# React Redux Scaffold

This is a seed project for building static react website, not for build universal app.

## Feature
- ES6+ support via [babel](https://babeljs.io)
- Redux and its best pratice (debug, style, routing)
- All package latest

## Setup

- learn [Redux](http://redux.js.org)
- clone this project
- install dependencies via `npm install`
- run a test server by `npm run serve`

## Scripts

- `npm run server` run a test server
- `npm run build` build production app

## Guide

### Path Alias (resolve)
Anything in `src/components` can be required by only `components/xx/xx.js` 

see `webpack.config.js` `resolve` for more.

### Style Guide
I suggest use [css-modules](https://github.com/css-modules/css-modules) to style react component.

Also, I use postcss to enhance css functions. You can write scss-like css, and use some future tips via cssnext.

## TODO

- [ ] create a better demo
- [ ] update redux-devtools