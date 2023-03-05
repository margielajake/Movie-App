import React from 'react';

function MovieCard  (props)  {
    const {title, description, posterURL, rating} = props.movie

  return(
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={posterURL} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">Rating: {rating}</p>
      </div>
  </div>
    )
}

export default MovieCard;