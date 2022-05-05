const details = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const apikey = "?apikey=bbf15e68860571493abe4a781bdf7e71"
const url = "https://gateway.marvel.com/v1/public/characters/" + id + apikey;

async function getCharacter() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = json.data.results

    details.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);

      details.innerHTML = `
        <h1>${data[i].name}</h1>
        <h2>${data[i].id}<h2>
        <h3>${data[i].description}<h3>`;
    }
  } catch (error) {
      console.log(error);
      details.innerHTML = ("There seems to be an error", error) 
  }
}
getCharacter();
