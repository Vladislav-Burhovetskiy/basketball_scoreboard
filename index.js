const homePoint = document.getElementById("home-number");
const guestPoint = document.getElementById("guest-number");
const newGameBtn = document.getElementById("home-three");
const home = document.getElementById("home-title");
const guest = document.getElementById("guest-title");

let homeResult = 0;
let guestResult = 0;

function changeColor() {
  if (homeResult > guestResult) {
    home.style.color = "#C4B5FD";
    guest.style.color = "white";
  } else if (homeResult < guestResult) {
    guest.style.color = "#C4B5FD";
    home.style.color = "white";
  } else {
    home.style.color = "white";
    guest.style.color = "white";
  }
}

function sumHomePoint(point) {
  homeResult += point;
  homePoint.textContent = homeResult;

  changeColor();
}

function sumGuestPoint(point) {
  guestResult += point;
  guestPoint.textContent = guestResult;

  changeColor();
}

function newGame() {
  homeResult = 0;
  guestResult = 0;
  homePoint.textContent = 0;
  guestPoint.textContent = 0;

  changeColor();
}
