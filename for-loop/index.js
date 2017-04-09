module.exports = function(isCorrect) {
  return {
    initial: require('./initial.js')(isCorrect),
    optimized: require('./optimized.js')(isCorrect)
  }
}
