const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const soundEffect = document.getElementById("sound-effect");
const timerElement = document.getElementById("timer");

let timeLeft = 10;

// Fungsi untuk memulai timer
function startTimer() {
  const countdown = setInterval(() => {
    if (timeLeft >= 0) {
      timerElement.innerHTML = timeLeft;
      timeLeft -= 1;
    }

    if (timeLeft < 0) {
      clearInterval(countdown);
      question.innerHTML = "Waktunya habis, silahkan refresh";
      soundEffect.play();

      yesBtn.style.display = "none";
      noBtn.style.display = "none";
    }
  }, 1000);
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Oke, Semangat & Tetap Bersyukur yaa";
  soundEffect.play();
});

noBtn.addEventListener("mouseover", () => {
  const i =
    Math.floor(
      Math.random() *
        (wrapper.getBoundingClientRect().width - noBtn.offsetWidth)
    ) + 1;
  const j =
    Math.floor(
      Math.random() *
        (wrapper.getBoundingClientRect().height - noBtn.offsetHeight)
    ) + 1;

  noBtn.classList.add("shake");

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";

  setTimeout(() => {
    noBtn.classList.remove("shake");
  }, 500);
});

startTimer();
