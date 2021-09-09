import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import About from "../sections/About";
import Header from "../sections/Header";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Constants from "../utils/constants";
import Experiences from "../sections/Experiences";
import Skills from "../sections/Skills";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    overflow: "auto",
  },
  content: {
    width: "100%",
  },
  section: {
    marginBottom: 100,
  },
  footerSection: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction={"column"} alignItems={"center"}>
        <Grid item lg={8} md={10} sm={11} xs={11} className={classes.content}>
          <div>
            <div className={classes.section}>
              <Header />
            </div>
            <div className={classes.section} id={Constants.Sections.about}>
              <About />
            </div>
            <div
              className={classes.section}
              id={Constants.Sections.experiences}
            >
              <Experiences />
            </div>
            <div className={classes.section} id={Constants.Sections.skills}>
              <Skills />
            </div>
            <div className={classes.section} id={Constants.Sections.contact}>
              <Contact />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} className={classes.footerSection}>
          <Grid container direction={"column"} alignItems={"center"}>
            <Grid item lg={8} md={10} sm={11} xs={11} container>
              <Footer />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeScreen;
