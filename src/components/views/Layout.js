import { Outlet } from 'react-router-dom';
import MovieList from '../MovieList.js';

const Layout = () => {
  return (
    <>
      <MovieList />
      <Outlet />
    </>
  );
}

export default Layout;