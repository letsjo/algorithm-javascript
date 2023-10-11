// 문제 설명
// 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 가장 큰 숫자를 구하려 합니다.

// 예를 들어, 숫자 1924에서 수 두 개를 제거하면 [19, 12, 14, 92, 94, 24] 를 만들 수 있습니다. 이 중 가장 큰 숫자는 94 입니다.

// 문자열 형식으로 숫자 number와 제거할 수의 개수 k가 solution 함수의 매개변수로 주어집니다. number에서 k 개의 수를 제거했을 때 만들 수 있는 수 중 가장 큰 숫자를 문자열 형태로 return 하도록 solution 함수를 완성하세요.

// 제한 조건
// number는 2자리 이상, 1,000,000자리 이하인 숫자입니다.
// k는 1 이상 number의 자릿수 미만인 자연수입니다.
// 입출력 예
// number	k	return
// "1924"	2	"94"
// "1231234"	3	"3234"
// "4177252841"	4	"775841"
// let number = "11111111111111111111111111";
let number = "4177252841";
let k = 4;
// result = "94";
18422227714
// number	k	return
// "1924"	2	"94"
// "1231234"	3	"3234"
// "4177252841"	4	"775841"

// x = [1,2]

// console.log(x[-1])


console.log(solution(number, k));

// 4177252841
//(k:4) 4 > arr_answer = [4]
//(k:4) 1 > arr_answer = [41]
//(k:3) 7 > arr_answer = [4] > [] > [7]
//(k:2) 7 > arr_answer = [77]
//(k:2) 2 > arr_answer = [772]
//(k:1) 5 > arr_answer = [77] > [775]
//(k:1) 2 > arr_answer = [7752]
//(k:0) 8 > arr_answer = [775] > [7758]
//(k:0) 4,1 > arr_answer = [775841] 

function solution(number, k) {
   let arr_answer = [];

   number.split("").map((x)=> {
    // number 앞에서 한개씩 빼냄
    while(x>arr_answer[arr_answer.length-1] && k>0){
      // answer 배열에 마지막에 들어간수랑 비교
      // 그리고 뽑을 횟수 k가 남아있으면?

      // arr_answer로 마지막 값이 x보다 작으면 빼냄
      // 빼내면 k 횟수 1 차감
      // 그리고 빼내면 또 다시 answer 배열에 마지막에 있는 거랑 비교
      // x가 더 크면 또 빼냄 false 날떄까지 반복
      arr_answer.pop();
      k--;
    }
    arr_answer.push(x);
    // x가 마지막에 넣은거보다 작을 경우 넣는다.
   })
   arr_answer.splice(arr_answer.length-k, k); 
   // 쌓은 것에서 뒤에서 부터 k 만큼 뒤에서 뽑아냄
   // k가 0이면 그대로 지나가고, k가 남아 있으면 잘림.
   // 어차피 하나하나 빼서 크기비교해서 쌓은 스텍이기 때문에 작을수가 없음.
   return arr_answer.join("");
}

function solution_ddd(number, k) {
  let arr_number = number.split("");
  let sort_arr_number = [...arr_number].sort((a,b)=>b-a);
  let start_index = 0;
  let pick_count = 4; 
  // number 타켓
  // pick_count 남은 빼낼 횟수
  // k 빼낼 횟수
// let number = "4177252841";
//               4177252841 (8) k = 4
//               77252841 (7) k = 2
//               77252841 (7) k = 2
//               7752841  (5) k = 1
//               7752841  (4) k = 1
//               7752841  (4) k = 1
//               7752841  (2) k = 1
//               7752841  (4) k = 1
//               8775442211
//               775841
  sort_arr_number.map((biggest)=>{
    index_biggest= arr_number.indexOf(biggest)
    console.log("-----------------",biggest,index_biggest,pick_count-start_index)
    if(index_biggest<=pick_count+start_index){
      console.log("1:",start_index,index_biggest,k)
      console.log(arr_number)
      arr_number.splice(start_index,index_biggest);
      // console.log("2:",start_index,index_biggest,k)
    }
  })
  console.log(arr_number)

  // while(true){
  //   max_number = Math.max(...tmp_arr_number);
  //   tmp_index = tmp_arr_number.indexOf(max_number+"");
  //   if(tmp_index<=k)
  //   {
  //     k-=tmp_index;
  //     arr_number.splice(0,tmp_index);
  //     tmp_arr_number.splice(0,tmp_index);
  //     tmp_arr_number[0]=0;
  //     pick_count++;
  //     console.log(arr_number)
  //     console.log(tmp_index,tmp_arr_number);
  //     break;
  //   }
  //   else tmp_arr_number[tmp_index] = 0;
  // }
  // console.log(tmp_arr_number);
}


function solution_tmp(number, k) {
  let arr_number = number.split("");
  let tmp_arr_number = [...arr_number];
  let arr_answer = [];
  let max_number = 0;
  let tmp_index = 0;
  let pick_count = 0;
  // 77252841
  // 
  while(true){
    max_number = Math.max(...tmp_arr_number);
    tmp_index = tmp_arr_number.indexOf(max_number+"");
    if(tmp_index<=k)
    {
      k-=tmp_index;
      arr_number.splice(0,tmp_index);
      tmp_arr_number.splice(0,tmp_index);
      tmp_arr_number[0]=0;
      pick_count++;
      console.log(arr_number)
      console.log(tmp_index,tmp_arr_number);
      break;
    }
    else tmp_arr_number[tmp_index] = 0;
  }
  console.log(tmp_arr_number);
}

function solution_5(number, k) {
  let arr_number = number.split("");
  let tmp_arr_number = [...arr_number]
  let max_number = 0;
  while(true){
    max_number = Math.max(...tmp_arr_number);
    tmp_index = tmp_arr_number.indexOf(max_number+"")
    console.log(tmp_index,max_number);
    if(tmp_index<k) break;
    else tmp_arr_number.splice(tmp_index,1);
  }
  let loop_count = k-tmp_index;
  arr_number.splice(0,tmp_index);
  
  console.log(k,arr_number);

  for(let i = 0; i < loop_count; i++) {
    tem_arr_number = arr_number.splice(0,k);
    tem_arr_number.splice(tem_arr_number.indexOf(Math.min(...tem_arr_number)+""),1);
    arr_number = tem_arr_number.concat(arr_number);
  }

  return arr_number.join("");
}



function solution_4(number, k) {
  let arr_number = number.split("");
  for (let i = 0; i < k; i++) {
    tem_arr_number = arr_number.splice(0,k);
    tem_arr_number.splice(tem_arr_number.indexOf(Math.min(...tem_arr_number)+""),1);
    arr_number = tem_arr_number.concat(arr_number);
  }
  return arr_number.join("");
}


function solution_3(number, k) {
  let arr_number = number.split("");
  for(let i = 0; i < arr_number.length; i++) {
    if(arr_number[i]>arr_number[i+1]){
      arr_number.splice(i+1,1);
      i--; k--;
      if (k == 0) break;
    } else if (arr_number[i]<arr_number[i+1]){
      arr_number.splice(i,1);
      i--; k--;
      if (k == 0) break;
    }
  }
  return arr_number.join("");
}


function solution_2(number, k) {
  let arr_number = number.split("");
  for (let i = 0; i < k; i++) {
    arr_number.splice(arr_number.indexOf(Math.min(...arr_number)+""),1);
  }
  return arr_number.join("")
}
