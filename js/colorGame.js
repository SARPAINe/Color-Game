var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var index = pickColor();
var pickedColor = colors[index];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var header = document.querySelector("header");
colorDisplay.textContent = pickedColor;
var newColors = document.getElementById("newColors");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
easyButton.addEventListener("click", function () {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  newColors.textContent = "New colors";
  messageDisplay.textContent = "";
  numSquares = 3;
  header.style.backgroundColor = "rgb(64, 223, 199)";
  colors = generateRandomColors(numSquares);
  pickedColor = colors[pickColor()];
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});
hardButton.addEventListener("click", function () {
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected");
  newColors.textContent = "New colors";
  messageDisplay.textContent = "";
  numSquares = 6;
  header.style.backgroundColor = "rgb(64, 223, 199)";
  colors = generateRandomColors(numSquares);
  pickedColor = colors[pickColor()];
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
  }
});
newColors.addEventListener("click", function () {
  newColors.textContent = "New colors";
  messageDisplay.textContent = "";
  colors = generateRandomColors(numSquares);
  pickedColor = colors[pickColor()];
  // console.log(pickedColor);
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  header.style.backgroundColor = "rgb(64, 223, 199)";
});
for (var i = 0; i < squares.length; i++) {
  //add initial colors
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", function () {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      header.style.backgroundColor = clickedColor;
      newColors.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "rgb(83, 83, 145)";
      messageDisplay.textContent = "Try Again!";
    }
  });
}

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}
function pickColor() {
  return Math.floor(Math.random() * colors.length);
}
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
