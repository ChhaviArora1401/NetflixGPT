import React from 'react'
import { useSelector } from 'react-redux'
import VideoBg from './VideoBg'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies);
  // if (movies === null) return;
  if (!movies) return; // most followed convention


  const mainMovie = movies?.[0];

  const { id, original_title, overview, poster_path, backdrop_path } = mainMovie;
  return (
    <div className=''>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBg movieId={id} />
    </div>
  )
}

export default MainContainer