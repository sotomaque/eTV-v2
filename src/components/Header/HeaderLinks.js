/*eslint-disable*/
import React from "react";

// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          Home
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          My Movies
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/" className={classes.navLink}>
          My Series
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Browse"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link to="/explore/movies" className={classes.dropdownLink}>
              Movies
            </Link>,
            <Link to="/explore/series" className={classes.dropdownLink}>
              Series
            </Link>
            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/landing-page" className={classes.navLink}>
          Learn More
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login-page" className={classes.navLink}>
          Login
        </Link>
      </ListItem>
      
    </List>
  );
}
