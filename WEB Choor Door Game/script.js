let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let startButton = document.getElementById("start");
let currentPlaying = true;
let winStatus = "You win! Play again?";
let closeStatus = "Game over! Play again?";
let currentlyScore = parseInt(document.getElementById("currently-score").innerHTML);
let bestScore = parseInt(document.getElementById("best-score").innerHTML);
function gameOver(status){
  if(status === 'win') {
    startButton.innerHTML = winStatus;
		currentlyScore++;
		if(bestScore < currentlyScore)
      bestScore++;
    document.getElementById("currently-score").innerHTML = currentlyScore;
    document.getElementById("best-score").innerHTML = bestScore;
                       }
  else{ startButton.innerHTML = closeStatus;
       currentlyScore = 0;
       document.getElementById("currently-score").innerHTML = currentlyScore;
      }
  currentPlaying = false;
}
function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors === 0) gameOver('win');
  else if(isBot(door)) gameOver();
}
function isBot(door){
  if(door.src === botDoorPath) return true;
  else return false;
}
function isClicked(door){
  if(door.src === closedDoorPath) return false;
  else return true;
}
randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if(choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor3 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  else {openDoor3 = botDoorPath;
  			openDoor1 = beachDoorPath;
    		openDoor2 = spaceDoorPath;
       }
}
doorImage1.onclick = function (){
  if(isClicked(doorImage1) === false && currentPlaying){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  }
}
doorImage2.onclick = () =>{
  if(isClicked(doorImage2) === false && currentPlaying){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  }
}
doorImage3.onclick = () =>{
	if(isClicked(doorImage3) === false && currentPlaying){
 	doorImage3.src = openDoor3;
  playDoor(doorImage3);
  }
}
startButton.onclick = () =>{
  if(!currentPlaying)
  	startRound();
}
function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentPlaying = true;
  randomChoreDoorGenerator();
}
startRound();