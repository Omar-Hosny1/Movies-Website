import React from "react";
import "./Banner.css";
import { FaArrowRight, FaPlus, FaPlay } from "react-icons/fa";
export default function Banner(props) {
  const properties = {
    id: props.id,
    image: props.image,
    title: props.title,
    rating: props.rating,
    date: props.releaseDate,
  };
  return (
    <div className="banner-container">
      <div className="banner">
        <div className="banner-contents">
          <h1>{props.title}</h1>
          <div className="res">
            <p>RESOLUTION : </p>

            <span className="res-span">480p</span>
            <span className="res-span">720p</span>
            <span className="res-span">1080p</span>
            <span className="res-span">2k</span>
            <span className="active">4k</span>
          </div>
          <p id="overview">{props.overview}</p>
          <div className="btns">
            <button
              className="play-btn"
              onClick={() => {
                window.alert("THANKS FOR WATCHING");
              }}
            >
              Play {<FaPlay className="icon-banner" />}
            </button>
            <button
              className="list-btn"
              onClick={() => {
                props.onAddToFavorite(properties);
              }}
            >
              My List {<FaPlus className="icon-banner" />}
            </button>
            <button className="back-btn" onClick={props.onCloseMovieDetails}>
              Go Back {<FaArrowRight className="icon-banner" />}
            </button>
          </div>

          <span id="data-rating">
            Date : {props.releaseDate} | | Rating : {props.rating}
          </span>
        </div>
        <img src={props.image} className="cover" />
      </div>
    </div>
  );
}
