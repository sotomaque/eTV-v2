import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui icons
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import Cached from "@material-ui/icons/Cached";

import Check from "@material-ui/icons/Check";
// core components
import Accordion from "components/Accordion/Accordion.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import Clearfix from "components/Clearfix/Clearfix.js";

import SectionMoviesGrid from '../Sections/SectionMoviesGrid';

import styles from "assets/jss/material-kit-pro-react/views/ecommerceSections/productsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionSearchMovies() {
  const [checked, setChecked] = React.useState([1, 9, 27]);
  const [releaseYear, setReleaseYear] = React.useState([1950, 2019]);
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: releaseYear,
        connect: true,
        range: { min: 1950, max: 2019 },
        step: 1
      }).on("update", function(values) {
        setReleaseYear([Math.round(values[0]), Math.round(values[1])]);
      });
    }

    

    return function cleanup() {};
  });
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <h2>Find what you need</h2>
        <GridContainer>
          <GridItem md={3} sm={3}>
            <Card plain>
              <CardBody className={classes.cardBodyRefine}>
                <h4 className={classes.cardTitle + " " + classes.textLeft}>
                  Filter
                  <Tooltip
                    id="tooltip-top"
                    title="Reset Filter"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      link
                      justIcon
                      size="sm"
                      className={classes.pullRight + " " + classes.refineButton}
                    >
                      <Cached />
                    </Button>
                  </Tooltip>
                  <Clearfix />
                </h4>
                <Accordion
                  active={[0, 2]}
                  activeColor="rose"
                  collapses={[
                    {
                      title: "Release Year",
                      content: (
                        <CardBody className={classes.cardBodyRefine}>
                          <span
                            className={classNames(
                              classes.pullLeft,
                              classes.priceSlider
                            )}
                          >
                            {releaseYear[0]}
                          </span>
                          <span
                            className={classNames(
                              classes.pullRight,
                              classes.priceSlider
                            )}
                          >
                            {releaseYear[1]}
                          </span>
                          <br />
                          <br />
                          <div id="sliderRegular" className="slider-rose" />
                        </CardBody>
                      )
                    },
                    {
                      title: "Genre",
                      content: (
                        <div className={classes.customExpandPanel}>
                          <div
                            className={
                              classes.checkboxAndRadio +
                              " " +
                              classes.checkboxAndRadioHorizontal
                            }
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(9)}
                                  checked={
                                    checked.indexOf(9) !== -1 ? true : false
                                  }
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="All"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(10)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Action"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(11)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Adventure"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(12)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Drama"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(13)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Romance"
                            />
                            <FormControlLabel
                              control={
                                <Checkbox
                                  tabIndex={-1}
                                  onClick={() => handleToggle(14)}
                                  checkedIcon={
                                    <Check className={classes.checkedIcon} />
                                  }
                                  icon={
                                    <Check className={classes.uncheckedIcon} />
                                  }
                                  classes={{
                                    checked: classes.checked,
                                    root: classes.checkRoot
                                  }}
                                />
                              }
                              classes={{ label: classes.label }}
                              label="Horror"
                            />
                          </div>
                        </div>
                      )
                    }
                  ]}
                />
                <Button
                onClick={() => {
                    console.log(releaseYear[0], releaseYear[1])
                }}
                >Apply Filters</Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem md={9} sm={9}>
            <GridContainer>
              <SectionMoviesGrid />
                
            </GridContainer>
          </GridItem>
        </GridContainer>
        <br />
      </div>
    </div>
  );
}
