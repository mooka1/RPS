let win = 0;
let lose = 0;
let draw = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    play(button.id);
  });
});

function computerPlay() {
  let choices = ["rock", "paper", "scissor"];
  return choices[Math.floor(Math.random() * choices.length)];
}
function reset() {
  win = 0;
  lose = 0;
  draw = 0;
  let div = document.getElementById("live");
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
  let dive = document.getElementById("result");
  while (dive.firstChild) {
    dive.removeChild(dive.firstChild);
  }
}

function play(button) {
  comp = computerPlay();

  if (
    (button === "rock" && comp === "scissor") ||
    (button === "paper" && comp === "rock") ||
    (button === "scissor" && comp === "paper")
  ) {
    win = win + 1;
  } else if (
    (button === "rock" && comp === "paper") ||
    (button === "paper" && comp === "scissor") ||
    (button === "scissor" && comp === "rock")
  ) {
    lose = lose + 1;
  } else if (
    (button === "rock" && comp === "rock") ||
    (button === "paper" && comp === "paper") ||
    (button === "scissor" && comp === "scissor")
  ) {
    draw = draw + 1;
  }

  /////////
  const a = document.querySelector("#result");
  const b = document.createElement("p");
  document.getElementsByClassName;
  b.classList.add("live");
  b.textContent = `You choose ${button} and computer choose  ${comp}`;

  a.append(b);

  const q = document.querySelector("#live");
  q.innerHTML = "";
  const c = document.createElement("p");
  c.textContent = ` win: ${win} lose:  ${lose} draw : ${draw}`;
  q.appendChild(c);

  if (win >= 5 || lose >= 5) {
    confirm("Do you wish to play the game again");
    if (true) {
      reset();
    } else {
    }
  }
}
