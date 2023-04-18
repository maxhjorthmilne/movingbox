const moveMe1 = document.getElementById("move-me-1");
let x1 = window.innerWidth / 2 - moveMe1.offsetWidth / 2;
let y1 = window.innerHeight / 2 - moveMe1.offsetHeight / 2;
moveMe1.style.top = y1 + "px";
moveMe1.style.left = x1 + "px";

const moveMe2 = document.getElementById("move-me-2");
let x2 = Math.random() * (window.innerWidth - moveMe2.offsetWidth);
let y2 = Math.random() * (window.innerHeight - moveMe2.offsetHeight);
moveMe2.style.top = y2 + "px";
moveMe2.style.left = x2 + "px";

function moveBoxRandomly() {
  x2 = Math.random() * (window.innerWidth - moveMe2.offsetWidth);
  y2 = Math.random() * (window.innerHeight - moveMe2.offsetHeight);
  moveMe2.style.top = y2 + "px";
  moveMe2.style.left = x2 + "px";
}



let dx2 = 10;
let dy2 = 10;

// Move the enemy box
function moveEnemy() {
  // Calculate new position
  let newX = x2 + dx2;
  let newY = y2 + dy2;

  // Check if the box hits a wall in the x direction
  if (newX < 0 || newX > window.innerWidth - moveMe2.offsetWidth) {
    // Reverse the x direction
    dx2 = -dx2;
    newX = x2 + dx2;
  }

  // Check if the box hits a wall in the y direction
  if (newY < 0 || newY > window.innerHeight - moveMe2.offsetHeight) {
    // Reverse the y direction
    dy2 = -dy2;
    newY = y2 + dy2;
  }

  // Update the position of the box
  x2 = newX;
  y2 = newY;
  moveMe2.style.top = y2 + "px";
  moveMe2.style.left = x2 + "px";
}

setInterval(move, 20)

// Update the enemy box every 50 milliseconds
setInterval(moveEnemy, 20);


function move(event) {
  const dx1 = event.key === "a" ? -20 : event.key === "d" ? 20 : 0;
  const dy1 = event.key === "w" ? -20 : event.key === "s" ? 20 : 0;
  
  const newX1 = x1 + dx1;
  const newY1 = y1 + dy1;
  const maxX1 = window.innerWidth - moveMe1.offsetWidth;
  const maxY1 = window.innerHeight - moveMe1.offsetHeight;

  if (newX1 >= 0 && newX1 <= maxX1) {
    x1 = newX1;
    moveMe1.style.left = x1 + "px";
  }
  if (newY1 >= 0 && newY1 <= maxY1) {
    y1 = newY1;
    moveMe1.style.top = y1 + "px";
  }
}
window.addEventListener("keydown", move);





// Keep track of the score
let score = 0;

// Check if the boxes overlap
function checkOverlap() {
  // Get the positions and dimensions of the two boxes
  let rect1 = moveMe1.getBoundingClientRect();
  let rect2 = moveMe2.getBoundingClientRect();

  // Check if the two boxes overlap
  if (!(rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom)) {
    // The boxes overlap, reset the score
    scoreRemover();
  } 

  // Update the score display
  scoreDisplay.innerHTML = "Score: " + score;
}

// Check for overlap every second
setInterval(checkOverlap, 50);


function scoremultiplier(){
    score++;
}

setInterval(scoremultiplier, 1000)

function scoreRemover(){
    if(score>=5){
        score=score-5;
    }
}


let enemyBox = document.getElementById("move-me-2");
let enemyBoxWidth = enemyBox.offsetWidth;
let enemyBoxHeight = enemyBox.offsetHeight;

setInterval(function() {
  enemyBoxWidth *= 1.1;
  enemyBoxHeight *= 1.1;
  enemyBox.style.width = enemyBoxWidth + "px";
  enemyBox.style.height = enemyBoxHeight + "px";

}, 60000);