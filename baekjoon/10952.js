// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let answer="";

for (let i = 0; i < input.length; i++) {
  let number = input[i].split(" ").map(Number);
  if (number[0]!=0 && number[1]!=0)
    answer += (number[0]+number[1])+"\n";
}

console.log(answer);
