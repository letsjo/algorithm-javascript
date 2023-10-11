// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000

// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52
// 입출력 예 설명

// 입출력 예 #1
// 다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 13	1, 13	2
// 14	1, 2, 7, 14	4
// 15	1, 3, 5, 15	4
// 16	1, 2, 4, 8, 16	5
// 17	1, 17	2
// 따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
// 입출력 예 #2

// 다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 24	1, 2, 3, 4, 6, 8, 12, 24	8
// 25	1, 5, 25	3
// 26	1, 2, 13, 26	4
// 27	1, 3, 9, 27	4
// 따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.

const left = 1;
const right = 1000;

console.time("solution_1");
console.log("answer: ", solution(left, right));
console.timeEnd("solution_1");

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    // left 부터 시작
    let run_num = i;
    let count = 0;
    for (let j = 1; j <= run_num; j++) {
      if(run_num%j==0) count++;
    }
    count%2==0?answer+=i:answer-=i;
  }
  return answer;
}


// 베스트 풀이

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
      if (Number.isInteger(Math.sqrt(i))) {
        // 제곱근이 정수면 약수의 개수가 홀수다... 랍니다. 수학과가 아니라서;
          answer -= i;
      } else {
          answer += i;
      }
  }
  return answer;
}


// function solution_worst(left, right) {
//   const prime_factor = [
//     2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 43, 47, 53, 59, 61, 67, 71, 73,
//     79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157,
//     163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239,
//     241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331,
//     337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421,
//     431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509,
//     521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613,
//     617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709,
//     719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821,
//     823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919,
//     929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997,
//   ]; // 소수 or 소인수
//   let divisor_arr = [];
//   let answer = 0;

//   for (let i = left; i <= right; i++) {
//     // 24부터 27까지 한개씩 넣는다.
//     console.log("-----------------run_num: ", i);
//     let run_num = i; // run_num에 넣어서 계산한다.
//     let prime_countor = []; // prime_countor 에 개수를 저장한다.
//     prime_factor.some((x) => {
//       // prime_factor(소수) 에 있는 걸 한개 씩 꺼낸다.
//       // some 과 map 차이는 some 은 배열을 한개씩 꺼내다가 조건이 만족할 경우 멈출수 있다.
//       // map은 배열 0부터 끝까지 진행.
//       let count = 0;

//       while (run_num % x == 0) {
//         console.log("while:", run_num, x, count);
//         run_num = run_num / x;
//         count++;
//       }
//       count != 0 ? prime_countor.push(count + 1) : 0;
//       console.log(prime_countor);
//       console.log("run_num/(" + x + "): ", run_num / x);
//       return Math.floor(run_num / x) == 0;
//     });
//     prime_countor.length > 1
//       ? prime_countor.reduce((multi = 1, n) => (multi = multi * n)) % 2 == 0
//         ? (answer += i)
//         : (answer -= i)
//       : prime_countor.length == 1
//       ? prime_countor[0] % 2 == 0
//         ? (answer += i)
//         : (answer -= i)
//       : (answer += i);

//     // prime_countor.length>1?divisor_arr.push(prime_countor.reduce((multi=1,n)=>multi=multi*n))
//     // :prime_countor.length==1?divisor_arr.push(prime_countor[0])
//     // :divisor_arr.push(2)
//   }
//   return answer;
// }
