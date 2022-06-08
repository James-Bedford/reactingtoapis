//v1 pulls back api film info
//v2 card created and test text appears but only one car created
//v3 card formats correctly for each button click
import { useState, useEffect } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const getData = async () => {
    const res = await fetch("https://ghibliapi.herokuapp.com/films/");
    const data = await res.json();
    setFilms(data);
    let newFilm = films.map((film) => <div key={film.id}>{film.title}</div>);
    console.log(newFilm[1].title);
    seedFilms("TestFilm", 1);
  };

  return (
    <>
      <div class="container mt-3">
        <div class="jumbotron text-center bg-info text-white">
          <h1>Welcome to the Studio Ghibli film database!</h1>
        </div>
        <div>
          <div class="jumbotron text-center bg-info text-white">
            <button onClick={() => getData()} class="btn btn-secondary btn-lg">
              Press for films load
            </button>

            <button type="button" class="btn btn-secondary btn-lg">
              Load People
            </button>
          </div>
        </div>

        <div class="col-sm-6" id="filmsdetails">
          <div class="card-body">
            <div id="filmdetails"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

function seedFilms(filmTitle, filmId) {
  let element = document.getElementById("filmdetails");

  let cardTitle = document.createElement("div");
  //cardTitle.innerHTML = '<div class="card m-1"></div>';
  element.appendChild(cardTitle);
  let cardBody = document.createElement("div");
  cardBody.innerHTML = '<div class="card-body">';
  let cardBodyText = document.createElement("div");
  cardBodyText.innerHTML =
    '<h1 class="card-title jumbotron text-center bg-warning text-white"><div>Title</div></h1></div>';
  cardBody.appendChild(cardBodyText);
  element.appendChild(cardBody);
  let filmtitleP = document.createElement("div");
  let uniqueId = filmId;
  filmtitleP.innerHTML = '<div class="card" ></div>';
  filmtitleP.style.color = "Black";
  filmtitleP.style.fontWeight = "bold";
  filmtitleP.setAttribute("class", uniqueId);
  let filmTitleH = document.createTextNode(filmTitle);
  filmtitleP.appendChild(filmTitleH);
  let userMessageP = document.createElement("p");
  userMessageP.setAttribute("class", uniqueId);
  element.appendChild(filmtitleP);
}

/* {films.map((film) => (
                    <div key={film.id}>{film.title}</div>
                  ))}*/
