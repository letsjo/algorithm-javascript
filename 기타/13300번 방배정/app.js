// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let answer = 0;
let info = input[0].split(' ').map(Number);
const student = Array.from(Array(2), () => Array(7).fill(null))

for (let i = 1; i <= info[0]; i++) {
  let [gender, grade] = input[i].split(" ").map(Number);
  student[gender][grade] += 1;
}

for (let i = 0; i <= 1; i++) {
  for (let j = 1; j <= 6; j++) {
    if (student[i][j]) answer += Math.ceil(student[i][j] / info[1])
  }
}

console.log(answer);

