import { createContext, useState } from 'react';

export const MoviesContext = createContext();

const MoviesProvider = ({children}) => {

  const [movieList, setMovieList] = useState([]);
  const [characters, setCharacters] = useState([]);

  return (
    <>
      <MoviesContext.Provider value={{ movieList, setMovieList, characters, setCharacters }}>
        {children}
      </MoviesContext.Provider>
    </>
  );
}

export default MoviesProvider;