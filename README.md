## Description

This is an illustrative instance of the Nest.js Framework, designed for seamless integration into any pre-existing Express.js-based RESTful API codebases.

## Installation

Note: Ensure that the constant containing the path to the Express instance is accurately predefined. Navigate to the main.ts file and update it with the correct path:  

```bash
$ const PATH_URL = '../express/src/app';
```
```bash
$ ./install.sh # Any github repository url with Express.js API #

# For example: 
$ ./install.sh https://github.com/hagopj13/node-express-boilerplate

```

## Running the app

```bash
# development
$ npm run start
#
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

Nest is [MIT licensed](LICENSE).
