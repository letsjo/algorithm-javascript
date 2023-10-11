// 수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

// 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한 조건
// 시험은 최대 10,000 문제로 구성되어있습니다.
// 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
// 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
// 입출력 예
// answers	return
// [1,2,3,4,5]	[1]
// [1,3,2,4,2]	[1,2,3]
// 입출력 예 설명
// 입출력 예 #1

// 수포자 1은 모든 문제를 맞혔습니다.
// 수포자 2는 모든 문제를 틀렸습니다.
// 수포자 3은 모든 문제를 틀렸습니다.
// 따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

// 입출력 예 #2

// 모든 사람이 2문제씩을 맞췄습니다.

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

answers=[1,3,2,4,2];

// console.time('solution_1')
console.log(solution(answers));
// console.timeEnd('solution_1')

function solution(answers) {
  let first = [1, 2, 3, 4, 5].join("").repeat(Math.ceil(answers.length/5));                // 5자리
  let second = [2, 1, 2, 3, 2, 4, 2, 5].join("").repeat(Math.ceil(answers.length/8));      // 8자리
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5].join("").repeat(Math.ceil(answers.length/10)); // 10자리

  let correct = [0, 0, 0]; // 맞춘문제 기록하기

  for(let i = 0; i < answers.length; i++){
    answers[i] == first[i] ? correct[0] += 1:0;
    answers[i] == second[i] ? correct[1] += 1:0;
    answers[i] == third[i] ? correct[2] += 1:0;
  }

  let first_rank = []
  let best_score = 0;

  correct = correct.map((score,number) => {
    if (best_score<score){
      best_score=score;
      first_rank=[number+1];
    } else if (best_score==score){
      first_rank.push(number+1);
    }
    return score
  })

  return first_rank;
}