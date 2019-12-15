import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import People from "@material-ui/icons/People";
import Add from "@material-ui/icons/Add";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import LeftLinks from "components/Header/LeftLinks.js";
import RightLinks from "components/Header/RightLinks";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

const useStyles = makeStyles(profilePageStyle);

export default function CastProfile(props) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const castId = props.match.params.cast_id;
  console.log('cast id: ', castId);

  const { ...rest } = props;

  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const [data, setData] = useState({ hits: [] });
  const [url, setUrl] = useState(
    'https://api.themoviedb.org/3/person/' + castId + '?api_key=c9f3c719e4cce4a021ff37d2e89d43ba&append_to_response=movie_credits',
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

  console.log('D', data)
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        brand="eTV"
        color="transparent"
        leftLinks={<LeftLinks />}
        rightLinks={<RightLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        image={require("assets/img/examples/city.jpg")}
        filter="dark"
        className={classes.parallax}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={`${baseImgUrl}${data.profile_path}`} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>{data.name}</h3>
                  <h6>Known For: {data.known_for_department}</h6>
                  <Button
                    justIcon
                    simple
                    color="dribbble"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-dribbble"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="twitter"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    simple
                    color="pinterest"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-pinterest"} />
                  </Button>
                </div>
              </div>
              <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="primary"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div>
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              {data.biography}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="primary"
              tabs={[
                {
                  tabButton: "Known For",
                  tabIcon: Palette,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Latest Work</h4>
                        <GridContainer className={classes.collections}>
                        {
                          data.movie_credits && 
                            data.movie_credits.cast
                            .filter((work, index) => index < 4)
                            .map(({poster_path, original_title, character}) => {
                              return (
                                <GridItem xs={12} sm={12} md={6}>
                                  <Card
                                    background
                                    style={{
                                      backgroundImage: "url(" + baseImgUrl + poster_path + ")"
                                    }}
                                  >
                                    <CardBody background className={classes.cardBody}>
                                      <Badge
                                        color="warning"
                                        className={classes.badge}
                                      >
                                        {character}
                                      </Badge>
                                      <a href="#pablo">
                                        <h2 className={classes.cardTitleWhite}>
                                          {original_title}
                                        </h2>
                                      </a>
                                    </CardBody>
                                  </Card>
                                </GridItem>
                              )
                          })
                        }
                        </GridContainer>
                      </GridItem>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>60</b> Products
                          </li>
                          <li>
                            <b>4</b> Collections
                          </li>
                          <li>
                            <b>331</b> Influencers
                          </li>
                          <li>
                            <b>1.2K</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>About this work</h4>
                        <p className={classes.description}>
                          French luxury footwear and fashion. The footwear has
                          incorporated shiny, red-lacquered soles that have
                          become his signature.
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Footwear</Badge>
                        <Badge color="rose">Luxury</Badge>
                      </GridItem>
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Has Worked With...",
                  tabIcon: People,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={avatar} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + avatar + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Gigi Hadid
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={marc} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + marc + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Marc Jacobs
                                  </h4>
                                  <Muted>
                                    <h6>DESIGNER</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Don{"'"}t be scared of the truth because we
                                    need to restart the human foundation in
                                    truth...
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={kendall} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + kendall + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Kendall Jenner
                                  </h4>
                                  <Muted>
                                    <h6>MODEL</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye. Don
                                    {"'"}t be scared of the truth.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={5}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="#pablo">
                                    <img src={cardProfile2Square} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + cardProfile2Square + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    George West
                                  </h4>
                                  <Muted>
                                    <h6>MODEL/DJ</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    I love you like Kanye loves Kanye.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                },
                {
                  tabButton: "Media",
                  tabIcon: Camera,
                  tabContent: (
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={mariyaGeorgieva}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={clemOnojegaw}
                          className={navImageClasses}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <img
                          alt="..."
                          src={clemOnojeghuo}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={oluEletu}
                          className={navImageClasses}
                        />
                        <img
                          alt="..."
                          src={cynthiaDelRio}
                          className={navImageClasses}
                        />
                      </GridItem>
                    </GridContainer>
                  )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Creative Tim
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/presentation?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    About us
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="//blog.creative-tim.com/" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.creative-tim.com/license?ref=mkpr-profile"
                    target="_blank"
                    className={classes.block}
                  >
                    Licenses
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.creative-tim.com?ref=mkpr-profile"
                target="_blank"
              >
                Creative Tim
              </a>{" "}
              for a better web.
            </div>
          </div>
        }
      />
    </div>
  );
}
