
const url = "https://gateway.marvel.com/v1/public/characters?apikey=bbf15e68860571493abe4a781bdf7e71"

const secondContainer = document.querySelector(".secondContainer");

async function callApi() {
  try {

    const response = await fetch(url);
    const json = await response.json();
    const data = json.data.results;

    secondContainer.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);

      if (data[i] === 3) {
        break;
      }

      secondContainer.innerHTML += `
      <div class="results-container">
        <h2 style="font-size: 3rem;">Name:  ${data[i].name}</h2>
        <h3 style="font-size: 2rem;">ID:  ${data[i].id}</h3>
        <p style="font-size: 2rem;">Modified: ${data[i].modified}</p>
      </div>`;
    }

  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "Ah bollocks! There is a bug somewhere!";
  }
}
callApi();
