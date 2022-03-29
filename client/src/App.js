import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList/MovieList';
import MovieListHeading from './Components/MovieListHeading/MovieListHeading';
import SearchBox from './Components/SearchBox/SearchBox';

import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async searchValue => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=6a625863`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div >
      <div >
        <MovieListHeading heading={searchValue} />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div >
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
