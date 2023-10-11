function solution(n) {
    return getFibonacci(n);
}

function getFibonacci(n) {
    const fibonacciArr = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        fibonacciArr[i] = (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
    }
    return fibonacciArr[n];
}

console.log(solution(5));

// // 문제가 개편되었습니다. 이로 인해 함수 구성이나 테스트케이스가 변경되어, 과거의 코드는 동작하지 않을 수 있습니다.
// // 새로운 함수 구성을 적용하려면 [코드 초기화] 버튼을 누르세요. 단, [코드 초기화] 버튼을 누르면 작성 중인 코드는 사라집니다.
// function fibonacci(n) {
//   var a = 0, b = 1, f = 1;
//   for (var i = 2; i <= n; i++) {
//     f = a + b;
//     a = b;
//     b = f;
//   }
//   return f;
// }

// // 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(fibonacci(3))