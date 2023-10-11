// ## 1번. 행렬 음양 더하기

// 행렬이 두개 있습니다. 두 행렬의 절댓값을 차례대로 담은 정수 배열 arr1, arr2와 행렬의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 두 행렬의 부호는 같습니다.

// 실제 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.

// ### 제한 조건

// - 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않습니다.

// [입출력 예](https://www.notion.so/426c107046394267bec71d1fa99fe579)

// [지정 입력값](https://www.notion.so/d97eaa04dfeb4103944edbc4d8815677)

function solution(arr1, arr2, signs){
    let answer=[];
    
    for(let i=0; i<arr1.length; i++) {
        let tmp_answer=[];
        for(let j=0; j<arr1[i].length; j++){
            if(signs[i][j]) tmp_answer.push(arr1[i][j]+arr2[i][j]);
            else tmp_answer.push(0-arr1[i][j]-arr2[i][j]); 
        }
        answer.push(tmp_answer);
    }
	return answer;
}

// let arr1=[[1,2],[2,3]];
// let arr2=[[3,4],[5,6]];
// let signs=[[true,true],[true,false]]
// result = [[4,6],[7,-9]]

// let arr1=[[1],[2]];
// let arr2=[[3],[4]];
// let signs=[[false],[false]]
// result = [[-4],[-6]]

let arr1=[[5,7,1],[2,3,5]];
let arr2=[[5,1,6],[7,5,6]];
let signs=[[true,true,false],[false,true,false]];
// result = [[10,8,-7],[-9,8,-11]];

console.log(solution(arr1, arr2, signs));