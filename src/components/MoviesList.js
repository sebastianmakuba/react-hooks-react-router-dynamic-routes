import React from "react";
import { Link } from "react-router-dom";

export default function MoviesList ({movies}){

    const renderMovies = Object.keys(movies).map((movieID) =>     
        (
            <li key={movieID}>
             <Link to = {`/movies${movieID}`}>{movies[movieID].title}</Link>
            </li>    
        )
    )

    // const renderMovies = movies.map((movie) => 
    // <li key={movie.id} >{movie.id}
    // <Link to = {`/movies${movie.id}`} >{movie.title}</Link>
    // </li>
    // )
    return (
        <ul>{renderMovies}</ul>
    )
}