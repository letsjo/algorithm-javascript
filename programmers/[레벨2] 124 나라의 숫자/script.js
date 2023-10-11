// 124 나라의 숫자
// 문제 설명
// 124 나라가 있습니다. 124 나라에서는 10진법이 아닌 다음과 같은 자신들만의 규칙으로 수를 표현합니다.

// 124 나라에는 자연수만 존재합니다.
// 124 나라에는 모든 수를 표현할 때 1, 2, 4만 사용합니다.
// 예를 들어서 124 나라에서 사용하는 숫자는 다음과 같이 변환됩니다.

// 10진법	124 나라	10진법	124 나라
// 1	1	6	14
// 2	2	7	21
// 3	4	8	22
// 4	11	9	24
// 5	12	10	41
// 자연수 n이 매개변수로 주어질 때, n을 124 나라에서 사용하는 숫자로 바꾼 값을 return 하도록 solution 함수를 완성해 주세요.

// 제한사항
// n은 500,000,000이하의 자연수 입니다.
// 입출력 예
// n	result
// 1	1
// 2	2
// 3	4
// 4	11

console.log("qwer".slice(1,2))

Number.prototype.fillZero = function(width){
    let n = String(this); // 문자열로 변경
    return n.length>=width?n:new Array(width-n.length+1).join('0')+n;
}

// String.prototype.fillZero = function(width){
//   return this.length>=width?this:new Array(width-this.length+1).join('0')+this;
// }

n = 13;
x =26;
// console.log(x.toString(3));
console.log(solution(n));

// console.log(solution(n));

function solution(n) {
  // 거듭제곱
  // 한자리수 3      (3) - (3) 3까지
  // 두자리수 3 ** 2 (9) - (3+9) 12까지
  // 세자리수 3 ** 3 (27) - (3+9+27) 39까지
  // 네자리수 3 ** 4 (81) - (3+9+27+81) 120까지
          //        33.33  11.11  3.70  1.23
  //n_count =  100 /  3  /  3  /   3  /  3
          //         3.33  1.11
  //n_count =   10 / 3  / 3

  let answer = "";
  let sum_n = 0;  // 해당 자리 수의 제일 마지막 수
  let count = 0;  // 124 나라의 자릿수

  while(n>sum_n){
    count++;
    sum_n += 3**count;
  }

  // sum_n(12)-n(10) = 2 이니까 124나라의 2자리 수 중 뒤에서 2번째인 수를 찾으면됨.
  // sum_n(39)-n(13) = 26 이니까 124나라의 3자리 수 중 뒤에서 26번째인 수를 찾으면됨.
  let arr_answer = [];
  for(let i = 0; i < count; i++){
    arr_answer.push("2");
  }

  // 39 -> 3자리에서 제일큰수라서 222 - (26->3진법:222) = 0.fillZero(3) -> 0 > 111
  console.log(sum_n);
  console.log(n);
  console.log("1: ",+arr_answer.join(""))
  console.log("2: ",(sum_n-n).toString(3))

  answer = ((+arr_answer.join(""))-(sum_n-n).toString(3)).fillZero(count)

  let answer_2 = "";

  for(let i = 0; i < answer.length; i++){
    if(answer[i]=="0") answer_2 += "1";
    else if (answer[i] == "1") answer_2 += "2";
    else answer_2 += "4";
  }

  return answer_2;
}