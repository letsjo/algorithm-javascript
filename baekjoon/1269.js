// 대칭 차집합
// https://www.acmicpc.net/problem/1269

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

const A = input[1].split(' ');
const B = input[2].split(' ');

const sumArr = A.concat(B).sort();

const arr = new Set(sumArr);
const sameSize = sumArr.length - arr.size;

console.log(sumArr.length - sameSize * 2);
