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
    const response2 = await fetch("https://ghibliapi.herokuapp.com/films/");
    const response = await fetch("https://ghibliapi.herokuapp.com/people/");
    const data2 = await response.json();
    const data = await response2.json();
    // console.log(data2); //pulls back api data

    setPeople(data);

    let filmTitle = data2[ii].title;
    let actorName = data2[ii].name;
    let actorAge = data2[ii].age;
    let actorGender = data2[ii].gender;
    let filmProducer = data2[ii].producer;
    let filmDirector = data2[ii].director;
    let filmDescription = data2[ii].description;
    let filmImage = data[ii].image;
    let actorUrl = data[ii].url;
    seedPeople(
      actorName,
      actorAge,
      actorGender,
      actorUrl,
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
              Press for Films
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
  element.appendChild(cardTitle);
  let cardBody = document.createElement("div");
  let cardBodyText = document.createElement("div");
  let origTitleText = filmOriginalTitle;
  let description = filmDescription;
  let image = filmImage;
  //console.log(filmImage);

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
  actorName,
  actorAge,
  actorGender,
  actorUrl,
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
  let image = filmImage;

  cardBodyText.innerHTML =
    '<img class="card-img-top" src="' +
    image +
    '" alt="Card image" style="width:100%"></img>';

  cardBody.appendChild(cardBodyText);
  element.appendChild(cardBody);

  let filmtitleP = document.createElement("div");
  filmtitleP.innerHTML = '<div class="card" ></div>';
  filmtitleP.style.color = "Black";
  filmtitleP.style.fontWeight = "bold";
  //filmtitleP.setAttribute("class", uniqueId);
  let filmTitleH = document.createTextNode("Actor " + actorName);
  filmtitleP.appendChild(filmTitleH);
  element.appendChild(filmtitleP);
  let filmDescriptionP = document.createElement("p");
  let filmDescriptionTxt = document.createTextNode(
    "Age " + actorAge + " Gender " + actorGender
  );
  filmDescriptionP.appendChild(filmDescriptionTxt);
  element.appendChild(filmDescriptionP);

  let actorUrlP = document.createElement("a");
  actorUrlP.innerHTML =
    '<a href="' + actorUrl + '" target="_blank">Actor info page</a>';

  //let actorUrlTxt = document.createTextNode(actorUrl);
  //actorUrlP.appendChild(actorUrlTxt);
  element.appendChild(actorUrlP);
}

//'<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools!</a>'';
