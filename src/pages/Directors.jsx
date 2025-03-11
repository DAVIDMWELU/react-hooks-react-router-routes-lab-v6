import { useEffect, useState } from "react";
import NavBar from "./NavBar";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch("/api/directors")
      .then((res) => res.json())
      .then((data) => setDirectors(data));
  }, []);

  return (
    <>
      <header>
        <NavBar />
        <h1>Directors Page</h1>
      </header>
      <main>
        {directors.map((director) => (
          <div key={director.name}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie) => (
                <li key={movie}>{movie}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </>
  );
}

export default Directors;
