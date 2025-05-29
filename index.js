let currentRound;

document.addEventListener("DOMContentLoaded", function () {
  currentRound = loadRound();
});

function chose(id) {
  let yearSelected = parseInt(document.getElementById(id).innerHTML);
  if (yearSelected == currentRound.year) {
    //make this alert look better
    alert("correct");
  } else {
    alert("wrong");
  }
  currentRound = loadRound();
}

function loadRound() {
  let year = getRndInteger(0, 58) * 4 + 1792;
  return new round(
    "https://commons.wikimedia.org/wiki/Special:FilePath/File%3AElectoralCollege" +
      year +
      ".svg",
    year,
  );
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//onload hook

class round {
  constructor(imageSrc, year) {
    document.getElementById("image").src = imageSrc;
    this.year = year;
    //generate the other two random years
    let yearB =
      year +
      (Math.floor(Math.random() * Math.floor(Math.random() * 4)) + 1) * 4;
    let yearC =
      year -
      (Math.floor(Math.random() * Math.floor(Math.random() * 4)) + 1) * 4;
    console.log(Math.floor(Math.random() * Math.floor(Math.random() * 4)) * 4);
    //random assignment of buttons
    let postion = getRndInteger(0, 2);
    console.log(postion);
    switch (postion) {
      case 0:
        document.getElementById("choice1").innerHTML = year;
        document.getElementById("choice2").innerHTML = yearB;
        document.getElementById("choice3").innerHTML = yearC;
      case 1:
        document.getElementById("choice2").innerHTML = year;
        document.getElementById("choice1").innerHTML = yearB;
        document.getElementById("choice3").innerHTML = yearC;
      case 2:
        document.getElementById("choice3").innerHTML = year;
        document.getElementById("choice2").innerHTML = yearB;
        document.getElementById("choice1").innerHTML = yearC;
    }
  }
}
