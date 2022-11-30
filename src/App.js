import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
// import TitleContainer from './components/TitleContainer';
// import CarouselOfMovies from './components/CarouselOfMovies';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import TVShows from './components/TVShows';
import MovieDetails from './components/MovieDetails';
import SingleMovie from './components/SingleMovie';
import NotFound from './components/NotFound';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
            <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route element={<TVShows/>} path="/TVShows"/>
              <Route element={<MovieDetails/>} path="/MovieDetails"/>
              <Route element={<SingleMovie />} path="/SingleMovie"/>
              <Route element={<Home />} path="/"/>
              <Route element={<NotFound />} path="*"/>
            </Routes>
            </BrowserRouter>
    {/* <TitleContainer/>
    <CarouselOfMovies title="Home Alone"/>
    <CarouselOfMovies title="Lord of the Rings"/>
    <CarouselOfMovies title="Saw"/> */}
    </div>
  );
}

export default App;
