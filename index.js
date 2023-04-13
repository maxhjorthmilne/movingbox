const moveMe = document.getElementById("move-me");
let x = window.innerWidth / 2 - moveMe.offsetWidth / 2;
let y = window.innerHeight / 2 - moveMe.offsetHeight / 2;
moveMe.style.top = y + "px";
moveMe.style.left = x + "px";

function move(event) {
  const dx = event.key === "a" ? -10 : event.key === "d" ? 10 : 0;
  const dy = event.key === "w" ? -10 : event.key === "s" ? 10 : 0;
  
  const newX = x + dx;
  const newY = y + dy;
  const maxX = window.innerWidth - moveMe.offsetWidth;
  const maxY = window.innerHeight - moveMe.offsetHeight;

  if (newX >= 0 && newX <= maxX) {
    x = newX;
    moveMe.style.left = x + "px";
  }
  if (newY >= 0 && newY <= maxY) {
    y = newY;
    moveMe.style.top = y + "px";
  }
}

window.addEventListener("keydown", move);