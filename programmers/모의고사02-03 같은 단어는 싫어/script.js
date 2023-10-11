// ## 3번. 같은 단어는 싫어

// 배열 arr와 정수 n이 주어집니다. 배열 arr의 각 원소는 문자열로 이루어져 있습니다. 이때, 배열 arr에서 중복되는 단어는 전부 제거하려고 합니다. 단, 제거된 후 남은 단어들을 반환할 때는 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 

// 예를 들어 strings가 ["brush", "sun", "brush", "bed", "car"]이고 n이 1이면 중복을 제거한 배열인 ["sun", "bed", "car"]에서 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// ### 제한 조건

// - strings는 길이 1 이상, 50이하인 배열입니다.
// - strings의 원소는 소문자 알파벳으로 이루어져 있습니다.
// - strings의 원소는 길이 1 이상, 100이하인 문자열입니다.
// - 모든 strings의 원소의 길이는 n보다 큽니다.
// - 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치합니다.


function solution(arr, n){
	let answer=[];
    let del_list = [];
    for(let i=0; i<arr.length; i++){
        del_list = [];
        arr.map((x,index)=>{
            if (arr[i]==x){
                del_list.push(index);
            }
        })
        del_list.reverse();
        if (del_list.length>1){
            for(let j=0; j<del_list.length; j++){
                arr.splice(del_list[j],1);
            }
        }
    }
    
    answer = arr.map((string) => {
        string = string[n] + string;
        console.log(string);
        return string;
      })
      answer = answer.sort();
      answer = answer.map((string) => {
        return string.substr(1);
      })

	return answer;
}
// let arr=["coke", "water", "glass", "dog", "dog", "yogurt", "vitamin","dog"];
// let n=2;
// result = ['glass', 'yogurt', 'coke', 'vitamin', 'water']

// let arr=["brush", "sun", "brush", "bed", "car"];
// let n=1;
// result = ["car", "bed", "sun"]

// let arr=["banana", "cat", "car", "apple", "banana", "banana"];
// let n=0;
// result = ["apple","car","cat"]

console.log(solution(arr, n))