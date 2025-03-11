import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";

function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`/api/movie/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <header>
        <NavBar />
        <h1>{movie.title}</h1>
      </header>
      <main>
        <p>Duration: {movie.time} minutes</p>
        <div>
          {movie.genres.map((genre) => (
            <span key={genre}>{genre}</span>
          ))}
        </div>
      </main>
    </>
  );
}

export default Movie;
