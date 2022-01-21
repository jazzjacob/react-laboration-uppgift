import { useState, useEffect, useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import MovieInfo from './MovieInfo';
import FetchService from '../hooks/FetchService';

const MovieList = () => {

  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const { movieList, setMovieList } = useContext(MoviesContext);
  const { characters, setCharacters } = useContext(MoviesContext);
  const [charactersLoading, setCharactersLoading] = useState(true);

  const url = 'https://swapi.dev/api/films';
 
  const getCharacters = async () => {
    let url = 'https://swapi.dev/api/people';
    let newCharacters = [];

    do {
      const response = await fetch(url);
      const data = await response.json();
      newCharacters.push(...data.results);
      setCharacters([...characters, newCharacters]);

      url = data.next;
      if (!url) {
        setCharactersLoading(false);
      }
    } while (url) 
    setCharacters(newCharacters);
  }


  const handleClick = (movie) => {
    setShowMovieInfo(!showMovieInfo);
    setMovieList(movieList.map(film => {
      if (film.title === movie.title) {
        film.showMovieInfo = !film.showMovieInfo;
      }
      return film;
    }));
  }


  useEffect(() => {
    getCharacters();
    FetchService({url: url}).then(data => setMovieList(data.results.map(movie => {
      movie.showMovieInfo = false;
      return movie;
    })));
  }, []);
  
  
  const titleBoxStyle = {
    backgroundColor: 'lightgray',
    padding: '1px 12px',
    marginBottom: '18px',
    cursor: 'pointer',
  }

  return (
    <>
      <h1>Star Wars</h1>
      <p>Click movie to view characters</p>
      <hr />
      <div>
        {
          charactersLoading ? <p>Loading...</p> : (
            movieList.map((movie, index) => {
              return (
                <div
                  style={titleBoxStyle}
                  key={index}
                  onClick={() => handleClick(movie)}
                >
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  {movie.showMovieInfo && <MovieInfo movieTitle={movie.title} />}
                </div>
              );
            })
          )
          }
      </div>
    </>
  );
}

export default MovieList;


