// 마법의 엘리베이터
// https://school.programmers.co.kr/learn/courses/30/lessons/148653

function solution(storey) {
  let answer = Number.MAX_SAFE_INTEGER;

  const dfs = (num, count) => {
    if (count >= answer) return;

    if (num === 0) {
      answer = count;
      return;
    }

    dfs(Math.floor(num / 10), count + (num % 10));
    dfs(Math.floor(num / 10) + 1, count + 10 - (num % 10));
  };

  dfs(storey, 0);

  return answer;
}

console.log(solution(16)); // 6
console.log(solution(2554)); // 16
