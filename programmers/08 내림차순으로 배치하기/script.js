/*
문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

제한 조건
n은 1이상 8000000000 이하인 자연수입니다.

입출력 예
n	return
118372	873211
*/

n = 41342; //  1이상 8000000000 이하인 자연수

console.log(solution(n));


// 코드 점수 1점;;;;
function solution(n) {
  return Number(String(n).split("").sort((a,b) => b-a).join(''));
}


function solution(n) {
  const newN = n + "";
  // n을 문자형으로 바꿈 String() 보다 가볍다고 들음
  const newArr = newN
  // 문자형.split("") 문자를 배열로 쪼갬
  // .sort() 정렬함 낮은차순
  // .reverse(); 역으로 돌림 (sort 보다 가벼운거같음)
  // .join(""); 합침
    .split("")
    .sort()
    .reverse()
    .join("");

  // 앞에 +를 붙침으로써 정수로 바꿔서 출력!
  return +newArr;
}