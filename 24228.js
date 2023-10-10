// 젓가락
// https://www.acmicpc.net/problem/24228

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, R] = input[0].split(' ').map((e) => BigInt(e));
console.log((2n * R + N - 1n).toString());
