import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import sortArray from '../helpers/sortArray';

const MovieInfo = ({movieTitle}) => {
  const { movieList, characters, setCharacters } = useContext(MoviesContext);
  
  const currentMovie = movieList.filter(movie => movie.title === movieTitle);
  
  const [currentCharacters, setCurrentCharacters] = useState([]);

  const filterCharacters = () => {
    const allCharacters = characters;
    const characterURLs = currentMovie[0].characters;
    
    const current = [];

    allCharacters.forEach(char => {
      characterURLs.forEach(url => {
        if (char.url === url) {
          current.push(char);
        }
      });
    });
    
    setCurrentCharacters(current);
  }
  
  useEffect(() => {
    async function resolveChars() {
      let sorted = await sortArray(characters);
      setCharacters(sorted);
    }
    resolveChars();
    filterCharacters(characters)
  }, []);

  return (
    <>
      <hr />
      {currentCharacters.map(character => <p key={character.url}>{character.name}</p>)}
    </>
  );
}

export default MovieInfo;