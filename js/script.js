
const url = "https://gateway.marvel.com/v1/public/characters?apikey=bbf15e68860571493abe4a781bdf7e71"

const resultsContainer = document.querySelector(".main-container");

async function callApi() {
  try {

    const response = await fetch(url);
    const json = await response.json();
    const data = json.data.results;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].name);

      resultsContainer.innerHTML = `<div style="font-size: 3rem;">seriously? ${data[0].name} ?</div>`;
    }

  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "Ah bollocks! There is a bug somewhere!";
  }
}
callApi();
