let n = 13004; // 자연수

// console.log(Number(n))
// console.log(n%10)
console.log(solution(n))

// 코드점수 1점
function solution(n)
{
  let answer = 0;
  while(n!=0){
    answer += (n % 10);
    n = Math.floor(n/10);
  }
  return answer
}


function solution_best(n){
    // 쉬운방법
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

// n+"" 문자형으로 바꾼후
// split("") 한개씩 쪼갬


// reduce((acc, curr) => acc + parseInt(curr), 0)
// reduce 배열 요소를 한개씩 꺼내줌
// reduce((acc,curr))
// acc : 호출값
// curr : 쌓이는 값
// 


// 
/*
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array) {
  return accumulator + currentValue;
}); //최종 반환 값 10
*/

/*
callback	accumulator	currentValue	currentIndex	array	      반환 값
1번째 호출	    0	            1	            1	      [0, 1, 2, 3, 4]	1
2번째 호출	    1	            2	            2	      [0, 1, 2, 3, 4]	3
3번째 호출	    3	            3	            3	      [0, 1, 2, 3, 4]	6
4번째 호출	    6	            4	            4	      [0, 1, 2, 3, 4]	10
*/
// 


/*
document.writeln(parseInt("10")); // 10
document.writeln(parseInt("-10")); // -10
document.writeln(parseInt("10.9")); // 10
document.writeln(parseInt(10)); // 10
document.writeln(parseInt("10n")); // 10
document.writeln(parseInt("10nnn13")); // 10
document.writeln(parseInt("    10")); // 10
document.writeln(parseInt("10      ")); // 10
document.writeln(parseInt("k10")); // NaN
document.writeln(parseInt("")); // NaN
*/