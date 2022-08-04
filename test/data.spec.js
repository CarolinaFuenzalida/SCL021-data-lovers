import {
  filterAZ,
  filterZA,
  filterDirector,
  filterProducer,
  filterMostRecent,
  filterOldest,
  filterHighScore,
  filterLowScore,
} from "../src/data.js";

const allFilms = [
  {
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
    title: "My Neighbors the Yamadas",
    release_date: "1999",
    rt_score: "75",
  },
  {
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
    title: "Howl's Moving Castle",
    release_date: "2004",
    rt_score: "87",
  },
  {
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
    title: "Kiki's Delivery Service",
    release_date: "1989",
    rt_score: "96",
  },
  {
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
    title: "The Cat Returns",
    release_date: "2002",
    rt_score: "89",
  },
  {
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
    title: "Tales from Earthsea",
    release_date: "2006",
    rt_score: "41",
  },
  {
    director: "Laboratoria",
    producer: "Marcia",
    title: "I'm Not a Movie",
    release_date: "2022",
    rt_score: "13",
  },
];

describe("filterAZ retorna elementos ordenados alfabéticamente de la A a la Z", () => {
  it("is a function", () => {
    expect(typeof filterAZ).toBe("function");
  });

  it("Debería retornar las películas en orden alfabético", () => {
    let resultado = filterAZ(allFilms, filterAZ);
    expect(resultado[0].title).toBe("Howl's Moving Castle");
    expect(resultado[1].title).toBe("I'm Not a Movie");
    expect(resultado[2].title).toBe("Kiki's Delivery Service");
    expect(resultado[3].title).toBe("My Neighbors the Yamadas");
    expect(resultado[4].title).toBe("Tales from Earthsea");
    expect(resultado[5].title).toBe("The Cat Returns");
  });
});

describe("filterZA retorna elementos ordenados alfabéticamente de la Z a la A", () => {
  it("is a function", () => {
    expect(typeof filterZA).toBe("function");
  });

  it("Debería retornar las películas en orden alfabético inverso", () => {
    let resultado = filterZA(allFilms, filterZA);
    expect(resultado[0].title).toBe("The Cat Returns");
    expect(resultado[1].title).toBe("Tales from Earthsea");
    expect(resultado[2].title).toBe("My Neighbors the Yamadas");
    expect(resultado[3].title).toBe("Kiki's Delivery Service");
    expect(resultado[4].title).toBe("I'm Not a Movie");
    expect(resultado[5].title).toBe("Howl's Moving Castle");
  });
});

describe(filterDirector, () => {
  it("is a function", () => {
    expect(typeof filterDirector).toBe("function");
  });

  it("deberia retornar solo peliculas del Director Hayao Miyazaki", () => {
    let resultado = filterDirector(allFilms, "Isao Takahata");
    expect(resultado[0].title).toBe("My Neighbors the Yamadas");
  });
});

describe(filterProducer, () => {
  it("is a function", () => {
    expect(typeof filterProducer).toBe("function");
  });

  it("deberia retornar solo peliculas Productor Marcia", () => {
    let resultado = filterProducer(allFilms, "Marcia");
    expect(resultado[0].title).toBe("I'm Not a Movie");
  });
});

describe("filterMostRecent retorna elementos ordenados desde la fecha de estreno más reciente", () => {
  it("is a function", () => {
    expect(typeof filterMostRecent).toBe("function");
  });

  it("Debería retornar las películas en orden de estreno más reciente", () => {
    let resultado = filterMostRecent(allFilms, filterMostRecent);
    expect(resultado[0].title).toBe("I'm Not a Movie");
    expect(resultado[1].title).toBe("Tales from Earthsea");
    expect(resultado[2].title).toBe("Howl's Moving Castle");
    expect(resultado[3].title).toBe("The Cat Returns");
    expect(resultado[4].title).toBe("My Neighbors the Yamadas");
    expect(resultado[5].title).toBe("Kiki's Delivery Service");
  });
});
describe("filterOldest retorna elementos ordenados desde la fecha de estreno más antigua", () => {
  it("is a function", () => {
    expect(typeof filterOldest).toBe("function");
  });

  it("Debería retornar las películas en orden de estreno más antiguo", () => {
    let resultado = filterOldest(allFilms, filterOldest);
    expect(resultado[0].title).toBe("Kiki's Delivery Service");
    expect(resultado[1].title).toBe("My Neighbors the Yamadas");
    expect(resultado[2].title).toBe("The Cat Returns");
    expect(resultado[3].title).toBe("Howl's Moving Castle");
    expect(resultado[4].title).toBe("Tales from Earthsea");
    expect(resultado[5].title).toBe("I'm Not a Movie");
  });
});
describe("filterHighScore retorna elementos ordenados desde la puntuación más alta", () => {
  it("is a function", () => {
    expect(typeof filterHighScore).toBe("function");
  });

  it("Debería retornar las películas en orden de estreno más reciente", () => {
    let resultado = filterHighScore(allFilms, filterHighScore);
    expect(resultado[0].title).toBe("Kiki's Delivery Service");
    expect(resultado[1].title).toBe("The Cat Returns");
    expect(resultado[2].title).toBe("Howl's Moving Castle");
    expect(resultado[3].title).toBe("My Neighbors the Yamadas");
    expect(resultado[4].title).toBe("Tales from Earthsea");
    expect(resultado[5].title).toBe("I'm Not a Movie");
  });
});
describe("filterLowScore retorna elementos ordenados desde la puntuación más baja", () => {
  it("is a function", () => {
    expect(typeof filterLowScore).toBe("function");
  });

  it("Debería retornar las películas en orden de estreno más reciente", () => {
    let resultado = filterLowScore(allFilms, filterLowScore);
    expect(resultado[0].title).toBe("I'm Not a Movie");
    expect(resultado[1].title).toBe("Tales from Earthsea");
    expect(resultado[2].title).toBe("My Neighbors the Yamadas");
    expect(resultado[3].title).toBe("Howl's Moving Castle");
    expect(resultado[4].title).toBe("The Cat Returns");
    expect(resultado[5].title).toBe("Kiki's Delivery Service");
  });
});
