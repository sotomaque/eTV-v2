import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import LeftLinks from "components/Header/LeftLinks.js";
import RightLinks from "components/Header/RightLinks";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";
import SectionSeriesByGenreGrid from "./Sections/SectionSeriesByGenreGrid";
// sections for this page


const useStyles = makeStyles(styles);

export default function ExploreGenreSeries(props) {
  const genreId = props.match.params.genre_id;
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="eTV"
        color="transparent"
        leftLinks={<LeftLinks />}
        rightLinks={<RightLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />

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
        <SectionSeriesByGenreGrid genreId={genreId}/>
      </div>
      
      <Footer />
    </div>
  );
}
