var optrock = document.getElementById("rock");
var optpaper = document.getElementById("paper");
var optscissors = document.getElementById("scissors")
var playerscorenum = 0; 
var computerscorenum = 0; 
var playerpic = document.getElementById("playerpic")
var computerpic = document.getElementById("Cpic")
var playerscorehtml = document.getElementById("playerscore")
var computerscorehtml = document.getElementById("computerscore")
var winorlose = document.getElementById("win")
//rock option
optrock.addEventListener('click', rockchoice);

function rockchoice(){
   var compchoice = Math.floor(Math.random()*3)+1;
   if(compchoice == 3){
      playerscorenum++;
      playerpic.src ="images/rock.png";
      computerpic.src ="images/scissors.png";
      playerscorehtml.innerHTML =playerscorenum;
      winorlose.innerHTML ="YOU WIN!!!!"
   }
   if(compchoice == 2){
      playerpic.src ="images/rock.png";
      computerpic.src ="images/paper.png";
      computerscorenum++;
      computerscorehtml.innerHTML =computerscorenum;
      winorlose.innerHTML ="you lose...:("
   }
   if(compchoice == 1){
      playerpic.src ="images/rock.png";
      computerpic.src ="images/rock.png";
      winorlose.innerHTML ="Tie¯\_(ツ)_/¯"
   }
   console.log(computerscorenum);
}
//paper option
optscissors.addEventListener('click', scissorschoice);

function scissorschoice(){
   var compchoice = Math.floor(Math.random()*3)+1;
   if(compchoice == 2){
      playerscorenum++;
      playerpic.src ="images/scissors.png";
      computerpic.src ="images/paper.png";
      playerscorehtml.innerHTML =playerscorenum;
      winorlose.innerHTML ="YOU WIN!!!!"
   }
   
   if(compchoice == 1){
      playerpic.src ="images/scissors.png";
      computerpic.src ="images/rock.png";
      computerscorenum++;
      computerscorehtml.innerHTML =computerscorenum;
      winorlose.innerHTML ="you lose...:("
   }
   if(compchoice == 3){
      playerpic.src ="images/scissors.png";
      computerpic.src ="images/scissors.png";
      winorlose.innerHTML ="Tie¯\_(ツ)_/¯"
   }
   console.log(compchoice);
}


