//v1 pulls back api film info
//v2 card created and test text appears but only one car created
//v3 card formats correctly for each button click
//v4 title populating corectly one click of a button
//v5 original title working too.
//v6 description added.
//v7 people added
//v8 imgaes load on people button
//v9 imgae load on film
import { useState, useEffect } from "react";
let i = 0;
let ii = 0;
const App = () => {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const getData = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films/");
    const data = await response.json();
    console.log(data); //pulls back api data

    setFilms(data);
    let newFilm = films.map((film) => <div key={film.id}>{film.title}</div>);

    let filmTitle = data[i].title;
    let filmOriginalTitle = data[i].original_title;
    let filmId = data[i].id;
    let filmDescription = data[i].description;
    let filmImage = data[i].image;
    seedFilms(filmTitle, filmOriginalTitle, filmId, filmDescription, filmImage);
    i++;
  };

  const getPeople = async () => {
    const response = await fetch("https://ghibliapi.herokuapp.com/films/");
    const data = await response.json();
    console.log(data); //pulls back api data

    setPeople(data);

    let filmTitle = data[ii].title;
    let filmProducer = data[ii].producer;
    let filmDirector = data[ii].director;
    let filmDescription = data[ii].description;
    let filmImage = data[ii].image;
    seedPeople(
      filmTitle,
      filmProducer,
      filmDirector,
      filmDescription,
      filmImage
    );
    ii++;
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

            <button
              onClick={() => getPeople()}
              class="btn btn-secondary btn-lg ml-4"
            >
              Press for People
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card-body">
              <div id="filmdetails"></div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card-body">
              <div id="filmspeople"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

function seedFilms(
  filmTitle,
  filmOriginalTitle,
  filmId,
  filmDescription,
  filmImage
) {
  let element = document.getElementById("filmdetails");

  let cardTitle = document.createElement("div");
  //cardTitle.innerHTML = '<div class="card m-1"></div>';
  element.appendChild(cardTitle);
  let cardBody = document.createElement("div");
  // cardBody.innerHTML = '<div class="card-body">';
  let cardBodyText = document.createElement("div");
  /*cardBodyText.innerHTML =
    '<h1 class="card-title jumbotron text-center bg-warning text-white"><div>Title</div></h1></div>'; */
  let origTitleText = filmOriginalTitle;
  let description = filmDescription;
  let image = filmImage;
  console.log(filmImage);
  /*cardBodyText.innerHTML =
    '<h1 class="card-title jumbotron text-center bg-warning text-white"><div>' +
    origTitleText +
    "</div></h1></div>"; */

  cardBodyText.innerHTML =
    '<img class="card-img-top" src="' +
    image +
    '" alt="Card image" style="width:100%">' +
    origTitleText +
    "</img>";

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
  let filmDescriptionP = document.createElement("p");
  let filmDescriptionTxt = document.createTextNode(description);
  filmDescriptionP.appendChild(filmDescriptionTxt);
  element.appendChild(filmDescriptionP);
}

function seedPeople(
  filmTitle,
  filmProducer,
  filmDirector,
  filmDescription,
  filmImage
) {
  let element = document.getElementById("filmspeople");

  let cardTitle = document.createElement("div");
  element.appendChild(cardTitle);
  let cardBody = document.createElement("div");
  let cardBodyText = document.createElement("div");
  let filmTitleText = filmTitle;
  let description = filmDescription;
  let image = filmImage;

  /*cardBodyText.innerHTML =
    '<h1 class="card-title jumbotron text-center bg-warning text-white"><div>' +
    filmTitleText +
    "</div></h1></div>"; */
  /*cardBodyText.innerHTML =
    '<img class="card-img-top" src="https://www.tutorialspoint.com/avro/images/apache-avro-mini-logo.jpg" alt="Card image" style="width:100%"></img>'; */
  cardBodyText.innerHTML =
    '<img class="card-img-top" src="' +
    image +
    '" alt="Card image" style="width:100%"></img>';

  /*
    let imgElement = document.createElement("img");
    imgElement.src = pic
    divLocation.append(imgElement); */

  cardBody.appendChild(cardBodyText);
  element.appendChild(cardBody);

  let filmtitleP = document.createElement("div");
  filmtitleP.innerHTML = '<div class="card" ></div>';
  filmtitleP.style.color = "Black";
  filmtitleP.style.fontWeight = "bold";
  //filmtitleP.setAttribute("class", uniqueId);
  let filmTitleH = document.createTextNode("Producer " + filmProducer);
  filmtitleP.appendChild(filmTitleH);
  element.appendChild(filmtitleP);
  let filmDescriptionP = document.createElement("p");
  let filmDescriptionTxt = document.createTextNode("Director " + filmDirector);
  filmDescriptionP.appendChild(filmDescriptionTxt);
  element.appendChild(filmDescriptionP);
}

//https://image.tmdb.org/t/p/w533_and_h300_bestv2/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg

/*

<div class="card img-fluid" style="width:500px">
    <img class="card-img-top" src="https://www.tutorialspoint.com/avro/images/apache-avro-mini-logo.jpg" alt="Card image" style="width:100%">
    <div class="card-img-overlay">
      <h4 class="card-title">Avro</h4>
      <p class="card-text">Tutorial for Apache Avro</p>
*/
