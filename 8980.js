// 택배
// https://www.acmicpc.net/problem/8980

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split("\n");

let [n, c] = input[0].split(' ').map((v) => Number(v));
let m = Number(input[1]);
let arr = [];
let answer = 0;

for (let i = 2; i < m + 2; i++) {
  arr.push(input[i].split(' ').map((v) => Number(v)));
}

arr.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let truck = new Array(n + 1).fill(c);

for (let i = 0; i < m; i++) {
  let [from, to, box] = arr[i];
  let min = truck[from];

  for (let j = from; j < to; j++) {
    if (min > truck[j]) {
      min = truck[j];
    }
  }

  if (min > box) {
    min = box;
  }

  for (let j = from; j < to; j++) {
    truck[j] -= min;
  }

  answer += min;
}

console.log(answer);
