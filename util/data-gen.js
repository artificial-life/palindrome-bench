const fs = require('fs');
const gen = require('./gen.js');

fs.writeFile('data.json', JSON.stringify(gen()), 'utf8', () => console.log('done'));
