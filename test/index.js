"use strict";

const assert = require('assert');

const truly = [
  'lol',
  'wolow',
  'w olo w',
  'w ololow',
  'wolo w',
  'lo     l'
];

const falsely = ['lok', 'okokok', 'gi gi gi'];

const isCorrect = require('../util/is-correct.js');

const forLoop = require('../for-loop/index.js')(isCorrect.lite);
const whileLoop = require('../while-loop/index.js')(isCorrect.lite);

truly.forEach(item => assert.ok(forLoop.initial(item), item));
truly.forEach(item => assert.ok(forLoop.optimized(item), item));

falsely.forEach(item => assert.equal(forLoop.initial(item), false, item));
falsely.forEach(item => assert.equal(forLoop.optimized(item), false, item));

truly.forEach(item => assert.ok(whileLoop.initial(item), item));
truly.forEach(item => assert.ok(whileLoop.optimized(item), item));

falsely.forEach(item => assert.equal(whileLoop.initial(item), false, item));
falsely.forEach(item => assert.equal(whileLoop.optimized(item), false, item));
