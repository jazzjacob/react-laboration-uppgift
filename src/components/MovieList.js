import { useState, useEffect, useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { Link, useNavigate } from 'react-router-dom';
import StarWarsData from './StarWarsData';
import charactersData from './charactersData';

import MovieInfo from './MovieInfo';

const MovieList = () => {
  const loadingMessage = 'Loading...';

  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const { movieList, setMovieList } = useContext(MoviesContext);
  //const { characters, setCharacters } = useContext(MoviesContext);
  const [charactersLoading, setCharactersLoading] = useState('Loading characters...');
  

  const getMovies = async () => {

    /*const url = 'https://swapi.dev/api/films';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const movies = data.results;*/
    const movies = StarWarsData;
    const moviesWithAddedInfo = movies.map(movie => {
      movie.showMovieInfo = false;
      return movie;
    })
    setMovieList(movies);
    console.log('movies:');
    console.log(movies);
    console.log('moviesWithAddedInfo:');
    console.log(moviesWithAddedInfo);
  }

  const getCharacters = async () => {

    /*
    const nextPageExists = false;
    let url = 'https://swapi.dev/api/people';

    do {
      const response = await fetch(url);
      const data = await response.json();
      console.log(...data.results);
      const newCharacters = [...characters];
      newCharacters.push(data.results);


      url = data.next;
    } while (url) 
    setCharactersLoading('Characters downloaded!');*/


  }


  const handleClick = (e) => {
    console.log(e); 
    setShowMovieInfo(!showMovieInfo);
    setMovieList(movieList.map(movie => {
      if (movie.title === e.target.innerHTML) {
        movie.showMovieInfo = !movie.showMovieInfo;
        
      }
      return movie;
    }));
  }


  useEffect(() => {
    getMovies();
    getCharacters();
  }, []);


  return (
    <>
      <h1>Star Wars</h1>
      {/*<p>{charactersLoading}</p>*/}
      <p>Click titles to see characters</p>
      <hr />
      <div>
        {
          movieList.length <= 0 ? <p>Loading...</p> : (
            movieList.map((movie, index) => {
              return (
                <div key={index}>
                  <h3 onClick={handleClick}>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  {movie.showMovieInfo && <MovieInfo movieTitle={movie.title} />}
                  <hr />
                </div>
              );
            })
          )
        }
        {/*
          movieList ? (
            movieList.map((movie, index) => <h3 key={index}>{movie.title ? movie.title : 'Loading...'}</h3>
          ) : (
            <p>Loadingzzz</p>
          )
          */}
      </div>
    </>
  );
}




export default MovieList;


