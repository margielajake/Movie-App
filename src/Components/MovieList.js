import React from 'react';
import MovieCard from './MovieCard';

function MovieList(props) {
  const { movies } = props;

  return (
    <div className="flex flex-wrap">
    {movies.map(movie => (
      <MovieCard key={movie.title} movie={movie} />
    ))}
   </div>
  );
}

export default MovieList;
