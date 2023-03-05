import React, { useState, useEffect } from 'react';
import EffectHook from './Components/effectHook';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';

function App() {
    const [movies, setMovies] = useState([
        {
          title: 'The Shawshank Redemption',
          description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
          posterURL: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
          rating: 5,
        },
        {
          title: 'Fight Club',
          description: 'A depressed man (Edward Norton) suffering from insomnia meets a strange soap salesman named Tyler Durden (Brad Pitt) and soon finds himself living in his squalid house after his perfect apartment is destroyed.',
          posterURL: 'https://akns-images.eonline.com/eol_images/Entire_Site/2019914/rs_685x1024-191014113838-634-fight-club-poster.cl.101419.jpg?fit=around%7C685:1024&output-quality=90&crop=685:1024;center,top',
          rating: 4,
        },
        {
          title: 'Family Guy',
          description: 'In a wacky Rhode Island town, a dysfunctional family strives to cope with everyday life as they are thrown from one crazy scenario to another.',
          posterURL: 'https://resizing.flixster.com/O2tYOobXUbieLvqowOtAaiZiT7c=/206x305/v2/https://flxt.tmsimg.com/assets/p9258427_b_v13_aa.jpg',
          rating: 4,
        },
      ]);
      const [newMovie, setNewMovie] = useState({
        title: '',
        description: '',
        posterURL: '',
        rating: '',
      });

      const [filterTitle, setFilterTitle] = useState('');
      const [filterRate, setFilterRate] = useState('');
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setNewMovie(prevState => ({
          ...prevState,
          [name]: value,
        }));
      };
    
      const handleAddMovie = event => {
        event.preventDefault();
        setMovies(prevState => [...prevState, newMovie]);
        setNewMovie({
          title: '',
          description: '',
          posterURL: '',
          rating: '',
        });
      };
    
      const handleTitleChange = event => {
        setFilterTitle(event.target.value);
      };
    
      const handleRateChange = event => {
        setFilterRate(event.target.value);
      };
    
      const filteredMovies = movies.filter(movie => {
        return (
          movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
          (filterRate === '' || movie.rating >= filterRate)
        );
      });
    
      return (
        <div>
          <form onSubmit={handleAddMovie}>
            <input className ='bg-red-200' type="text" placeholder="Title" name="title" value={newMovie.title} onChange={handleInputChange} />
            <input type="text" placeholder="Description" name="description" value={newMovie.description} onChange={handleInputChange} />
            <input className ='bg-red-200' type="text" placeholder="Poster URL" name="posterURL" value={newMovie.posterURL} onChange={handleInputChange} />
            <input type="number" placeholder="Rating" name="rating" value={newMovie.rating} onChange={handleInputChange} />
            <button type="submit">Add Movie</button>
          </form>
          <Filter title={filterTitle} rate={filterRate} onTitleChange={handleTitleChange} onRateChange={handleRateChange} />
          <MovieList movies={filteredMovies} />
        </div>
      );
    }

export default App;