import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard  (props)  {
    const {title, description, posterURL, rating} = props.movie

  return(
    <Link to={`/movies/${title}`}>
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={posterURL} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">Rating: {rating}</p>
      </div>
  </div>
  </Link>
    )
}

export default MovieCard;