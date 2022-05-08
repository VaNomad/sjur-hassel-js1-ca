// ————————‡————————  HTML Targets  ————————‡————————
const container = document.querySelector(".container");

// ————————‡————————  API Call  ————————‡————————
const apikey = "?apikey=bbf15e68860571493abe4a781bdf7e71"
const url = "https://gateway.marvel.com/v1/public/characters" + apikey;

async function callApi() {
  try {

    const response = await fetch(url);
    const json = await response.json();
    const characters = json.data.results;
    
    container.innerHTML = "";

    for(let i = 0; i < characters.length; i++) {
     
      container.innerHTML += `
        <a href="details.html?id=${characters[i].id}" class="character-cards">
        <h1 class="name">Name: ${characters[i].name}</h1>
        <h2 class="id">ID: ${characters[i].id}</h2>
        <p>Modified: ${characters[i].modified}</p>
        </a>`
    }

  } catch (error) {
    console.log(error);
    container.innerHTML = "Ah bollocks! There is a bug somewhere!";
  }
}
callApi();

