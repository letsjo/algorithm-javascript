// 배열 합치기
// https://www.acmicpc.net/problem/11728

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\r\n');

let [n, m] = input[0].split(' ').map(Number);
let arr1 = input[1].split(' ').map(Number);
let arr2 = input[2].split(' ').map(Number);

let result = [];

let i = 0;
let j = 0;

while (i < n && j < m) {
  if (arr1[i] < arr2[j]) {
    result.push(arr1[i]);
    i++;
  } else {
    result.push(arr2[j]);
    j++;
  }
}

while (i < n) {
  result.push(arr1[i]);
  i++;
}

while (j < m) {
  result.push(arr2[j]);
  j++;
}

console.log(result.join(' '));
