// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).trim().split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).trim().split('\n');

for (let i = 0; i < input.length; i++) {
  let number = input[i].trim().split(" ").map(Number);
  console.log(number[0]+number[1]);
}
