// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split(" ")
  .map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split(" ").map(Number);

if (input[0] >= 90) console.log("A");
else if (input[0] >= 80) console.log("B");
else if (input[0] >= 70) console.log("C");
else if (input[0] >= 60) console.log("D");
else console.log("F");
