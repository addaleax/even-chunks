'use strict';

function evenChunks(input, n, method) {
  var ret = Array(+n);
  var i, j = 0, k = 0;

  var overflow = input.length % n;
  var smallSliceLength = Math.floor(input.length / n);

  switch (method) {
    default:
    case evenChunks.CONTIGUOUS:
      for (i = 0; i < ret.length; i++) {
        var sliceEnd = Math.round((i+1) * (input.length / n));
        ret[i] = input.slice(j, sliceEnd);
        j = sliceEnd;
      }
      break;
    case evenChunks.PRIORITIZE_FIRST:
      for (i = 0; i < ret.length; i++) {
        var sliceEnd = j + smallSliceLength + (i < overflow);
        ret[i] = input.slice(j, sliceEnd);
        j = sliceEnd;
      }
      break;
    case evenChunks.PRIORITIZE_CENTER:
      for (i = 0; i < ret.length; i++) {
        var sliceEnd = j + smallSliceLength + (i >= (n - overflow)/2 &&
                                               i < n - (n - overflow)/2);
        ret[i] = input.slice(j, sliceEnd);
        j = sliceEnd;
      }
      break;
    case evenChunks.PRIORITIZE_LAST:
      for (i = 0; i < ret.length; i++) {
        var sliceEnd = j + smallSliceLength + (i >= n - overflow);
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
evenChunks.PRIORITIZE_FIRST = 2;
evenChunks.PRIORITIZE_CENTER = 3;
evenChunks.PRIORITIZE_LAST = 4;

module.exports = evenChunks;
