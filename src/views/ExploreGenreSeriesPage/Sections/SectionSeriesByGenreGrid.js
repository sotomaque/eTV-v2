import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/movieSectionGridStyles.js";

const useStyles = makeStyles(styles);

export default function SectionSeriesByGenreGrid({ genreId, genreName }) {
  const classes = useStyles();

  const [ data, setData ] = useState({ hits: [] });
  const [ url, setUrl ] = useState(
    'https://api.themoviedb.org/3/discover/tv?api_key=c9f3c719e4cce4a021ff37d2e89d43ba&language=en-US&sort_by=popularity.desc&with_genres='+genreId,
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
  // console.log(data)

  const baseImgUrl = "https://image.tmdb.org/t/p/original/";
  
  return (
    <div className={classes.section}>
      { isError ? <div className={classes.container}>Error</div> :
        <div>
          { isLoading ? <div className={classes.container}>Loading</div> :  
      <div className={classes.container}>
        <div id="images">
          <div className={classes.title}>
            <h2>{genreName}</h2>
          </div>
          <br />
          <GridContainer>
            {
              data.results && 
              data.results
              .filter((movie, index) => index < 18)
              .map( ({original_name, poster_path, id}) => {
                return (
                <GridItem xs={12} sm={2} className={classes.marginLeft} key={id}>
                  <Link to={`/series/${id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                  <img
                    src={`${baseImgUrl}${poster_path}`}
                    alt="..."
                    className={
                      classes.imgRaised +
                      " " +
                      classes.imgRounded +
                      " " +
                      classes.imgFluid
                    }
                  />
                  <h4>{original_name}</h4>
                  </Link>
                </GridItem>
                )
              })
            }
          </GridContainer>
          <GridContainer />
        </div>
      </div>
    }</div>
      }
    
    </div>
  );
}
