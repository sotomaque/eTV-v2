import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ThumbUp from "@material-ui/icons/ThumbUp";
import RateReview from "@material-ui/icons/RateReview";
import Add from "@material-ui/icons/Add";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function SeriesProfile(props) {

  const classes = useStyles();
  const seriesId = props.match.params.series_id;
  
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'https://api.themoviedb.org/3/tv/' + seriesId + '?api_key=c9f3c719e4cce4a021ff37d2e89d43ba',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  const backdropUrl = baseImgUrl + data.backdrop_path;
  console.log(data)

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="eTV"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      { isError ? 
        <div>
          <Parallax small filter image={require("assets/img/landing-bg.jpg")} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div className={classes.container}>
              <div className={classes.description}><p>Error...</p></div>
            </div>
          </div>
        </div>: 
        <div>
          <Parallax small filter image={backdropUrl} />
          <div className={classNames(classes.main, classes.mainRaised)}>
            <div>
              <div className={classes.container}>
                { isLoading ? 
                  <div className={classes.description}><p>Loading...</p></div> :
                  <div>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={6}>
                        <div className={classes.profile}>
                          <div>
                            <img src={`${baseImgUrl}${data.poster_path}`} alt={data.original_title} className={
                                classes.imgRaised +
                                " " +
                                classes.imgRounded +
                                " " +
                                classes.imgFluid
                              } />
                          </div>
                          <div className={classes.name}>
                            <h3 className={classes.rating}>{data.vote_average} stars</h3>
                            <h3 className={classes.title}>{data.name}</h3>
                            {
                              data.tagline ? <h4 className={classes.subtitle}>{data.tagline}</h4> : null
                            }
                            {
                              data.genres && data.genres
                              .filter((genre, index) => index < 1)
                              .map((genre, index) => {
                                return (
                                  <h6 key={index}><Link to={`/genre/series/${genre.id}`}>{genre.name}</Link> | {data.seasons.length} Seasons</h6>
                                )
                              })
                            }
                            <Button justIcon link className={classes.margin5} href={data.homepage} target="_blank">
                              <i className={"fa fa-link"} />
                            </Button>
                          </div>
                        </div>
                      </GridItem>
                    </GridContainer>
                    <div className={classes.description}>
                      <p>
                      {data.overview}
                      </p>
                    </div>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                        <NavPills
                          alignCenter
                          color="primary"
                          tabs={[
                            {
                              tabButton: "Like",
                              tabIcon: ThumbUp
                            
                            },
                            {
                              tabButton: "Rate",
                              tabIcon: RateReview
                            },
                            {
                              tabButton: "Add to List",
                              tabIcon: Add
                            }
                          ]}
                        />
                      </GridItem>
                    </GridContainer>
                  </div>
                }</div>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}
