// 귤 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let answer = 0;

  const scales = new Map();

  for (let i = 0; i < tangerine.length; i += 1) {
    if (scales.has(tangerine[i])) scales.set(tangerine[i], scales.get(tangerine[i]) + 1);
    else scales.set(tangerine[i], 1);
  }

  const sortedScales = new Map([...scales.entries()].sort((a, b) => b[1] - a[1]));

  for (const value of sortedScales.values()) {
    if (k <= 0) break;

    if (k >= value) {
      k -= value;
      answer += 1;
    } else {
      answer += 1;
      break;
    }
  }

  return answer ? answer : 1;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3]));
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3]));
