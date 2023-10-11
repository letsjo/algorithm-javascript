// 가장 큰 수
// 문제 설명
// 0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

// 예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

// 0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

// 제한 사항
// numbers의 길이는 1 이상 100,000 이하입니다.
// numbers의 원소는 0 이상 1,000 이하입니다.
// 정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
// 입출력 예
// numbers	return
// [6, 10, 2]	"6210"
// [3, 30, 34, 5, 9]	"9534330"
// ※ 공지 - 2021년 10월 20일 테스트케이스가 추가되었습니다.

let numbers = [3, 34, 30, 5, 9];
// console.log(numbers.sort().reverse());

console.log(solution(numbers));

function solution(numbers) {
let answer = numbers.map(x => x+"").sort((a,b)=>((b+a)-(a+b))).join("");

return answer[0]!='0'? answer:'0';
}

function solution_my(numbers) {
    numbers.sort().reverse();
    let max_number = Math.max(...numbers)+"";
    console.log(max_number.length);
    let arr_answer = [];
    for (let j = 0; j < max_number.length; j++) {
        for(let i = 0; i < numbers.length; i++) {
            // console.log(arr_answer[arr_answer.length-1][j]);
            while((numbers[i]+"")[j]?(numbers[i]+"")[j]>arr_answer[arr_answer.length-1]?arr_answer[arr_answer.length-1][j]:0)
            {
                numbers.push(arr_answer.pop());
                numbers.shift();
            }
            arr_answer.push(numbers[i]+"");
            console.log(numbers);
            console.log(arr_answer);
        }
    }


    return arr_answer.join("");
}