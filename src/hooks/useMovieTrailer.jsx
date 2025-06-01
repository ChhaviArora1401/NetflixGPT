import React, { useEffect } from 'react'
import { API_options } from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // fethc trailer video && updating the store with trailer video data
  // const [trailerId, setTrailerId] = useState(null);

  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_options);
    const json = await data.json();

    const filterdata = json.results.filter(video => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    // setTrailerId(trailer.key);
    dispatch(addTrailerVideo(trailer));

  }

  useEffect(() => {
    getMovieTrailer();
  }, []) 
}

export default useMovieTrailer