// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

const MovieDetails = () => {
    
// const [movie, setMovie] = useState(undefined)
// const params = useParams()
//   console.log('PARAMS', params)
//   console.log('The movie plot is', params.Plot)

//  useEffect(() => {
//     const fetchTheMovie = async () => {
//     const response = await fetch(`http://www.omdbapi.com/?apikey=be0e715&i=tt0241527`)
//     const data = await response.json();
//     let detailsToShow = data.find((m) => m.Plot.toString() === params.Plot)
//     setMovie(detailsToShow);
// }}, [])

    return (
        <>
        <h1>Movie details!</h1>
        </>
    )
}

export default MovieDetails;