import data from './data/ghibli/ghibli.js';
import { filterAZ, filterZA, filterMostRecent, filterOldest, filterDirector, filterProducer, filterHighScore, filterLowScore } from './data.js';
//Información
let allFilms = data.films;
let allCharacters = allFilms.map(f => f.people);
let allLocations = allFilms.map(f => f.locations);
let allVehicles = allFilms.map(f => f.vehicles);
const filterOrder = document.getElementById("filterOrder");
let filmCards = [];

//Aplicar filtro A-Z
filterOrder.addEventListener("change", applyFilterAZ);
function applyFilterAZ() {
  if (filterOrder.value === "0") {
    let filteredInfo = filterAZ(allFilms);
    createCards(filterAZ);
// Crea Información de Pelicula seleccionada
  document.querySelectorAll(".filmCards").forEach((e, i) => {
      e.addEventListener("click", () => {
        let popUpInfo = createPopUp(filteredInfo[i]);
        document.getElementById("detailHead").innerHTML = "";
        document.getElementById("detailHead").innerHTML = popUpInfo;
        let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
        document.getElementById("detailBody").innerHTML = "";
        document.getElementById("detailBody").innerHTML = charInfo;
        let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
        document.getElementById("locInfo").innerHTML = "";
        document.getElementById("locInfo").innerHTML = locInfo;
        let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
        document.getElementById("vehInfo").innerHTML = "";
        document.getElementById("vehInfo").innerHTML = vehInfo;
        document.getElementById("popUp").showModal();
      })
    }
    )
  }
}
//Aplicar filtro Z-A
filterOrder.addEventListener("change", applyFilterZA);
function applyFilterZA() {
  if (filterOrder.value === "1") {
    let filteredInfo = filterZA(allFilms);
    createCards(filterZA);
//Crea Información de Pelicula seleccionada
    document.querySelectorAll(".filmCards").forEach((e, i) => {
      e.addEventListener("click", () => {
        let popUpInfo = createPopUp(filteredInfo[i]);
        document.getElementById("detailHead").innerHTML = "";
        document.getElementById("detailHead").innerHTML = popUpInfo;
        let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
        document.getElementById("detailBody").innerHTML = "";
        document.getElementById("detailBody").innerHTML = charInfo;
        let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
        document.getElementById("locInfo").innerHTML = "";
        document.getElementById("locInfo").innerHTML = locInfo;
        let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
        document.getElementById("vehInfo").innerHTML = "";
        document.getElementById("vehInfo").innerHTML = vehInfo;
        document.getElementById("popUp").showModal();
      })
    }
    )
  }
}
//Aplicar filtro año de estreno más reciente
filterOrder.addEventListener("change", applyFilterMostRecent);
function applyFilterMostRecent() {
  if (filterOrder.value === "2") {
    let filteredInfo = filterMostRecent(allFilms);
    createCards(filterMostRecent);
//Crea Información de Pelicula seleccionada
    document.querySelectorAll(".filmCards").forEach((e, i) => {
      e.addEventListener("click", () => {
        let popUpInfo = createPopUp(filteredInfo[i]);
        document.getElementById("detailHead").innerHTML = "";
        document.getElementById("detailHead").innerHTML = popUpInfo;
        let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
        document.getElementById("detailBody").innerHTML = "";
        document.getElementById("detailBody").innerHTML = charInfo;
        let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
        document.getElementById("locInfo").innerHTML = "";
        document.getElementById("locInfo").innerHTML = locInfo;
        let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
        document.getElementById("vehInfo").innerHTML = "";
        document.getElementById("vehInfo").innerHTML = vehInfo;
        document.getElementById("popUp").showModal();
      })
    }
    )
  }
}
//Aplicar filtro año de estreno más antiguo
filterOrder.addEventListener("change", applyFilterOldest);
function applyFilterOldest() {
  if (filterOrder.value === "3") {
    let filteredInfo = filterOldest(allFilms);
    createCards(filterOldest);
// Crea Información de Pelicula seleccionada
    document.querySelectorAll(".filmCards").forEach((e, i) => {
      e.addEventListener("click", () => {
        let popUpInfo = createPopUp(filteredInfo[i]);
        document.getElementById("detailHead").innerHTML = "";
        document.getElementById("detailHead").innerHTML = popUpInfo;
        let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
        document.getElementById("detailBody").innerHTML = "";
        document.getElementById("detailBody").innerHTML = charInfo;
        let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
        document.getElementById("locInfo").innerHTML = "";
        document.getElementById("locInfo").innerHTML = locInfo;
        let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
        document.getElementById("vehInfo").innerHTML = "";
        document.getElementById("vehInfo").innerHTML = vehInfo;
        document.getElementById("popUp").showModal();
      })
    }
    )
  }
}
//Aplicar filtro puntaje Mayor - Menor
filterOrder.addEventListener("change", applyFilterHigh);
function applyFilterHigh() {
  if (filterOrder.value === "4") {
    let filteredInfo = filterHighScore(allFilms);
    createCards(filterHighScore);
    // Crea Info de Pelicula seleccionada
    document.querySelectorAll(".filmCards").forEach((e, i) => {
      e.addEventListener("click", () => {
        let popUpInfo = createPopUp(filteredInfo[i]);
        document.getElementById("detailHead").innerHTML = "";
        document.getElementById("detailHead").innerHTML = popUpInfo;
        let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
        document.getElementById("detailBody").innerHTML = "";
        document.getElementById("detailBody").innerHTML = charInfo;
        // Probando si crea Loc
        let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
        document.getElementById("locInfo").innerHTML = "";
        document.getElementById("locInfo").innerHTML = locInfo;
        let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
        document.getElementById("vehInfo").innerHTML = "";
        document.getElementById("vehInfo").innerHTML = vehInfo;
        document.getElementById("popUp").showModal();
      })
    }
    )
  }
}
//Aplicar filtro puntaje Menor - Mayor
filterOrder.addEventListener("change", applyFilterLow);
function applyFilterLow() {
  if (filterOrder.value === "5") {
    let filteredInfo = filterLowScore(allFilms);
    createCards(filterLowScore);
// Crea Información de Pelicula seleccionada
    document.querySelectorAll(".filmCards").forEach((e, i) => {
      e.addEventListener("click", () => {
        let popUpInfo = createPopUp(filteredInfo[i]);
        document.getElementById("detailHead").innerHTML = "";
        document.getElementById("detailHead").innerHTML = popUpInfo;
        let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
        document.getElementById("detailBody").innerHTML = "";
        document.getElementById("detailBody").innerHTML = charInfo;
        let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
        document.getElementById("locInfo").innerHTML = "";
        document.getElementById("locInfo").innerHTML = locInfo;
        let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
        document.getElementById("vehInfo").innerHTML = "";
        document.getElementById("vehInfo").innerHTML = vehInfo;
        document.getElementById("popUp").showModal();
      })
    }
    )
  }
}
//Filtrar por director
document.getElementById("filterByDirector").addEventListener("change", applyFilterDirector)
function applyFilterDirector() {
  let selectedDirector = document.getElementById("filterByDirector").value
  let filteredInfo = filterDirector(allFilms, selectedDirector)
  if (selectedDirector === "all") {
    createCards()
  } else {
    document.getElementById("filmsCont").innerHTML = '';
    for (let i = 0; i < filteredInfo.length; i++) {
      filmCards = `<div class="filmCards" > <div class="filmPosters"> <img src="${filteredInfo[i].poster}" alt="Poster de la película"> </div>
    <div><p class="filmTitles">${filteredInfo[i].title}</p></div> 
  </div>`
      document.getElementById("filmsCont").innerHTML += filmCards;
    }
  }
// Crea Información de Pelicula seleccionada
  document.querySelectorAll(".filmCards").forEach((e, i) => {
    e.addEventListener("click", () => {
      let popUpInfo = createPopUp(filteredInfo[i]);
      document.getElementById("detailHead").innerHTML = "";
      document.getElementById("detailHead").innerHTML = popUpInfo;
      let charInfo = createCharacters(filteredInfo.map(f => f.people)[i]);
      document.getElementById("detailBody").innerHTML = "";
      document.getElementById("detailBody").innerHTML = charInfo;
      let locInfo = createLocations(filteredInfo.map(f => f.locations)[i]);
      document.getElementById("locInfo").innerHTML = "";
      document.getElementById("locInfo").innerHTML = locInfo;
      let vehInfo = createVehicles(filteredInfo.map(f => f.vehicles)[i]);
      document.getElementById("vehInfo").innerHTML = "";
      document.getElementById("vehInfo").innerHTML = vehInfo;
      document.getElementById("popUp").showModal();
    })
  }
  )
}
//Filtrar por productor
document.getElementById("filterByProducer").addEventListener("change", applyFilterProducer)
function applyFilterProducer() {
  let filteredInfoProducer = [];
  let selectedProducer = document.getElementById("filterByProducer").value
  if (selectedProducer === "all") {
    createCards()
  } else {
    filteredInfoProducer = filterProducer(allFilms, selectedProducer)
    document.getElementById("filmsCont").innerHTML = '';
    for (let i = 0; i < filteredInfoProducer.length; i++) {
      filmCards = `<div class="filmCards" > <div class="filmPosters"> <img src="${filteredInfoProducer[i].poster}" alt="Poster de la película"> </div>
    <div><p class="filmTitles">${filteredInfoProducer[i].title}</p></div> 
  </div>`
      document.getElementById("filmsCont").innerHTML += filmCards;
    }
  }
  // Crea Información de Pelicula seleccionada
  document.querySelectorAll(".filmCards").forEach((e, i) => {
    e.addEventListener("click", () => {
      let popUpInfo = createPopUp(filteredInfoProducer[i]);
      document.getElementById("detailHead").innerHTML = "";
      document.getElementById("detailHead").innerHTML = popUpInfo;
      let charInfo = createCharacters(filteredInfoProducer.map(f => f.people)[i]);
      document.getElementById("detailBody").innerHTML = "";
      document.getElementById("detailBody").innerHTML = charInfo;
      let locInfo = createLocations(filteredInfoProducer.map(f => f.locations)[i]);
      document.getElementById("locInfo").innerHTML = "";
      document.getElementById("locInfo").innerHTML = locInfo;
      let vehInfo = createVehicles(filteredInfoProducer.map(f => f.vehicles)[i]);
      document.getElementById("vehInfo").innerHTML = "";
      document.getElementById("vehInfo").innerHTML = vehInfo;
      document.getElementById("popUp").showModal();
    })
  }
  )
}
//Iterar datos y desplayar la información (posters y títulos) en HTML
const btnShowMovies = document.getElementById("btnShowMovies")
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
  document.querySelectorAll(".filmCards").forEach((e, i) => {
    e.addEventListener("click", () => {
      let popUpInfo = createPopUp(allFilms[i]);
      document.getElementById("detailHead").innerHTML = "";
      document.getElementById("detailHead").innerHTML = popUpInfo;
      let charInfo = createCharacters(allCharacters[i]);
      document.getElementById("detailBody").innerHTML = "";
      document.getElementById("detailBody").innerHTML = charInfo;
      let locInfo = createLocations(allLocations[i]);
      document.getElementById("locInfo").innerHTML = "";
      document.getElementById("locInfo").innerHTML = locInfo;
      let vehInfo = createVehicles(allVehicles[i]);
      document.getElementById("vehInfo").innerHTML = "";
      document.getElementById("vehInfo").innerHTML = vehInfo;
      document.getElementById("popUp").showModal();
    })
  })
}
//Muestra todas las peliculas desde la barra de filtros 
const showAllCards = document.getElementById("showAllCards")
showAllCards.addEventListener("click", createCards);
//Crea los Pop Up 
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
// Función para imprimir información de personajes en el Pop Up
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
// Funcion para imprimir info de lugares en el Pop Up
function createLocations(allLocations) {
  if(allLocations.length === 0) {
    return `<div class="noInfo"> <div> <img  src="resources/noInfo.png" > </div> <div> <p>No information found here!</p> </div> </div>`
  } else {
  let htmlLoc = "";
  for (let i = 0; i < allLocations.length; i++) {
    htmlLoc = htmlLoc + `<div class="locInfo">
      <div class="locImg">
        <img  src="${allLocations[i].img}" alt="Location picture">
      </div>
      <div class="locText">
        <ul>
          <li>Name: ${allLocations[i].name}</li>
          <li>Climate: ${allLocations[i].climate}</li>
          <li>Terrain: ${allLocations[i].terrain}</li>
          <li>Surface Water: ${allLocations[i].surface_water}</li>
        </ul>
      </div>
    </div>`
  }
  return htmlLoc
  }
}
// Funcion para imprimir info de vehiculos en el Pop Up
function createVehicles(allVehicles) {
  if(allVehicles.length === 0) {
    return `<div class="noInfo"> <div> <img  src="resources/noInfo.png" > </div> <div> <p>No information found here!</p> </div> </div>`
  } else {
  let htmlVeh = "";
  for (let i = 0; i < allVehicles.length; i++) {
    htmlVeh = htmlVeh + ` <div class="vehInfo">
      <div class="vehImg">
        <img src="${allVehicles[i].img}" alt="Vehicle picture">
      </div>
      <div class="vehText">
        <ul>
         <li>Name: ${allVehicles[i].name}</li>
          <li>Description: ${allVehicles[i].description}</li>
          <li>Type: ${allVehicles[i].vehicle_class}</li>
          <li>Length: ${allVehicles[i].length}</li>
        </ul>
      </div>`
   }
  return htmlVeh
  }
}
// Botones para mostrar Personajes, Ubicaciones y Vehiculos
const btnCharacters = document.getElementById("btnCharacters");
btnCharacters.addEventListener("click", btnDisplayCharacters)
const btnLocations = document.getElementById("btnLocations");
btnLocations.addEventListener("click", btnDisplayLocations);
const btnVehicles = document.getElementById("btnVehicles");
btnVehicles.addEventListener("click", btnDisplayVehicles);
function btnDisplayCharacters () {
  document.getElementById("detailBody").style.display = "flex";
   document.getElementById("vehInfo").style.display="none";
   document.getElementById("locInfo").style.display = "none";
}
function btnDisplayVehicles (){
  document.getElementById("detailBody").style.display = "none";
   document.getElementById("locInfo").style.display="none";
   document.getElementById("vehInfo").style.display = "flex";
}
 function btnDisplayLocations (){
   document.getElementById("detailBody").style.display = "none";
   document.getElementById("vehInfo").style.display="none";
   document.getElementById("locInfo").style.display = "flex";
 }
//Cierra el Pop Up
document.getElementById("btnClosePopUp").addEventListener("click", closePopUp)
function closePopUp() {
  document.getElementById("popUp").close();
  btnDisplayCharacters();
}