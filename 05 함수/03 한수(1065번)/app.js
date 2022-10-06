// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

// let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');



function createNumber(){
  const arr = Array.from({ length: 9999 }, (_, index) => index+1);
  for (let n = 1; n < 10000; n++){
    let tmp = n+(""+n).split('').map(Number).reduce((sum,number)=>sum+=number);
    while(arr.includes(tmp)){
      arr.splice(arr.indexOf(tmp),1);
    }
  }
  let answer = "";
  for (let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    answer += arr[i]+"\n";
  }
  console.log(answer);
}

createNumber();
