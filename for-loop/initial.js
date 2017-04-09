"use strict";

module.exports = function(isCorrect) {
  return function Mine(s) {
    var left = 0;
    var right = s.length - 1;

    for (var i = 0; i < (s.length / 2); i++) {
      var rs = s[right];
      var ls = s[left];

      !isCorrect(rs) && right--;
      !isCorrect(ls) && left++;

      if (isCorrect(rs) && isCorrect(ls)) {
        if (ls != rs)
          return false;

        right--;
        left++;
      }
    }

    return true;
  }
};
