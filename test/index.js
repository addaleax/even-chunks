'use strict';

var evenChunks = require('../');
var assert = require('assert');

function join(array) {
  return array.map(function (a) {
    return Array.prototype.slice.call(a);
  }).reduce(function(a, b) {
    return a.concat(b);
  }, []);
}

describe('evenChunks', function() {
  var chunks = [1, 2, 3, 4, 5, 6, 7];
  var testArrays = [
    [],
    [1],
    [1, 2],
    [1, 2, 3, 4, 6, 7],
    [1, 2, 3, 4, 6, 7, 8, 9, 10, 11],
    [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]
  ];
  var methods = [
    undefined,
    evenChunks.CONTIGUOUS,
    evenChunks.ROUND_ROBIN
  ];
  var types = [ Array, Uint8Array, Float32Array, Buffer ];

  types.forEach(function(Type) {
    methods.forEach(function(method) {
      chunks.forEach(function(n) {
        testArrays.forEach(function(arr) {
          it('chunks an array evenly, n = ' + n +
                                   ', arr = ' + arr +
                                   ', t = ' + Type.name +
                                   ', m = ' + method, function() {
            var instance = Type === Array ? arr.slice() : new Type(arr);
            var chunked = evenChunks(instance, n, method);
            var joined = join(chunked);
            assert.deepStrictEqual(Array.prototype.slice.call(instance).sort(),
                                   joined.sort());
          });
        });
      });
    });
  });
});