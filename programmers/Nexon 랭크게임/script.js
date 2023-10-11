// const initial_players = [1,2,3];
// const new_players = [6,5,4];
// const rank = 1;

const initial_players = [1,1,3];
const new_players = [2,2,4];
const rank = 2;


console.log(solution(initial_players,new_players,rank));

function solution(initial_players,new_players,rank) {
  // fetch('https://api.github.com/users/anuradha9712')
  // .then(response =>{
  //     return response.json();
  // }).then(data =>{
  //     console.log(data);
  // })

  let inGame = [...initial_players];
  let sum = 0;

  for (let i = 0; i <= new_players.length; i++) {
    inGame.sort((a,b)=>b-a);
    // console.log(inGame[rank-1]);
    sum += inGame[rank-1];
    inGame.push(new_players[i]);
  }
  return sum;
}