const details = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url = "https://gateway.marvel.com/v1/public/characters/1011031?apikey=bbf15e68860571493abe4a781bdf7e71";

async function getCharacter() {
  try {
    const response = await fetch(url);
    const json = await response.json();
  
    console.log(json);

    details.innerHTML = "";
  
    details.innerHTML = `<h1>${json.name}</h1>`;
  } catch (error) {
      console.log(error);
      details.innerHTML = ("There seems to be an error", error)
      
  }
  

}
getCharacter();
