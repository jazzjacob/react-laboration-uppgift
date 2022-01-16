import { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import charactersData from './charactersData';

const MovieInfo = ({movieTitle}) => {
  const { movieList, setMovieList } = useContext(MoviesContext);

  console.log('movieList in MovieInfo');
  console.log(movieList);

  const currentMovie = movieList.filter(movie => movie.title === movieTitle);

  const filterCharacters = () => {
    const allCharacters = charactersData;
    const characterURLs = currentMovie[0].characters;
    console.log('allCharacters');
    console.log(allCharacters);
    console.log(characterURLs);

    const currentCharacters = characterURLs.map(url => {
      return allCharacters.find(character => character.url === url);
    });

    console.log(currentCharacters);
    return currentCharacters;
  }

  const currentCharacters = filterCharacters();

  return (
    <>
      {currentCharacters.map(character => <p>{character.name}</p>)}
    </>
  );
}

export default MovieInfo;