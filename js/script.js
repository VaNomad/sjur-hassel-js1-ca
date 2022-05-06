// ————————‡————————  API Call  ————————‡————————

const container = document.querySelector(".container");

const apikey = "?apikey=bbf15e68860571493abe4a781bdf7e71"
const url = "https://gateway.marvel.com/v1/public/characters" + apikey;

async function callApi() {
  try {

    const response = await fetch(url);
    const json = await response.json();
    
    container.innerHTML = "";

    const characters = json.data.results;

    for(let i = 0; i < characters.length; i++) {
      if (characters[i].description === "") {
        continue;
      }
    
      container.innerHTML += `
        <a href="details.html?id=${characters[i].id}" class="character-cards">
        <h2 style="font-size: 3.5rem;">Name: ${characters[i].name}</h2>
        <h3 style="font-size: 2rem;">ID: ${characters[i].id}</h3>
        <p style="font-size: 2rem;">Modified: ${characters[i].modified}</p>
        </a>`
    }

  } catch (error) {
    console.log(error);
    container.innerHTML = "Ah bollocks! There is a bug somewhere!";
  }
}
callApi();

