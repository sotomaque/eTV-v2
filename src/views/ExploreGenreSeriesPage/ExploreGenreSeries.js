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
import SectionSeriesByGenreGrid from "./Sections/SectionSeriesByGenreGrid";
// sections for this page


const useStyles = makeStyles(styles);

export default function ExploreGenreSeries(props) {
  const genreName = props.match.params.genre_name;
  const genreId = props.match.params.genre_id;
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Parallax image={require("assets/img/bg3.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Explore Series</h1>
                <h3 className={classes.subtitle}>
                  Find the next show to binge watch
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionSeriesByGenreGrid genreId={genreId} genreName={genreName}/>
      </div>
      
      <Footer />
    </div>
  );
}
