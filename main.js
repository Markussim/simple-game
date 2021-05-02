let colorBox = document.getElementById("Color");

let arrow;

let score = 0;

let t0;

let times = [];

let topScore = 0;

randomColor();

document.addEventListener("keydown", (e) => {
  if (e.key == arrow) {
    colorBox.style.backgroundColor = "green";
    score++;
  } else {
    colorBox.style.backgroundColor = "red";
    score = 0;
  }

  let sum = times.reduce(function (a, b) {
    return a + b;
  }, 0);

  if (sum > 0) {
    avg = (1 / (sum / times.length)) * 100000;

    if (avg > topScore || topScore == 0) {
      topScore = avg;
    }

    console.log(topScore);
    document.getElementById("score").innerText =
      avg.toFixed(1) + " Highscore: " + parseInt(topScore).toFixed(1);
  } else {
    document.getElementById("score").innerText =
      "Highscore: " + parseInt(topScore).toFixed(1);
  }

  if (score > 1) {
    if (times.length > 9) times.shift();
    times.push(performance.now() - t0);
  } else {
    times = [];
  }

  t0 = performance.now();
});

document.addEventListener("keyup", (e) => {
  randomColor();
});

function randomColor() {
  if (Math.random() > 0.5) {
    colorBox.style.backgroundColor = "blue";
    arrow = "d";
  } else {
    colorBox.style.backgroundColor = "yellow";
    arrow = "a";
  }
}