import { useState, useEffect } from "react";

const App = () => {
  const [films, setFilms] = useState([]);
  const getData = async () => {
    const res = await fetch("https://ghibliapi.herokuapp.com/films/");
    const data = await res.json();
    setFilms(data);
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

        <div class="col-sm-6">
          <div class="card m-1">
            <div class="card-body">
              <h1 class="card-title jumbotron text-center bg-warning text-white">
                <div>
                  {films.map((film) => (
                    <div key={film.id}>{film.title}</div>
                  ))}
                </div>
              </h1>
              <div id="chirpy"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
