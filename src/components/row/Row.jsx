import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Row.scss";

function Row({ title, fetchUrl, isLargeRow, wrap }) {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetch() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetch();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className={`row_posters ${wrap === true && "wrap"}`}>
        {movies?.map(
          (movie) =>
            //Only render if the artwork exists
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                key={movie.id}
              >
                <img
                  src={`${baseUrl}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.title}
                />
                <p className="movie_title">{movie.title}</p>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
