// 문제 설명
// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

n = 100010;

console.log(solution(n));

function solution(n) {
    let answer = 0;
    let numbers = [0,0];    // index와 숫자 위치를 맞추기 위함이고, 0과 1은 소수가 아니라서 
    // 초기 배열 생성
    for(let i = 2; i <= n; i++) {
        numbers.push(i);
    }

    // 2의 배수부터 한단계씩 올라가면서 모두 삭제시킴
    for(let i = 2; i<=n; i++){
        if (numbers[i]==0) continue;    // 이미 지워진 경우에는 바로 다음 배수로

        if (n%numbers[i]==1) {
            answer=i;
            break
        }
        for (let j=i; j<=numbers.length; j+=i){   
            numbers[j] = 0;
        }
    }

    return answer
}