import React from 'react';
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

import { auth } from 'firebase/firebase.utils';
import { createBrowserHistory } from "history";
var hist = createBrowserHistory();

class App extends React.Component {
    constructor() {
        super();
        console.log('its working')

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({ currentUser: user })
            console.log(user)
  
        });

        
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    

    render() {
        return (
            <Router history={hist}>
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
}

export default App;