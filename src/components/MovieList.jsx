import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='p-6'>
      <h1 className='text-4xl py-6 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex gap-4'>
          {movies?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />
          })}
        </div>
      </div>
    </div>
  )
}

export default MovieList