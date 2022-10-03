// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

const cnt = Number(input[0]);
let answer = "";

for (let i = 1; i <= cnt; i++) {
  let scores = input[i].split(" ").map(Number);
  let cntStudent = scores.shift();
  let avg = scores.reduce((sum, score)=> sum+score)/cntStudent;
  let overAvgStudent = 0;
  for(let j = 0; j< cntStudent; j++) {
    if (scores[j]>avg) overAvgStudent++; 
  }
  answer += (+(Math.round((100*overAvgStudent/cntStudent) + "e+3") +"e-3")).toFixed(3)+"%\n";
}

console.log(answer);