# node-easy-redux-gen


### Table of Contents
* Introduction
* Requirements
* Recommended modules
* Installation
* Usage
* Maintainers
* Development
* Contributing
* License
* Code of Conduct

## Introduction
A dead simple, pure function that returns the CSS styling for 5 differents depths of Box Shadows.

## Requirements
- [Node 8.9.0+](https://nodejs.org/en/)

## Recommended Modules
This package was developed using [Yarn](https://yarnpkg.com/en/), an alternative to npm.
The following are necessary to run the test suite.

- [Jest](https://github.com/facebook/jest)

## Installation
`yarn add dead-simple-box-shadow`

or

`npm install --save dead-simple-box-shadow`

## Usage

Import the function into your code and provide a depth, or none for default box shadow style.

    # ES6
    const getBoxShadow = require('dead-simple-box-shadow');

    # Webpack
    import getBoxShadow from 'dead-simple-box-shadow';

    getBoxShadow(1);  # Shallowest (default)
    getBoxShadow(2);
    getBoxShadow(3);
    getBoxShadow(4);
    getBoxShadow(5);  # Deepest
    getBoxShadow(); # Default


## Maintainers
Solely maintained by Esteban Hernández. Open to contributions. Use freely at your own risk.

## Development

After checking out the repo, run `yarn install` to install dependencies. Then, run `yarn test` to run the tests.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/LySofDev/redux_gen. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the node-duplicate-directory project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/[USERNAME]/redux_gen/blob/master/CODE_OF_CONDUCT.md).d P
