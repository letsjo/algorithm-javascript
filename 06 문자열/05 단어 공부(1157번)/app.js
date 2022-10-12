// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n")[0].split('').map(a=>a.toUpperCase());
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split('').map(a=>a.toUpperCase());

const result = input.reduce((accu, curr) => { 
  accu[curr] = (accu[curr] || 0)+1;
  return accu;
}, {});

let maxCount = 0;
let maxLetter= "";

for(const [key, val] of Object.entries(result)){
  if (maxCount < val){
    maxLetter = key;
    maxCount = val;
  } else if (maxCount == val){
    maxLetter = "?";
  }
}

console.log(maxLetter);


