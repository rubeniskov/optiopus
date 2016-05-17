# Optiopus

[![Build Status][travis-badge]][travis-url]
[![Coverage Status][coverage-badge]][coverage-url]
[![Climate Status][codeclimate-badge]][codeclimate-url]
[![Issues Open][issues-open-badge]][issues-url]
[![Issue Resolution][issues-reso-badge]][issues-url]

[![Version][version-badge]][npm-url]
[![Node][node-badge]][npm-url]
[![Downloads][downloads-badge]][npm-url]
[![Slack Status][slack-badge]][slack-url]
[![License][license-badge]][license-url]

[Optiopus][site-url] is a function thats provide a plain object with the tree path of properties and their own values.

Motivation
==========

Sometimes, you need simplify a complex JSON structure to compare objects or iterate several times, so this method provides a flatten object to make easier the access to values.
it's really usefull when you want compare two objects without nested child.

[![NPM][npm-img]][npm-url]
[![GRID][coverage-img]][coverage-url]

Installation
============

Install with `npm install optiopus --save`.

Usage
=====

To use, add the `require` node module:

```JavaScript

    const optiopus = require('optiopus');

    const defs = optiopus({
              'color': '#EFEFEF',
              'font': {
                  'size': '10px',
                  'family': 'Arial'
              },
              'background': {
                  'color': ['rgba', 0, 0, 0, 1]
              }
          }),
          opts = defs.options({
              'color': '#FF0000'
          });

          opts.option('font.size', '11px');
          
          opts.options({
            'font.family': 'Monaco' ,
            'background.color'
          });

    console.log(opts.options);

    /******
    {
      "color": '#FF0000',
      "font": {
          "size": '11px',
          "family": 'Arial'
      },
      "background": {
          "color": [ 'rgba', 0, 0, 0, 1 ]
      }
    }
    *******/

```

[![WTF][wtfpl-img]][wtfpl-url]

[site-url]: http://optiopus.rubeniskov.com

[npm-url]: https://www.npmjs.com/package/optiopus
[npm-img]: https://nodei.co/npm/optiopus.png?downloads=true

[travis-url]: https://travis-ci.org/rubeniskov/optiopus?branch=master
[travis-badge]: https://travis-ci.org/rubeniskov/optiopus.svg

[license-url]: LICENSE
[license-badge]: https://img.shields.io/badge/license-WTFPL-blue.svg

[codeclimate-url]: https://codeclimate.com/github/rubeniskov/optiopus
[codeclimate-badge]: https://codeclimate.com/github/rubeniskov/optiopus/badges/gpa.svg

[coverage-url]: https://codecov.io/github/rubeniskov/optiopus
[coverage-img]: https://codecov.io/gh/rubeniskov/optiopus/branch/master/graphs/icicle.svg?width=400&height=72
[coverage-badge]: https://img.shields.io/codecov/c/github/rubeniskov/optiopus.svg

[slack-url]: http://slack.rubeniskov.com/
[slack-badge]: http://slack.rubeniskov.com/badge.svg

[version-badge]: https://img.shields.io/npm/v/optiopus.svg
[downloads-badge]: https://img.shields.io/npm/dm/optiopus.svg
[node-badge]: https://img.shields.io/node/v/optiopus.svg

[issues-url]: https://github.com/rubeniskov/optiopus/issues
[issues-open-badge]: http://isitmaintained.com/badge/open/rubeniskov/optiopus.svg
[issues-reso-badge]: http://isitmaintained.com/badge/resolution/rubeniskov/optiopus.svg

[wtfpl-url]: http://www.wtfpl.net/
[wtfpl-img]: http://www.wtfpl.net/wp-content/uploads/2012/12/wtfpl.svg
