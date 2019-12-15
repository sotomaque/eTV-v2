/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

import { auth } from 'firebase/firebase.utils';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function LeftLinks(props) {

  const classes = useStyles();
  return (
    <List className={classes.list}>
        <ListItem className={classes.listItem}>
            <Link onClick={() => auth.signOut() } className={classes.navLink}>
                Sign Out
            </Link>
        </ListItem>
    </List>
  );
}
