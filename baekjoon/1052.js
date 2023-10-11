// 물병
// https://www.acmicpc.net/problem/1052

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding:"utf-8"}).split('\n');

// let [N, K] = input[0].split(' ').map((v) => +v);
// let answer = 0;

// while (true) {
//   let count = 0;
//   let temp = N;
//   while (temp > 0) {
//     if (temp % 2 === 1) {
//       count += 1;
//     }
//     temp = Math.floor(temp / 2);
//   }
//   if (count <= K) {
//     break;
//   }
//   N += 1;
//   answer += 1;
// }

// console.log(answer);

// 비트마스킹으로 풀기
let [N, K] = input[0].split(' ').map((v) => +v);
let answer = 0;

while (true) {
  let count = 0;
  let temp = N;
  while (temp > 0) {
    if (temp & 1) {
      count += 1;
    }
    temp >>= 1;
  }
  if (count <= K) {
    break;
  }
  N += 1;
  answer += 1;
}

console.log(answer);
