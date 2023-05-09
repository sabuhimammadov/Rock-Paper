
function getName(){
    if(nameValue.value.trim()){
     showName()
     playerId()
    }else{
        alert("Please enter your name")
    }
 }
 function showName(){
 starter.style.display ="none"
 main.style.display="block"
 }
 function playerId(){
    user.innerHTML =nameValue.value.trim()
    userName.innerHTML=nameValue.value.trim()
 }
 
 startGame.addEventListener("click",getName ) 

 var playerScore = 0;
 var botScore = 0;
 var playerChoice;
 var victoryPlayer = "DRAFT";
 var victoryBot = "DRAFT";
 //Bot choice
 var  pictures =["s","r","p"]
 function randomPictureSelector(arr){
var randomNumber =Math.floor( Math.random() * arr.length)
 return arr[randomNumber]
 }
 
 //console.log(randomPictureSelector(pictures))

 choices.addEventListener("click",getValue)


 function getValue(e){
   botChoice = randomPictureSelector(pictures);
   if (e.target.id === "rock"){
       playerChoice = "r";
   }
   else if(e.target.id === "paper"){
       playerChoice = "p";
   }
   else if(e.target.id === "scissor"){
       playerChoice = "s";
   }

console.log(playerChoice);
console.log(botChoice);
showChoices();
}

function showChoices(){
   if ((playerChoice==="r" && botChoice==="s")||
       (playerChoice==="p" && botChoice==="r")||
       (playerChoice==="s" && botChoice==="p")){
           victoryPlayer = "WIN"
           victoryBot = "LOSE"
           playerScore +=1;

   }
   else if (playerChoice===botChoice){
       victoryPlayer = "DRAFT";
       victoryBot = "DRAFT";

   }
   else {
       botScore +=1;
       victoryPlayer = "LOSE"
       victoryBot = "WIN"
   }
   console.log("Oyuncu: ", playerScore);
   console.log("Bot: ", botScore);
   showUI();
}
function showUI(){
   choiceUser.src = `./assent/images/${playerChoice}.png`;
   choiceBot.src = `./assent/images/${botChoice}.png`;
   choiceBot.style.scale = "0.8";
   choiceUser.style.scale = "0.8";
   score.innerHTML = `${playerScore}:${botScore}`
   score.style.scale ="2"
   userWin.innerHTML = victoryPlayer;
   botWin.innerHTML = victoryBot;
   if(victoryPlayer==="LOSE" && victoryBot==="WIN"){

      userWin.style.color = "red";
      botWin.style.color = "green";
   }
   else if (victoryPlayer==="WIN" && victoryBot==="LOSE"){

      userWin.style.color = "green";
      botWin.style.color = "red";
   }
   else{
       
      userWin.style.color = "black";
      botWin.style.color = "black";
   }
   
}







 // player choice 
