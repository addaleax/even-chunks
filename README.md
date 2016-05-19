even-chunks
==============

[![NPM Version](https://img.shields.io/npm/v/even-chunks.svg?style=flat)](https://npmjs.org/package/even-chunks)
[![NPM Downloads](https://img.shields.io/npm/dm/even-chunks.svg?style=flat)](https://npmjs.org/package/even-chunks)
[![Build Status](https://travis-ci.org/addaleax/even-chunks.svg?style=flat&branch=master)](https://travis-ci.org/addaleax/even-chunks?branch=master)
[![Coverage Status](https://coveralls.io/repos/addaleax/even-chunks/badge.svg?branch=master)](https://coveralls.io/r/addaleax/even-chunks?branch=master)
[![Dependency Status](https://david-dm.org/addaleax/even-chunks.svg?style=flat)](https://david-dm.org/addaleax/even-chunks)

Split an array evenly into chunks.

Install:
`npm install even-chunks`

```js
const evenChunks = require('even-chunks');

evenChunks([1,2,3,4,5,6,7], 2) // => [ [ 1, 2, 3, 4 ], [ 5, 6, 7 ] ]
evenChunks([1,2,3,4,5,6,7], 3) // => [ [ 1, 2 ], [ 3, 4, 5 ], [ 6, 7 ] ]
evenChunks([1,2,3,4,5,6,7], 4) // => [ [ 1, 2 ], [ 3, 4 ], [ 5 ], [ 6, 7 ] ]

evenChunks([1,2,3,4,5,6,7], 3, evenChunks.ROUND_ROBIN)
  // => [ [ 1, 4, 7 ], [ 2, 5 ], [ 3, 6 ] ]
```

License
=======

MIT
