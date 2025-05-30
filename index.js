let currentRound;
let streak = 0;
let correct = 0;
let answered = 0;
totalTimeMS = 0;
let start = Date.now();

document.addEventListener("DOMContentLoaded", function () {
  currentRound = loadRound();
});

function chose(id) {
  answered++;
  totalTimeMS += Date.now() - start;
  start = Date.now();
  let yearSelected = parseInt(document.getElementById(id).innerHTML);
  if (yearSelected == currentRound.year) {
    //make this alert look better
    streak++;
    correct++;
    document.getElementById("avgtext").innerHTML = (
      totalTimeMS /
      1000 /
      correct
    ).toFixed(2);
    document.getElementById("correcttext").className = "text-success";
    document.getElementById("correcttext").innerHTML = "correct!";
  } else {
    document.getElementById("correcttext").className = "text-danger";
    document.getElementById("correcttext").innerHTML = "wrong!";
    streak = 0;
  }
  document.getElementById("streaktext").innerHTML = streak;
  document.getElementById("percentright").innerHTML =
    ((correct / answered) * 100).toFixed(1) + "%";
  currentRound = loadRound();
}

function loadRound() {
  let year = getRndInteger(0, 57) * 4 + 1792;
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
    //random assignment of buttons
    let postion = getRndInteger(0, 3);
    console.log(postion);
    switch (postion) {
      case 0:
        document.getElementById("choice1").innerHTML = year;
        document.getElementById("choice2").innerHTML = yearB;
        document.getElementById("choice3").innerHTML = yearC;
        break;
      case 1:
        document.getElementById("choice2").innerHTML = year;
        document.getElementById("choice1").innerHTML = yearB;
        document.getElementById("choice3").innerHTML = yearC;
        break;
      case 2:
        document.getElementById("choice3").innerHTML = year;
        document.getElementById("choice2").innerHTML = yearB;
        document.getElementById("choice1").innerHTML = yearC;
        break;
    }
  }
}
