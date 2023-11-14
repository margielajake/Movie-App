import React from "react";
import MovieCard from "./MovieCard";

function MovieList(props) {
  const { movies, onMovieClick } = props;

  return (
    <div className="flex flex-wrap">
      {movies.map((movie, index) => (
        <div key={index} onClick={() => onMovieClick(movie)}>
          {<MovieCard key={movie.title} movie={movie} />}
        </div>
      ))}
    </div>
  );
}

export default MovieList;
