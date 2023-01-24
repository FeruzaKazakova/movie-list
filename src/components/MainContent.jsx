import React from 'react'
import { MoviesList } from './MovieList'

export const MainContent = ({movies, deleteMovie}) => {
  return (
    <>
    {movies.map((elem) => (
      <MoviesList key={elem.id} {...elem} deleteMovie={deleteMovie}/>
    ))}
    </>
  )
}
