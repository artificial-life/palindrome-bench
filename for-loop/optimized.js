"use strict";

module.exports = function(isCorrect) {
  return function MineOpt(s) {
    var left = 0;
    var right = s.length - 1;
    var len = (s.length / 2);

    for (var i = 0; i < len; i++) {
      var rs = s[right];
      var ls = s[left];

      if (!isCorrect(rs) || !isCorrect(ls)) {
        !isCorrect(rs) && right--;
        !isCorrect(ls) && left++;
        continue;
      }

      if (ls != rs)
        return false;

      right--;
      left++;
    }

    return true;
  }
};
