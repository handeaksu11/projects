let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    let target = Math.floor(Math.random()*10);
    return target;
  };
  
  
  function compareGuesses(user,comp,target){
    if(Math.abs(user - target) < Math.abs(comp-target) || (Math.abs(user-target)===Math.abs(comp-target) ) ){
      return true;
    }
    else{
      return false;
    }
    };
  
  function updateScore(winner){
      if(winner==='human'){
        humanScore+=1;
      }else{
        computerScore+=1;
      }
  
    };
  
    function advanceRound(){
      currentRoundNumber +=1;
    };
  