function chose() {
  alert("todo");
}

function loadRound() {
  return new game("nothing.png", 2000);
}

//onload hook

class game {
  constructor(imageSrc, year) {
    document.getElementById("image").src = imageSrc;
    this.year = year;
    //generate the other two random years
    this.yearB = 0;
    this.yearC = 0;
    //random assignment of buttons
  }
}
