import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("/api/actors")
      .then((res) => res.json())
      .then((data) => setActors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Actors Page</h1>
      </header>
      <main>
        {actors.map((actor) => (
          <div key={actor.name}>
            <h2>{actor.name}</h2>
            <ul>
              {actor.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export default Actors;
