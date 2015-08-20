# Readme 

This project is based on [generator-react-webpack](https://github.com/newtriks/generator-react-webpack), great thank to it!

Hope it could help you build client-side app swiftly.

This scaffold is aimed at build client-side only react apps, not for build universal apps.

Write in progress, issues are welcomed.

## Run

`gulp serve` to start a hot reload server.

`gulp build:dist` to build production code.

`node src/server.js` to start a mocking serve.

## Feature

- ES6+ support
- Redux included (also devtools)
- react-router included
- Hot reload
- webpack based
- All package **latest**!

## Guide

### Style Guide

- `.raw.css` will be append to dom without any procession (useful when you don't want to compile images or font)
- `.useable.css` can be [mount manually](https://github.com/webpack/style-loader#reference-counted-api)
- third party css should use local loaders


### JS Guid

- write your reusable components in `src/components`
- write your pages in `src/pages`

## TODO

- [x] convert to gulp
- [x] add css in js
- [x] update eslint!
- [ ] add test include
- [ ] find better router solution
