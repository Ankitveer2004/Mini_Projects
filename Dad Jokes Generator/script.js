const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "xWtJj/gvthQvsMRWkbAP0w==tyJduFerZrfEOZ7p";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const options = {
  headers: {
    "X-Api-Key": apiKey,
  },
};

async function getJoke() {
  try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    
    const response = await fetch(apiURL, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error occurred. Try again later.";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.error(error);
  }
}

btnEl.addEventListener("click", getJoke);
