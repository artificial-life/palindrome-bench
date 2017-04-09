"use strict";

const truly = [
  'lol',
  'wolow',
  'w olo w',
  'w ololow',
  'wolo w',
  'lo     l'
];
const falsely = ['lok', 'okokok', 'gi gi gi'];

function isCorrect(s) {
  return s != " ";
};

function Mine(s) {
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

function MineOpt(s) {
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

function isPalindrome(s) {
  var start = 0,
    end = s.length - 1;

  while (start < end) {
    if (!isCorrect(s[start])) {
      start++;
      continue;
    }

    if (!isCorrect(s[end])) {
      end--;
      continue;
    }

    if (s[start] !== s[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

function Optimized(s) {
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

var x = true;
for (var j = 0; j < 100000; j++) 
  for (var i = 0; i < truly.length; i++) {
    var item = truly[i];
    x = x && Mine(item);
    x = x && MineOpt(item);

    x = x && isPalindrome(item);
    x = x && Optimized(item);
  }

console.log(x, i)
