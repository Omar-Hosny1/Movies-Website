import React, { useState, useEffect } from "react";
import api_properties from "./API";
import Movies from "./Movies/Movies";
import Banner from "./Banner/Banner";
import Home from "./Home/Home";
import Nav from "./Home/Navbar";
import cartCtx from "./CartCtx";
import "./App.css";
function App() {
  const [bannerDetails, setBannerDettails] = useState({});
  const [showMovieDetails, setShowMovieDetails] = useState(false);
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api_properties.API_URL);
      const fullData = await response.json();
      const moviesData = await fullData.results;
      setMovies(moviesData);
    };
    fetchData();
  }, []);

  const posterClickHandler = (properties) => {
    setShowCart(false);
    setBannerDettails(properties);
    setShowMovieDetails(true);
  };

  const closeMovieDetailsHandler = () => {
    setShowMovieDetails(false);
    setShowCart(false);
    setTimeout(() => {
      window.scrollTo(0, window.scrollY + 760);
    }, 300);
  };

  const addToFavoriteHandler = (properties) => {
    const id = properties.id;
    let isHere = false;
    favoriteMovies.map((movie) => {
      if (movie.id == id) {
        window.alert("Movie Already Exist");
        isHere = true;
      }
    });
    if (isHere) return;
    setFavoriteMovies((prev) => {
      return [...prev, properties];
    });
    console.log(favoriteMovies);
  };

  const deleteFromCartHandler = (properties) => {
    setFavoriteMovies((prev) => {
      return prev.filter((movie) => {
        return movie.id !== properties.id;
      });
    });
  };

  const showCartHandler = () => {
    setShowCart(true);
    if (showCart) setShowCart(false);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };
  const showCartHandlerNav = () => {
    setShowCart((prev) => !prev);
  };

  return (
    <div className="App">
      <cartCtx.Provider
        value={{
          showCart: showCart,
          fav: favoriteMovies,
          allMovies: movies,
        }}
      >
        {showMovieDetails && (
          <React.Fragment>
            <Nav
              onDeleteFromCart={deleteFromCartHandler}
              showCart={showCartHandler}
              onCloseCart={closeCartHandler}
              showCartHandlerNav={showCartHandlerNav}
            />
            <Banner
              id={bannerDetails.id}
              image={bannerDetails.backdrop}
              title={bannerDetails.title}
              overview={bannerDetails.overview}
              rating={bannerDetails.rating}
              releaseDate={bannerDetails.releaseDate}
              onCloseMovieDetails={closeMovieDetailsHandler}
              onAddToFavorite={addToFavoriteHandler}
            />
          </React.Fragment>
        )}

        {!showMovieDetails && (
          <React.Fragment>
            <Home
              onDeleteFromCart={deleteFromCartHandler}
              showCart={showCartHandler}
              onCloseCart={closeCartHandler}
              showCartHandlerNav={showCartHandlerNav}
            />
            <Movies onClickPosterHandler={posterClickHandler} />
          </React.Fragment>
        )}
      </cartCtx.Provider>
    </div>
  );
}
export default App;

// {
//   "adult": false,
//   "backdrop_path": "/5tmjv1moohN65IuHAbYjKw3cw7I.jpg",
//   "genre_ids": [
//       878,
//       53
//   ],
//   "id": 615469,
//   "original_language": "en",
//   "original_title": "Spiderhead",
//   "overview": "A prisoner in a state-of-the-art penitentiary begins to question the purpose of the emotion-controlling drugs he's testing for a pharmaceutical genius.",
//   "popularity": 2136.264,
//   "poster_path": "/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg",
//   "release_date": "2022-06-15",
//   "title": "Spiderhead",
//   "video": false,
//   "vote_average": 5.6,
//   "vote_count": 393
// }

/*
https://image.tmdb.org/t/p/w500/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg
Spiderhead
A prisoner in a state-of-the-art penitentiary begins to q
*/
