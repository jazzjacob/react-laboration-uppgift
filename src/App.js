import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import Layout from './components/views/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
