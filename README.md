[![dependencies Status](https://david-dm.org/simon-an/frontent/status.svg)](https://david-dm.org/simon-an/frontent)
[![Build Status](https://travis-ci.org/simon-an/frontent.svg?branch=master)](https://travis-ci.org/simon-an/frontent)
[![Coverage Status](https://coveralls.io/repos/github/simon-an/frontent/badge.svg)](https://coveralls.io/github/simon-an/frontent)

## Demo:

https://github.io
https://heroku.com

## Build
[![Build Status](https://travis-ci.org/simon-an/frontent.svg?branch=master)](https://travis-ci.org/simon-an/frontent)


## Run local

´´´ npm start ´´´

ng serve --base-href '/frontend-demo/'  --deploy-url '/frontend-demo/' --env frontend-demo

### deploy to github pages:

 npm install --save-dev angular-cli-ghpages

$env:GH_TOKEN="<token>"
npm run deploy

### deploy to a different gihub repo:

1.1 Remove-Item node_modules/gh-pages/.cache/* -Force -Recurse
1.2 npm run deploy-demo-github

2. npm run deploy-demo (right know there is an error in angular-cli-ghpages)

### Angular-CLI
´´´ ng serve ```

### Using Docker

### Using Nodejs

## Known Issues

## TODOs:

- Find the correct way to include sematic-ui in nodemodules.

// "semantic-ui": "2.2.10",
// "semantic-ui-css": "2.2.10",

