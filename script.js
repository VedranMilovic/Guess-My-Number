"use strict";

// console.log(document.querySelector(".message").textContent); // .message je selected

// document.querySelector(".message").textContent = "🎉 Correct Number!";

// console.log(
//   (document.querySelector(".message").textContent = "🎉 Correct Number!")
// );

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 40;
// document.querySelector(".guess").value = 10;
// console.log((document.querySelector(".guess").value = 10));

let randomNumber = Math.trunc(Math.random() * 21);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
}; // funkcija da se DRY-a kod, možeš i za druge ponavljalice

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    console.log(displayMessage("please guess a number!"));

    //when player wins
  } else if (guess === randomNumber) {
    displayMessage("✔ Correct Number!");
    document.querySelector(".number").textContent = randomNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "20rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess != randomNumber) {
    if (score > 1) {
      displayMessage(
        guess > randomNumber
          ? "❌ Please select lower!"
          : "❌ Please select higher!"
      );
      score -= 1; // ili score--
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("😂 You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  // //when guess is too high
  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "❌ Please select lower!";
  //     score -= 1; // ili score--
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😂 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }

  //   //when guess is too low
  // } else if (guess < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "❌ Please select higher!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "😂 You lost the game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 21);
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
