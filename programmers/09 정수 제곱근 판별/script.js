n = 11 // 임의의 양의 정수 n
//n = Math.pow(n , 2)
console.log("입력값:",n)
console.log(solution(n))

// 코드점수 5점

function solution(n) {
    let answer = Math.sqrt(n)
  // answer 은 n 루트 값
    return answer%1==0? Math.pow(answer+1,2):-1;
}

// 루트값 구하기. Math.sqrt()
// Math.pow(base)
// Math.sqrt(4);		// 2
// Math.sqrt(-1); 		// NaN

// 제곱값 구하기. Math.pow()
// Math.pow(base, exponent)
// Math.pow(7, 2);    	// 49
// Math.pow(-7, 1/3); 	// NaN


function nextSqaure(n){
  var result = 0;
  var x = 0;
  while (x*x < n){
    x++;
  }
  if (x*x == n){
    x++;
    result = x*x; 
  }else{
    result = 'no';
  }

  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));