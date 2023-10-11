// 2번. 신대륙 발견
// 예지는 오늘 항해99를 시작했다. 성격이 급한 예지는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.
// 제한 조건
// 1 ≤ month ≤ 12
// 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)
// 입출력 예
// 11
// 27
// “3월 5일”
// 6
// 22
// “9월 28일”
// 지정 입력값
// 1
// 18
// ‘4월 26일’

// let month = ;
// let day = ;

// console.log(solution(month, day))



result = 1+2;

function sum (result){
    console.log("나는 "+result+"야!")
}


x = solution(1,18)

console.log(x);

function solution(month, day){
	let month_date = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    console.log("1: ",month_date);

    let sum_date = day+98;  // 18+98 = sum_date

    for(let i=0; i<month; i++){
        sum_date += month_date[i];      // sum_date = sum_date + month_date[i]
    }

    // 22일 + 98일  + 1월 1일부터 10월 22일까지 일자
    // 393일-1년치 > 

    if (sum_date>365) {
        sum_date -= 365
    }

    // 내년으로 넘어갔나요?
    for(let i=1; i<=month_date.length; i++){    // 4월 1일부터 26일 이후 몇인가?
        if(sum_date>month_date[i]){         // 116일은 1월달 안에 있는가? 116>31
            sum_date -= month_date[i];      // 1월 달 = 116-31  =  2월 1일부터 시작 
        } else {
            answer = i+"월 "+sum_date+"일";
            return answer;
        }
    }
}