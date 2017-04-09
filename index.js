const Benchmark = require('benchmark');
const _ = require('lodash');

const strings = require('./data.json');

const isCorrect = require('./util/is-correct.js').lite;

const forLoop = require('./for-loop/index.js')(isCorrect);
const whileLoop = require('./while-loop/index.js')(isCorrect);

const suite = new Benchmark.Suite;
suite.add('While loop initial', function() {
  var item = _.sample(strings);
  whileLoop.initial(item);
})
  .add('While loop opt', function() {
    var item = _.sample(strings);
    whileLoop.optimized(item);
  })
  .add('For loop initial', function() {
    var item = _.sample(strings);
    forLoop.initial(item);
  })
  .add('For loop opt', function() {
    var item = _.sample(strings);
    forLoop.optimized(item);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({'async': true});
