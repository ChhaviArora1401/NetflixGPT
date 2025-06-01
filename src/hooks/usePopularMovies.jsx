import React, { useEffect } from 'react'
import { API_options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from "../utils/moviesSlice"

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  }

  useEffect(() => {
    getPopularMovies();
  }, []);

  return;
}

export default usePopularMovies;
 
