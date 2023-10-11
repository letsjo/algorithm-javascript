// 에디터
// https://www.acmicpc.net/problem/1406

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

let left = input[0].split('');
let right = [];

let n = Number(input[1]);

for (let i = 0; i < n; i++) {
  let [command, char] = input[i + 2].split(' ');

  if (command === 'L') {
    if (left.length > 0) {
      right.push(left.pop());
    }
  } else if (command === 'D') {
    if (right.length > 0) {
      left.push(right.pop());
    }
  } else if (command === 'B') {
    if (left.length > 0) {
      left.pop();
    }
  } else if (command === 'P') {
    left.push(char);
  }
}

console.log(
  left.concat(right.reverse()).join(''),
);
