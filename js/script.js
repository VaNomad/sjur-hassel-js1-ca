const container = document.querySelector(".container");

const apikey = "?apikey=bbf15e68860571493abe4a781bdf7e71"
const url = "https://gateway.marvel.com/v1/public/characters/" + apikey;

async function callApi() {
  try {

    const response = await fetch(url);
    const json = await response.json();
    
    console.log(json);
    
    container.innerHTML = "";

    const characters = json.data.results;

    characters.forEach(function(character) {
      container.innerHTML += `
        <a href="details.html?id=${character.id}" class="character-cards">
        <h2 style="font-size: 3.5rem;">Name: ${character.name}</h2>
        <h3 style="font-size: 2rem;">ID: ${character.id}</h3>
        <p style="font-size: 2rem;">Modified: ${character.modified}</p>
        <div style="background-image: url(${character.thumbnail});"></div>
      </a>`;
    });

    {/* for (let i = 0; i < characters.length; i++) {
      console.log(characters[i]);

      container.innerHTML += `
                             <a href="details.html?id=${characters.id}" class="character-cards">
                               <h2 style="font-size: 3.5rem;">Name: ${characters[i].name}</h2>
                               <h3 style="font-size: 2rem;">ID: ${characters[i].id}</h3>
                               <p style="font-size: 2rem;">Modified: ${characters[i].modified}</p>
                               <<img src="${characters[i].thumbnail}">>
                             </a>`;
    } */}

  } catch (error) {
    console.log(error);
    resultsContainer.innerHTML = "Ah bollocks! There is a bug somewhere!";
  }
}
callApi();

