function solution(X, Y) {
    const arrX = X.split('');
    const arrY = Y.split('');
    let answer = '';

    for(let i = 9; i >= 0; i-=1){
        const countX = arrX.filter(number => Number(number) === i).length;
        const countY = arrY.filter(number => Number(number) === i).length;
        answer += (''+i).repeat(Math.min(countX, countY));
    }
    if (answer === '') return '-1';
    if (Number(answer)=== 0) return '0';
    return answer;
}

console.log(solution("100","203045"));


// 시간초과된 코드

// function solution(X, Y) {    
//     const arrX = X.split('').sort((a,b)=>b-a);
//     let answer = ''
//     arrX.forEach((number)=>{
//         let Y_index = Y.indexOf(number);
//         if (Y_index !== -1){
//             Y = Y.replace(number,'');
//             if(answer !== '0') answer += number;
//         }
//     })
//     if(answer.length > 0)
//         return answer;
//     return '-1';
// }