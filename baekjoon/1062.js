// 가르침
// https://www.acmicpc.net/problem/1062

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .split('\r\n');
// let input = require('fs').readFileSync(0,{encoding: 'utf-8'}).split('\n');

let [N, K] = input[0].split(' ').map(Number);
let words = input.slice(1, N + 1);
let answer = 0;
let alphabet = new Array(26).fill(0);

alphabet[0] = 1;
alphabet[2] = 1;
alphabet[8] = 1;
alphabet[13] = 1;
alphabet[19] = 1;

let count = K - 5;

if (count < 0) {
  console.log(0);
  return;
}

let dfs = (index, count) => {
  if (count === 0) {
    let temp = 0;
    for (let i = 0; i < N; i++) {
      let flag = true;
      for (let j = 0; j < words[i].length; j++) {
        if (
          alphabet[
            words[i][j].charCodeAt() - 97
          ] === 0
        ) {
          flag = false;
          break;
        }
      }
      if (flag) temp++;
    }
    answer = Math.max(answer, temp);
    return;
  }

  for (let i = index; i < 26; i++) {
    if (alphabet[i] === 0) {
      alphabet[i] = 1;
      dfs(i, count - 1);
      alphabet[i] = 0;
    }
  }
};

dfs(0, count);

console.log(answer);
