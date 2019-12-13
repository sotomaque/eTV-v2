import React from "react";
import { Link } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/components.js";
// sections for this page
import SectionPopularKidsSeries from './Sections/SectionPopularKidsSeries.js';

const useStyles = makeStyles(styles);

export default function ExploreSeries(props) {
  const classes = useStyles();
  const { ...rest } = props;

  var arr = [
      <SectionPopularKidsSeries />
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
        {randomize(arr)}
      </div>
      
      <Footer />
    </div>
  );
}
