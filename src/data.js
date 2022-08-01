//Ordenar de la A a la Z
export let filterAZ = (titles) => {
  let filterByAZ = titles.sort((a,b) => 
  a.title.localeCompare(b.title)
)
return filterByAZ;
};
//Ordenar de la Z a la A
export let filterZA = (titles) => {
  let filterByZA = titles.sort((a,b) => 
  b.title.localeCompare(a.title)
)
return filterByZA;
};
//Ordenar por puntaje menor - mayor
export let filterHighScore = (data) => {
  let filterByHighScore = data.sort((a,b) => b.rt_score - a.rt_score)
return filterByHighScore;
};
//Ordenar por puntaje menor - mayor
export let filterLowScore = (data) => {
  let filterByLowScore = data.sort((a,b) => a.rt_score - b.rt_score)
return filterByLowScore;
};
//Ordenar por la más reciente
export let filterMostRecent = (release_date) => {
  let filterByMostRecent = release_date.sort((a,b) => 
  b.release_date.localeCompare(a.release_date)
)
return filterByMostRecent;
};
//Ordenar por la más antigua
export let filterOldest = (release_date) => {
  let filterByOldest = release_date.sort((a,b) => 
  a.release_date.localeCompare(b.release_date)
)
return filterByOldest;
};
//Filtrar data director
export let filterDirector = (allFilms, name) => {
  let directorData = allFilms.filter(f => f.director === name)
  return directorData;
};
//Filtrar data Productores
export let filterProducer = (allFilms, name) => {
  let producerData = allFilms.filter(f => f.producer === name)
  return producerData ;
};