import React, { useState, useEffect } from "react";
import { Router, Route, Switch } from "react-router-dom";
// pages for this product
import HomePage from "views/HomePage/Home.js";
import ExploreMovies from "views/ExploreMoviesPage/ExploreMovies";
import ExploreSeries from "views/ExploreSeriesPage/ExploreSeries";
import LandingPage from "views/LandingPage/LandingPage.js";
import MovieProfile from "views/MovieProfilePage/MovieProfile.js";
import SeriesProfile from "views/SeriesProfilePage/SeriesProfile.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import ExploreGenreSeries from 'views/ExploreGenreSeriesPage/ExploreGenreSeries';
import ExploreGenreMovies from "views/ExploreGenreMoviesPage/ExploreGenreMovies";
import CastProfile from 'views/CastProfilePage/CastProfile';
import Header from "components/Header/Header.js";
import LeftLinks from "components/Header/LeftLinks.js";
import RightLinks from "components/Header/RightLinks";

import { auth } from 'firebase/firebase.utils';
import { createBrowserHistory } from "history";
var hist = createBrowserHistory();

export default function App() {
   
    const [user, setUser] = useState(null);
    var unsubscribeFromAuth = null;

    useEffect(() => {
        unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setUser(user);
            console.log(user)
        });

        return function cleanup() {
            unsubscribeFromAuth();
        };

    })

    console.log(user)
    
    return (
        <Router history={hist}>
            <Header
                brand="eTV"
                color="transparent"
                leftLinks={<LeftLinks />}
                rightLinks={<RightLinks currentUser={user} />}
                fixed
                changeColorOnScroll={{
                height: 200,
                color: "white"
                }}
                
            />
            <Switch>
                <Route path="/cast/:cast_id" component={CastProfile} />
                <Route path="/movies/:movie_id" component={MovieProfile} />
                <Route path="/series/:series_id" component={SeriesProfile} />
                <Route path="/explore/movies" component={ExploreMovies} />
                <Route path="/explore/series" component={ExploreSeries} />
                <Route path="/genre/series/:genre_id" component={ExploreGenreSeries} />
                <Route path="/genre/movies/:genre_id" component={ExploreGenreMovies} />
                <Route path="/login-page" component={LoginPage} />
                <Route path="/landing-page" component={LandingPage} />
                <Route exact path="/" component={HomePage} />
            </Switch>
        </Router>
    )
     
}