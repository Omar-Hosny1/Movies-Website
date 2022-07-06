import React, { useState, useEffect, useContext } from "react";
import api_properties from "../API";
import Poster from "./Poster";
import "./Movies.css";
import { FaBug } from "react-icons/fa";
import cartCtx from "../CartCtx";

function Movies(props) {
  const [enteredValue, setEnteredValue] = useState("");
  const cartCTX = useContext(cartCtx);

  let All_MOVIES_POSTERS = cartCTX.allMovies
    .filter((movie) => {
      if (enteredValue == "") return movie;
      if (movie.title.toLowerCase().includes(enteredValue)) return movie;
    })
    .map((movie) => {
      return (
        <Poster
          id={movie.id}
          key={movie.id}
          image={api_properties.IMAGE_URL + movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          rating={movie.vote_average}
          releaseDate={movie.release_date}
          backdrop={api_properties.IMAGE_URL + movie.backdrop_path}
          onClickPosterHandler={props.onClickPosterHandler}
        />
      );
    });

  const submitHandler = (event) => {
    event.preventDefault();
  };
  const changeInputHandler = (event) => {
    setEnteredValue(event.target.value);
  };
  const noMovies = (
    <div className="no-movies">
      <p>No Movies Found</p>
      <FaBug className="bug" />
    </div>
  );

  return (
    <div className="row">
      <form className="search-form" onSubmit={submitHandler}>
        <div className="input-form">
          <label>Search</label>
          <input
            placeholder="Enter Your Movie"
            className="input-search"
            onChange={changeInputHandler}
          />
        </div>
      </form>
      <div className={All_MOVIES_POSTERS.length ? "movies" : "no-movies"}>
        {All_MOVIES_POSTERS.length ? All_MOVIES_POSTERS : noMovies}
      </div>
    </div>
  );
}

export default Movies;
