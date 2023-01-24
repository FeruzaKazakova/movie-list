// import './App.css';
import './App.css';
import {Header} from './components/Header';
import { MainContent } from './components/MainContent';
import { useState } from 'react';

function App() {
  const [movies,setMovies] = useState([
    {   
    id: 1,   
    title: "Avatar 1",   
    rating: 4,
    img: "https://image.cnbcfm.com/api/v1/image/105897632-1557241558937avatar-e1541360922907.jpg?v=1664130328&w=1920&h=1080",
   }])
   const addNewMovieItem = (data) => {
    const upItems = [...movies];
    upItems.push(data);
    setMovies(upItems)
   };
   const deleteMovie = (id) => {
    let newMovie = [...movies].filter((item) => item.id !== id)
    setMovies(newMovie)
   }

  return (
    <>
      <Header onSaveMovieItem = {addNewMovieItem}/>
      <MainContent movies={movies} deleteMovie={deleteMovie}/>
    </>
  );
}

export default App;
