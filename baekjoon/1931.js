// 회의실 배정
// https://www.acmicpc.net/problem/1931

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const meetings = input.slice(1).map((value) => value.split(' ').map(Number));

meetings.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }

  return a[1] - b[1];
});

let answer = 0;
let end = 0;

for (let i = 0; i < n; i++) {
  if (end <= meetings[i][0]) {
    end = meetings[i][1];
    answer++;
  }
}

console.log(answer);
