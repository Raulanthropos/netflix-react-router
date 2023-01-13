import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieData, setMovieData] = useState({});
  const { movieID } = useParams();

  const fetchData = async (movieId) => {
    try {
      let response = await fetch(
        `http://www.omdbapi.com/?apikey=be0e715&i=tt0241527`
      );

      if (response.ok) {
        let data = await response.json();
        setMovieData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(movieID);
  }, [movieID]);

  return<div><h4 className="text-white">{movieData.Title}</h4><img src={movieData.Poster} alt={movieData.Title}/><p className="text-white">{movieData.Plot}</p></div>;
};

export default MovieDetails;