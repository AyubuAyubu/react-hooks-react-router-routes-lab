import React, { useState } from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((everyMovie) => 
      (
        <div key={everyMovie.title}>
          <h2>{everyMovie.title}</h2>
          <p> Runtime : {everyMovie.time}</p>
          <ul>
            {everyMovie.genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Movies;
