// 문제 설명
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.

// 입출력 예
// n	return
// 12345	[5,4,3,2,1]

let a = 10000000001; // 자연수
// let a = 9999999999;

console.log(solution(a));


// 코드 점수 +4점

function solution(n) {
  let a = n + "";
  let answer = a
  .split("")
  .reverse()
  .map(x => +x)
  
  return answer
}


function solution_best(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}