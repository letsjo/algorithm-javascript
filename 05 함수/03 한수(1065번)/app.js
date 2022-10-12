// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n")
  .map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

// console.log(input[0]);

if (input[0] < 100) {
  console.log(input[0]);
} else if (input[0] == 1000) {
  console.log(144);
} else {
  console.log(checkNumber(input[0]));
}

function checkNumber(checkNumber) {
  let count = 99;
  for (let i = 100; i <= checkNumber; i++) {  
    let number = ""+i;
    let gap_1 = Number(number[1]) - Number(number[0]);
    let gap_2 = Number(number[2]) - Number(number[1]);
    if (gap_2 == gap_1) count++;
    // console.log(gap_1,gap_2);
  }
  return count;
}

// createNumber();
