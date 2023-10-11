// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// arr	return
// 10	true
// 12	true
// 11	false
// 13	false
// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
// 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

// 입출력 예 #4
// 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

// solution.js
// 실행 결과

let numbers = 11; // 1 이상, 10000 이하인 정수입니다.

// 코드 점수 2

// console.time('solution_1')
// console.log(solution(numbers));
// console.timeEnd('solution_1')

function solution(numbers) {
    let division = numbers;
    let sum = 0;
    while(numbers>0){
        sum = sum+ numbers%10;
        numbers = Math.floor(numbers/10);
    }
    return (division/sum)%1==0?true:false;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(148))

// 베스트 문제코드
// 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
function Harshad(n){
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

    
