// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n")[0]
  .split(" ")
  .map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);

if (input[0] == input[1] && input[1] == input[2])
  console.log(10000 + input[0] * 1000);
else if (input[0] == input[1]) console.log(1000 + input[0] * 100);
else if (input[1] == input[2]) console.log(1000 + input[1] * 100);
else if (input[2] == input[0]) console.log(1000 + input[2] * 100);
else console.log(Math.max(input[0],input[1],input[2])*100);