//Build a slot machine with minimum 5 items per reel and 3 reels
//user should be able to bet a min or max and have their total update

let total = 1000;

//event listner that fires off click (button) funtion
document.getElementById('minBet').addEventListener('click', function(){
//set reel values
  let reel1 = randomReel()
  let reel2 = randomReel()
  let reel3 = randomReel()
  console.log(reel1,reel2,reel3)

  // conditional to upadate total values
  let results = checkMatch(reel1, reel2, reel3)
  if(results==='You win, keepy playing!'){
    total = total + 25;
  }else{
    total = total - 1;

// document.getElementById('result').innerHTML= "Money bet: " + total;

  }

  //update the dom with new total
document.getElementById('result').innerHTML = total
  document.getElementById('response').innerHTML = results
  document.getElementById('reel1').innerHTML = reel1
  document.getElementById('reel2').innerHTML = reel2
  document.getElementById('reel3').innerHTML = reel3
});

document.getElementById('maxBet').addEventListener("click", function(){
  let reel1 = randomReel()
  let reel2 = randomReel()
  let reel3 = randomReel()
  console.log(reel1,reel2,reel3)

  // conditional to upadate total values
  let results = checkMatch(reel1, reel2, reel3)
  if(results==='You win, keepy playing!!'){
    total = total + 100;
  }else{
    total = total - 50;

  }

  //update the dom with new total
  document.getElementById('result').innerHTML = total
  document.getElementById('response').innerHTML = results
  document.getElementById('reel1').innerHTML = reel1
  document.getElementById('reel2').innerHTML = reel2
  document.getElementById('reel3').innerHTML = reel3
});

document.getElementById('maxBet').addEventListener("click", function(){

});

//assign reel random values
function randomReel(){

  let choice = Math.random()
  if (choice <= .2){
    return 'cherry';
  }else if(choice <=.4){
    return 'bar';
  }else if(choice <=.6){
    return 'seven';
  }else if(choice <=.8){
    return 'bell';
  }else{
    return 'moneyBag';

  }
  return choice;

//1 ut of 5
// return the value

}

//compare reels to check winner/loser
function checkMatch(a, b, c){
  if (a == b && b == c){
    return 'You win, keepy playing!';
  }else{
    return 'You lose, keep trying!'
  }

}
