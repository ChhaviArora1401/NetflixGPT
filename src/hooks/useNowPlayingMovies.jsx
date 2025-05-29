import React, { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from "../utils/moviesSlice"

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingmovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
    const json = await data.json();
    // console.log(json, "json")
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(() => {
    getNowPlayingmovies();
  }, []);

  return;
}

export default useNowPlayingMovies;
 
