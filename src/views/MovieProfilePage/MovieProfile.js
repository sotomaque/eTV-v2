import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

//sections
import SectionMovieCast from './Sections/MovieCastSection';

const useStyles = makeStyles(styles);

export default function MovieProfile(props) {
  const classes = useStyles();
  const movieId = props.match.params.movie_id;
  
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=c9f3c719e4cce4a021ff37d2e89d43ba',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });


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
  // console.log(data)

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
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
                  { isLoading ? <div className={classes.description}><p>Loading...</p></div> :
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
                            <h3 className={classes.title}>{data.original_title}</h3>
                            {
                              data.tagline ? <h4 className={classes.subtitle}>{data.tagline}</h4> : null
                            }
                            {
                              data.genres && data.genres
                              .filter((genre, index) => index < 1)
                              .map((genre, index) => {
                                return (
                                  <h6 key={index}><Link to={`/genre/movies/${genre.id}`}>{genre.name}</Link> | {Math.floor(data.runtime/60)} hrs {data.runtime % 60} mins | {moment(data.release_date).format("MMM Do YY")}</h6>
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
                        <p>{data.overview}</p>
                      </div>
                      
                    </div>
                  }
                  <SectionMovieCast movieId={movieId} />
                </div>
              </div>
            </div>
          </div>
      }
      <Footer />
    </div>
  );
}
