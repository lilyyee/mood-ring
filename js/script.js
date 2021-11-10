const moodSelector = document.querySelector("#moods");
const body = document.querySelector(".happy");

moodSelector.addEventListener("change", function (e) {
  const mood = e.target.value;
  if (mood === "happy") {
    body.classList.remove("sad");
    body.classList.remove("passionate");
    body.classList.add("happy");
  } else if (mood === "sad") {
    body.classList.remove("happy");
    body.classList.remove("passionate");
    body.classList.add("sad");
  } else if (mood === "passionate") {
    body.classList.remove("sad");
    body.classList.add("passionate");
    body.classList.remove("happy");
  }
});
