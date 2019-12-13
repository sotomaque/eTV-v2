import React, { useState, useEffect } from "react";
import axios from 'axios';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


const useStyles = makeStyles(styles);

export default function SectionSeriesCast({seriesId}) {
    const classes = useStyles();
    const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
    );
    const [data, setData] = useState({ hits: [] });
    const [url, setUrl] = useState(
    'http://api.themoviedb.org/3/tv/'+ seriesId + '/credits?api_key=c9f3c719e4cce4a021ff37d2e89d43ba',
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
    console.log(data)
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";
    return (
        <div>
        { isError ? null : 
        <div className={classes.section}>
            <h2 className={classes.title}>Cast</h2>
            <div>
            { isLoading ? <div>Loading...</div> : 
                <GridContainer className={classes.justifyCenter}>
                    {
                        data.cast && data.cast
                        .filter((actor, index) => index < 6)
                        .map(({profile_path, name, character}) => {
                            return (
                                <GridItem xs={12} sm={12} md={4} >
                                <Card plain>
                                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                                    <img src={`${baseImgUrl}${profile_path}`} alt="..." className={imageClasses} />
                                </GridItem>
                                <h4 className={classes.cardTitle}>
                                    {name}
                                    <br />
                                    <small className={classes.smallTitle}>{character}</small>
                                </h4>
                                </Card>
                            </GridItem>
                            )
                        })
                    }
                </GridContainer>
            }
            </div>
        </div>

        }</div>
    );
}
