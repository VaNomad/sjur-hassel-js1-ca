const container = document.querySelector(".container");

const url = "https://gateway.marvel.com/v1/public/characters/1011031?apikey=bbf15e68860571493abe4a781bdf7e71";

async function getCharacter() {
  try {
    const response = await fetch(url);
    const json = await response.json();

    container.innerHTML = "";
    
    console.log(json);

    container.innerHTML = `
    <div class="results-container">
      <h1 style="font-size: 3rem;">Name:  ${json.name}</h1>
      <h2 style="font-size: 2rem;">ID:  ${json.id}</h2>
      <p style="font-size: 2rem;">Modified: ${json.modified}</p>
    </div>`;
    
  } catch (error) {
      console.log(error);
    container.innerHTML = "Ajajaj! Details-call went south!";
  }
}
getCharacter();
