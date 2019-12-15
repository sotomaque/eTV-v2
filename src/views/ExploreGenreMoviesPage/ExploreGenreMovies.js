import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";
// sections for this page
import SectionMoviesByGenreGrid from "./Sections/SectionMoviesByGenreGrid";
import {tv_genres} from "assets/data/genre_list.js";
import {movie_genres} from "assets/data/genre_list.js";



const useStyles = makeStyles(styles);

export default function ExploreGenreMovies(props) {
  const genreId = props.match.params.genre_id;
  const genreName = movie_genres.genres.map((genre) =>( 
    genre.id == genreId ? genre.name : null)
  )
  // TODO: search through tv_genres list, find id for this movie_genre, in that list,
  // pass that id into a component, "sectionShowsByGenreGrid",
  // also pass movie genreId to "sectionMoviesByGenreGrid",
  // have single genre view, that can load both tv shows, and movies of a specified genre

  // TODO: add custom paralax images to genre view, depending on genre
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Parallax image={require("assets/img/bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Explore Movies</h1>
                <h3 className={classes.subtitle}>
                  For the next rainy day
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionMoviesByGenreGrid genreId={genreId} genreName={genreName}/>
      </div>
      
      <Footer />
    </div>
  );
}
