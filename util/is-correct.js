"use strict";

module.exports.lite = function isCorrect(s) {
  return s != " ";
}

var letters = [
  '*',
  ']',
  '[',
  '$',
  "#",
  ' '
];
module.exports.heavy = function isCorrect(s) {
  return letters.indexOf(s) != -1;
}
