import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import ExploreMovies from "views/ExploreMoviesPage/ExploreMovies";
import LandingPage from "views/LandingPage/LandingPage.js";
import MovieProfile from "views/MovieProfilePage/MovieProfile.js";
import SeriesProfile from "views/SeriesProfilePage/SeriesProfile.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/movies/:movie_id" component={MovieProfile} />
      <Route path="/series/:series_id" component={SeriesProfile} />
      <Route path="/explore/movies" component={ExploreMovies} />

      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
