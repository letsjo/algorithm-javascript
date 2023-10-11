// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let answer="";
let info = input[0].split(" ").map(Number);
let number = input[1].split(" ").map(Number);

for (let i = 0; i < info[0]; i++) {
  if(number[i]<info[1]) answer+=number[i]+" ";
}

console.log(answer);
