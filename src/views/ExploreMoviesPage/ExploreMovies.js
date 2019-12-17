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
import SectionMoviesInTheaters from "./Sections/SectionMoviesInTheaters.js";
import SectionPopularRatedRMovies from "./Sections/SectionPopularRatedRMovies.js";
import SectionPopularKidsMovies from "./Sections/SectionPopularKidsMovies.js";
import SectionPopularDramasOfThisYear from "./Sections/SectionPopularDramasOfThisYear.js";

const useStyles = makeStyles(styles);

export default function ExploreMovies(props) {
  const classes = useStyles();
  const { ...rest } = props;

  // var arr = [<SectionMoviesInTheaters />,
  //   <SectionPopularRatedRMovies />,
  //   <SectionPopularKidsMovies />,
  //   <SectionPopularDramasOfThisYear />
  // ];

  function randomize(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  return (
    <div>
      <Parallax image={require("assets/img/bg7.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Explore Movies</h1>
                <h3 className={classes.subtitle}>
                  Keep track of your favorite Movies
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionMoviesInTheaters />
        <SectionPopularRatedRMovies />
        <SectionPopularKidsMovies />
        <SectionPopularDramasOfThisYear />
        {/* {randomize(arr)} */}
      </div>
      
      <Footer />
    </div>
  );
}
