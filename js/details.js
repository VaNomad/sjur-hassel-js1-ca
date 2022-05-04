const details = document.querySelector(".details");

const url = "https://gateway.marvel.com/v1/public/characters/1011031?apikey=bbf15e68860571493abe4a781bdf7e71";

async function getCharacter() {
  
  const response = await fetch(url);
  const json = await response.json();

  console.log(json);

  details.innerHTML = `
  <h1>${json.data.results[0].name}</h1>`;
}
getCharacter();
