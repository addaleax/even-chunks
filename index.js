'use strict';

function evenChunks(input, n, method) {
  var ret = Array(n);
  var i, j = 0, k = 0;

  switch (method) {
    default:
    case evenChunks.CONTIGUOUS:
      for (i = 0; i < ret.length; i++) {
        var sliceEnd = Math.round((i+1) * (input.length / n));
        ret[i] = input.slice(j, sliceEnd);
        j = sliceEnd;
      }
      break;
    case evenChunks.ROUND_ROBIN:
      var ArrayType = input.constructor;
      var overhang = input.length % n;
      for (i = 0; i < n; i++) {
        ret[i] = new ArrayType(Math.floor(input.length / n) + (i < overhang));
      }

      for (i = 0; i < input.length; i++) {
        ret[j][k] = input[i];
        j++;
        if (j == n) {
          j = 0;
          k++;
        }
      }
  }

  return ret;
}

evenChunks.CONTIGUOUS = 0;
evenChunks.ROUND_ROBIN = 1;

module.exports = evenChunks;
