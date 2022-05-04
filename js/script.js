const url = "https://gateway.marvel.com/v1/public/characters?apikey=bbf15e68860571493abe4a781bdf7e71"

const container = document.querySelector(".container");

async function callApi() {
  try {

    const response = await fetch(url);
    const json = await response.json();
    
    console.log(json);
    
    container.innerHTML = "";

    const characters = json.data.results;

    for (let i = 0; i < characters.length; i++) {
      console.log(characters[i]);

      container.innerHTML += `
                            <div class="results-container">
                              <h2 style="font-size: 3.5rem;">Name: ${characters[i].name}</h2>
                              <h3 style="font-size: 2rem;">ID: ${characters[i].id}</h3>
                              <p style="font-size: 2rem;">Modified: ${characters[i].modified}</p>
                              <img src="${characters[0].url}">
                            </div>`;
    }

  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "Ah bollocks! There is a bug somewhere!";
  }
}
callApi();

