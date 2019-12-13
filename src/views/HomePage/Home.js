import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionMoviesGrid from './Sections/SectionMoviesGrid';
import SectionSeriesGrid from './Sections/SectionSeriesGrid';
import SectionTrendingNowMovies from "./Sections/SectionTrendingNowMovies";
import SectionTrendingNowSeries from "./Sections/SectionTrendingNowSeries";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  var arr = [<SectionTrendingNowMovies />,
    <SectionTrendingNowSeries />,
    <SectionMoviesGrid />,
    <SectionSeriesGrid />
  ];
  function randomize(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <Header
        brand="eTV"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>eTV</h1>
                <h3 className={classes.subtitle}>
                  Find the next show to binge.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {randomize(arr)}
      </div>
      <Footer />
    </div>
  );
}
