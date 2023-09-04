// 소수&팰린드롬
// https://www.acmicpc.net/problem/1747

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n');
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const eratos = (num) => {
  const arr = new Array(num + 1).fill(true);
  arr[0] = false;
  arr[1] = false;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }

  return arr;
};

const isPalindrome = (num) => {
  const str = String(num);
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
};

const N = Number(input[0]);
const arr = eratos(1003002);

for (let i = N; i <= 1003002; i++) {
  if (arr[i] && isPalindrome(i)) {
    console.log(i);
    break;
  }
}
