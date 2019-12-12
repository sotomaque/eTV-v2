import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Done from "@material-ui/icons/Done";
import PresentToAll from "@material-ui/icons/PresentToAll";
import People from "@material-ui/icons/People";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>About eTV</h2>
          <h5 className={classes.description}>eTV is designed for those of us who cant remember all the shows we have watched. eTV lets you create lists, helping you track what you have watch, are currently watching, and want to watch.
          Create custom lists for any occasion.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Deciding what to watch next?"
              description="You’re in the right place. Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations."
              icon={Done}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Share"
              description="Create custom lits. Create a want to watch list. Create a have watched list. Create a What to Watch when your bored with the Kids list. Share your lists and enjoy other peoples lists."
              icon={PresentToAll}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="What are your friends watching?"
              description="Chances are your friends are discussing their favorite (and least favorite) Movies / Series on eTV."
              icon={People}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
