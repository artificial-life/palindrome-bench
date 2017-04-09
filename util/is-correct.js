"use strict";

module.exports.lite = function isCorrect(s) {
  return s != " ";
};

const letters = [
  '*',
  ']',
  '[',
  '$',
  "#",
  ' ',
  '(',
  ')',
  '<',
  '>'
];
module.exports.heavy = function isCorrect(s) {
  return letters.indexOf(s) == -1;
};

module.exports.regexp = function isCorrect(s) {
  return /[a-zA-Z]/.test(s);
};

module.exports.isletter = function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
};
