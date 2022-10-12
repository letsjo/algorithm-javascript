// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');
let answer = "";
let line = Number(input[0]);

for (let i = 1; i <= line; i++) {
  let lineInfo = input[i].trim().split(' ');
  for (let j = 0; j < lineInfo[1].length; j++){
    answer += lineInfo[1][j].repeat(lineInfo[0]);
  }
  answer += "\n";
}
console.log(answer);