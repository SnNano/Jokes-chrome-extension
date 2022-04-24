const jokeP = document.querySelector(".joke");
const btnNext = document.querySelector(".btn");

fetchJoke();

btnNext.addEventListener("click", fetchJoke);

async function fetchJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const joke = await fetch("https://icanhazdadjoke.com/", config);
  const res = await joke.json();
  jokeP.innerText = res.joke;
}
