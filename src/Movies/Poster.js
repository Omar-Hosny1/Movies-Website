import React from "react";
import "./Poster.css";
function Poster(props) {
  const properties = {
    id: props.id,
    image: props.image,
    title: props.title,
    overview: props.overview,
    rating: props.rating,
    releaseDate: props.releaseDate,
    backdrop: props.backdrop,
  };

  return (
    <div
      className="poster-box"
      onClick={() => {
        props.onClickPosterHandler(properties);
      }}
    >
      <div className="poster-box__img">
        <img src={props.image} />
        <span className="poster-box__rating">{props.rating}</span>
      </div>
      <div className="poster-box__desc">
        <span>Date : {props.releaseDate}</span>
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default Poster;
