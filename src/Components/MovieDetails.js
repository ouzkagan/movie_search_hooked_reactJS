import React, { useState, useEffect } from 'react';
import "../App.css";

const MovieDetails = ({match}) => {
  const [movie, setMovie] = useState([]);
  
  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${match.params.id}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        setMovie(jsonResponse);
      });
  }, []);
  return (
  
    <div class="movie-details">
      {console.log(movie)}
      <h3>Movie Page: {match.params.name}</h3>
      <h2>{movie.Title}</h2>
        <div>
            <img 
            width="200"
            src={movie.Poster} 
            alt={`The movie titled: ${movie.Title}`}
            />
            <div>
              <div><b>Actors:</b> {movie.Actors}</div>
              <div><b>Country:</b> {movie.Country}</div>
              <div><b>Genre:</b> {movie.Genre}</div>
              <div><b>Box Office:</b> {movie.BoxOffice}</div>
            </div>
            <p>({movie.Year})</p>
        </div>
    </div>
  )}


export default MovieDetails;