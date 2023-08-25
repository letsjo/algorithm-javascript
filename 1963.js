// 소수경로
// https://www.acmicpc.net/problem/1963

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const t = Number(input[0]);
const primes = getPrimes(10000);

function getPrimes(n) {
  const primes = new Array(n + 1).fill(true);

  primes[0] = false;
  primes[1] = false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (primes[i]) {
      for (let j = i * i; j <= n; j += i) {
        primes[j] = false;
      }
    }
  }

  return primes;
}

for (let i = 1; i <= t; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  const visited = new Array(10000).fill(false);
  const queue = [];
  let answer = -1;

  queue.push([start, 0]);
  visited[start] = true;

  while (queue.length > 0) {
    const [current, count] = queue.shift();

    if (current === end) {
      answer = count;
      break;
    }

    const currentArr = String(current).split('');

    for (let i = 0; i < 4; i++) {
      const tempArr = [...currentArr];

      for (let j = 0; j < 10; j++) {
        if (i === 0 && j === 0) continue;

        tempArr[i] = String(j);
        const tempNum = Number(tempArr.join(''));

        if (visited[tempNum] || !primes[tempNum]) continue;

        visited[tempNum] = true;
        queue.push([tempNum, count + 1]);
      }
    }
  }

  console.log(answer === -1 ? 'Impossible' : answer);
}
