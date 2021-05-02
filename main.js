let colorBox = document.getElementById("Color");

let arrow;

let score = 0;

let t0;

let times = [];

let topScore = 0;

let pressed = false;

randomColor();

document.addEventListener("keydown", (e) => {
  if (pressed == false && (e.key == "a" || e.key == "d")) {
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

      if ((avg > topScore || topScore == 0) && times.length >= 10) {
        topScore = avg;
      }

      console.log(topScore);

      if (times.length > 9) {
        document.getElementById("score").innerText =
          avg.toFixed(1) + " Highscore: " + parseInt(topScore).toFixed(1);

        document.getElementById("percent").innerText = "";
      } else {
        document.getElementById("percent").innerText = (score / 10) * 100 + "%";
      }
    } else {
      document.getElementById("score").innerText =
        "Highscore: " + parseInt(topScore).toFixed(1);
      document.getElementById("percent").innerText = 0 + "%";
    }

    if (times.length > 9) {
      document.getElementById("percent").innerText = "";
    } else if (score > 1) {
      document.getElementById("percent").innerText =
        ((score - 1) / 10) * 100 + "%";
    }

    if (score > 1) {
      if (times.length > 9) times.shift();
      times.push(performance.now() - t0);
    } else {
      times = [];
    }

    t0 = performance.now();
    pressed = true;
  } else if (e.key == "a" || e.key == "d") {
    randomColor();
    alert("I told you not to hold");
  }
});

document.addEventListener("keyup", (e) => {
  if (e.key == "a" || e.key == "d") randomColor();
});

function randomColor() {
  if (Math.random() > 0.5) {
    colorBox.style.backgroundColor = "blue";
    arrow = "d";
  } else {
    colorBox.style.backgroundColor = "purple";
    arrow = "a";
  }
  pressed = false;
}
