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

export default function SectionLatestWork({seriesId}) {
    const classes = useStyles();
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
    // console.log(data)
    const baseImgUrl = "https://image.tmdb.org/t/p/original/";
    return (
        <div>
        { isError ? null : 
        <div className={classes.section}>
            <h2 className={classes.title}>Seasons</h2>
            <div>
            { isLoading ? <div>Loading...</div> : 
                <GridContainer className={classes.justifyCenter}>
                    {
                        data.seasons && data.seasons
                        .filter(({poster_path}) => poster_path !== null )
                        .map(({season_number, poster_path, name, id}) => {
                            return (
                                <GridItem xs={12} sm={2} className={classes.marginLeft} key={id}>
                                    <Card plain>
                                        <img 
                                            src={`${baseImgUrl}${poster_path}`} 
                                            alt={`Season ${season_number}`} 
                                            className={
                                                classes.imgRaised +
                                                " " +
                                                classes.imgRounded +
                                                " " +
                                                classes.imgFluid} 
                                            />
                                        <h4 className={classes.cardTitle}>{name}</h4>
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
