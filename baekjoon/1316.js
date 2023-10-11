// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs")
  .readFileSync(__dirname + "/input.txt", { encoding: "utf-8" })
  .split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");
let loop_count = Number(input[0]);
let count = 0;
for(let i = 1; i<= loop_count; i++){
  let arr = input[i].trim().split('');
  let before = "";
  let arrBefore = [];
  arr.some((a,index) => {
    if (before == a){
      before = a;
    } else if (before != a && (!arrBefore.includes(a))){
      arrBefore.push(a);
      before = a;
    } else if (arrBefore.includes(a)){
      return true;
    }
    if (index == arr.length - 1) count++;
  })
}

console.log(count);