// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let input = require("fs").readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }).split("\n");
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let info = input[0].split(' ').map(Number);
let station = input[1].split(' ');
let answer = "";

for (let i = 2; i < info[1]+2; i++){
  let construction = input[i].split(' ');
  if(construction[0]=="BN"){
    let findIdx = station.indexOf(construction[1]);
    if(info[0]-1==findIdx) answer += station[0]+"\n";
    else answer += station[findIdx+1] +"\n";
    station.splice(findIdx+1,0,construction[2]);
  } else if(construction[0]=="BP"){
    let findIdx = station.indexOf(construction[1]);
    if(findIdx==0){
      answer += station[station.length-1] +"\n";
      station.splice(station.length,0,construction[2]);
    }
    else {
      answer += station[findIdx-1] +"\n";
      station.splice(findIdx-1,0,construction[2]);
    }
  } else if(construction[0]=="CP"){
    let findIdx = station.indexOf(construction[1]);
    answer += station[findIdx+1]+"\n";
    station.splice(findIdx-1,0);
  } else {
    let findIdx = station.indexOf(construction[1]);
    answer += station[findIdx==0?station.length:findIdx-1]+"\n";
    station.splice(findIdx==0?station.length:findIdx-1,1);
  }
}

console.log(answer);