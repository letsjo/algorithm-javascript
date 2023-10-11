// 코코넛 그 두 번째 이야기
// https://www.acmicpc.net/problem/6417

let input = require('fs')
  .readFileSync(__dirname + '/input.txt', {
    encoding: 'utf-8',
  })
  .toString()
  .trim()
  .split('\r\n')
  .map(Number);
// let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let index = 0;

while (input[index] > 0) {
  const n = input[index];
  let maxPeople = 0;

  for (let i = 1; i <= n; i++) {
    if (coconutDivideByPeople(n, i, 0)) {
      maxPeople = i;
    }
  }

  if (maxPeople === 1) {
    console.log(`${n} coconuts, no solution`);
  } else {
    console.log(`${n} coconuts, ${maxPeople} people and 1 monkey`);
  }

  index += 1;
}

function coconutDivideByPeople(coconut, people, count) {
  if (people === count) {
    return true;
  }

  let countCoconut = coconut - 1;

  if (countCoconut % people !== 0) {
    return false;
  }

  countCoconut = countCoconut - countCoconut / people;

  return coconutDivideByPeople(countCoconut, people, count + 1);
}
