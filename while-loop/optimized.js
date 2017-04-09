"use strict";

module.exports = function(isCorrect) {
  return function Optimized(s) {
    var start = 0,
      end = s.length - 1;

    while (start < end) {

      if (!isCorrect(s[start]) || !isCorrect(s[end])) {
        !isCorrect(s[start]) && start++;
        !isCorrect(s[end]) && end--;
        continue;
      }

      if (s[start] != s[end])
        return false;

      start++;
      end--;
    }

    return true;
  }
};
