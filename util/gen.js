"use strict";

const _ = require('lodash');
const alphabet = ['a', 'b', 'c', 'd', ' '];

const let_count = 1500000;
const word_count = 10;

function getSymbol() {
  return _.sample(alphabet);
}

function Gen() {
  const result = [];

  for (var i = 0; i < word_count; i++) {
    var left = "";
    var right = "";
    for (var j = 0, r = let_count * 2 - 1; j < let_count; j++, r--) {
      let s = getSymbol();
      left += s;
      right = s + right;
    }

    result.push(left + right);
  }
  return result;
}
module.exports = Gen;
