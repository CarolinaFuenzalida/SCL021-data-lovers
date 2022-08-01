import data from './data/ghibli/ghibli.js'
import { filterAZ, filterZA, filterMostRecent, filterOldest, filterDirector, filterProducer, filterHighScore, filterLowScore } from './data.js';
//import { showPopUp, charInfo } from './popup.js';
//información
const allFilms = data.films;
const allCharacters = allFilms.map(f => f.people);
const allLocations = allFilms.map(f => f.locations);
const allVehicles = allFilms.map(f => f.vehicles);
const filterOrder = document.getElementById("filterOrder");
let filmCards = '';

//aplicar filtro A-Z
filterOrder.addEventListener("change", applyFilterAZ);
function applyFilterAZ() {
  if (filterOrder.value === "0") {
    filterAZ(allFilms);
    createCards(filterAZ);
  }
};
//aplicar filtro Z-A
filterOrder.addEventListener("change", applyFilterZA);
function applyFilterZA() {
  if (filterOrder.value === "1") {
    filterZA(allFilms);
    createCards(filterZA);
  }
};
//aplicar filtro año de estreno más reciente
filterOrder.addEventListener("change", applyFilterMostRecent);
function applyFilterMostRecent() {
  if (filterOrder.value === "2") {
    filterMostRecent(allFilms);
    createCards(filterMostRecent);
  }
};
//aplicar filtro año de estreno más antiguo
filterOrder.addEventListener("change", applyFilterOldest);
function applyFilterOldest() {
  if (filterOrder.value === "3") {
    filterOldest(allFilms);
    createCards(filterOldest);
  }
};
//aplicar filtro puntaje mayor - menor
filterOrder.addEventListener("change", applyFilterHigh);
function applyFilterHigh() {
  if (filterOrder.value === "4") {
    filterHighScore(allFilms);
    createCards(filterHighScore);
  }
};
//aplicar filtro puntaje menor - mayor
filterOrder.addEventListener("change", applyFilterLow);
function applyFilterLow() {
  if (filterOrder.value === "5") {
    filterLowScore(allFilms);
    createCards(filterLowScore);
  }
};
//Filtrar por director
//filterBtn.addEventListener("click", applyFilterDirector);
document.getElementById("filterByDirector").addEventListener("change", applyFilterDirector)
function applyFilterDirector() {
  //let filterInput = document.getElementById("filterByDirector")
  let selectedDirector = document.getElementById("filterByDirector").value
  if (selectedDirector === "all") {
    createCards()
  } else {
    let filteredInfo = filterDirector(allFilms, selectedDirector)
    document.getElementById("filmsCont").innerHTML = '';
    for (let i = 0; i < filteredInfo.length; i++) {
      filmCards = `<div class="filmCards" > <div class="filmPosters"> <img src="${filteredInfo[i].poster}" alt="Poster de la película"> </div>
    <div><p class="filmTitles">${filteredInfo[i].title}</p></div> 
  </div>`
      document.getElementById("filmsCont").innerHTML += filmCards;
    }
  }
};

//Filtrar por productor
//filterBtn.addEventListener("click", applyFilterProducer);
document.getElementById("filterByProducer").addEventListener("change", applyFilterProducer)
function applyFilterProducer() {
  // let filterInput = document.getElementById("filterByProducer")
  let selectedProducer = document.getElementById("filterByProducer").value
  if (selectedProducer === "all") {
    createCards()
  } else {
    let filteredInfoProducer = filterProducer(allFilms, selectedProducer)
    document.getElementById("filmsCont").innerHTML = '';
    for (let i = 0; i < filteredInfoProducer.length; i++) {
      filmCards = `<div class="filmCards" > <div class="filmPosters"> <img src="${filteredInfoProducer[i].poster}" alt="Poster de la película"> </div>
    <div><p class="filmTitles">${filteredInfoProducer[i].title}</p></div> 
  </div>`
      document.getElementById("filmsCont").innerHTML += filmCards;
    }
  }
};


//iterar datos y desplayar la información (posters y títulos) en HTML
btnShowMovies.addEventListener("click", createCards, { once: true });
btnShowMovies.addEventListener("click", displayFilterBar);
btnShowMovies.addEventListener("click", displayFilmsCont);
//Muestra la barra de filtros
function displayFilterBar() {
  document.getElementById("filterCont").style.display = "flex";
}
//Muestra el contenedor de tarjetas
function displayFilmsCont() {
  document.getElementById("filmsCont").style.display = "flex";
}
//Crea y muestra las tarjetas dínamicas
function createCards() {
  document.getElementById("filmsCont").innerHTML = '';
  for (let i = 0; i < allFilms.length; i++) {
    filmCards = `<div class="filmCards" > <div class="filmPosters"> <img src="${allFilms[i].poster}" alt="Poster de la película"> </div>
    <div><p class="filmTitles">${allFilms[i].title}</p></div> 
  </div>`
    document.getElementById("filmsCont").innerHTML += filmCards;
  } 

  // Crea Info de Pelicula seleccionada
   document.querySelectorAll(".filmCards").forEach ((e,i) => {
    e.addEventListener("click" , () => {
     let popUpInfo = createPopUp(allFilms[i]);
      document.getElementById("detailHead").innerHTML ="";
      document.getElementById("detailHead").innerHTML = popUpInfo;
     console.log(allCharacters)
      //añadir for each
      let charInfo = createCharacters(allCharacters[i]);
       document.getElementById("detailBody").innerHTML= "";
     document.getElementById("detailBody").innerHTML = charInfo;
  
    })
  }
)};
//Muestra todas las peliculas desde la barra de filtros 
showAllCards.addEventListener("click", createCards);


function createPopUp(allFilms) {
  return `<div class="filmInfoPosters"> 
      <img src="${allFilms.poster}" alt="Movie poster">    
    </div>
    <div class="textInfo">
    <h4 class="filmInfoTitles">${allFilms.title}</h4>
     <p class="filmsDescription">${allFilms.description}</p>
      <ul>
        <li>Director: ${allFilms.director}</li>
        <li>Producer: ${allFilms.producer}</li>
        <li>Release Year: ${allFilms.release_date}</li>
        <li>Score: ${allFilms.rt_score}</li>
      </ul>      
    </div>`
}

function createCharacters(allCharacters) {
  let htmlChar = "";
  for (let i = 0; i < allCharacters.length; i++) {
  htmlChar = htmlChar + `<div class="charInfo">
      <div class="charImg">
        <img src="${allCharacters[i].img}" alt="Character picture">
      </div>
      <div class="charText">
        <ul>
          <li>Name: ${allCharacters[i].name}</li>
          <li>Gender: ${allCharacters[i].gender}</li>
          <li>Age: ${allCharacters[i].age}</li>
          <li>Eye Color: ${allCharacters[i].eye_color}</li>
          <li>Hair Color: ${allCharacters[i].hair_color}</li>
          <li>Species: ${allCharacters[i].specie}</li>
        </ul>
      </div>
      </div>`
 }
  return htmlChar
}





