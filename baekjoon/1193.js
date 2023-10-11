// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n")[0];
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n")[0];

input = Number(input);
let count = 0;
let level = 0;
let left=false;
while(count<input){
  count += (level++);
  left = !left;
}

let down, up;

if(!left){
  down = level-1-(count-input)+""; 
  up = level-down+"";
} else {
  up = level-1-(count-input)+""; 
  down = level-up+"";
}

console.log(up+"/"+down);

