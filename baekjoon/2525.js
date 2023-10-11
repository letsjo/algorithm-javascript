// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0].split(" ").map(Number);
// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n').map(Number);
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')[0];

// let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');


let input = require('fs').readFileSync(__dirname + '/input.txt',{encoding:"utf-8"}).split('\n')
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n')

let clock = input[0].split(' ').map(Number);
let timer = Number(input[1]);

clock[1] += timer;
let overMin = parseInt(clock[1]/60);
clock[0] += overMin;
let overHour = parseInt(clock[0]/24);

console.log(clock[0]-24*overHour,clock[1]-60*overMin);
