const title = document.querySelector(".title");

const details = document.querySelector(".details");

const heading = document.querySelector(".main-head");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

if (!id) {
  location.href = "/";
}


const apikey = "?apikey=bbf15e68860571493abe4a781bdf7e71"
const url = "https://gateway.marvel.com/v1/public/characters/" + id + apikey;

async function getCharacter() {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const talents = json.data.results;
    console.log(json);
    

    details.innerHTML = "";
    heading.innerHTML = "Description";

    title.innerHTML = "";
    title.innerHTML = "Description";
    
    // for (let i = 0; i < talents.length; i++) {
    //   console.log(talents[i]);

    //   details.innerHTML += `
    //     <h1>${talents[i].name}</h1>
    //     <h2>${talents[i].id}<h2>
    //     <h3>${talents[i].description}<h3>`;
    // }

    talents.forEach(function(talent) {
      details.innerHTML += `
        <h1>${talent.name}</h1>
        <h2>${talent.id}<h2>
        <h3>${talent.description}<h3>`  
    });


  } catch (error) {
      console.log(error);
      details.innerHTML = ("There seems to be an error", error) 
  }
}
getCharacter();
