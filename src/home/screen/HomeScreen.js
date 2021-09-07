import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import About from "../sections/About";
import Header from "../sections/Header";
import Contact from "../sections/Contact";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
    overflow: "auto",
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container direction={"column"} alignItems={"center"}>
        <Grid item lg={8} md={10} sm={11} xs={11}>
          <Grid container direction="column" spacing={10}>
            <Grid item className={classes.section}>
              <Header />
            </Grid>
            <Grid item>
              <About />
            </Grid>
            <Grid item>
              <About />
            </Grid>
            <Grid item>
              <About />
            </Grid>
            <Grid item>
              <Contact />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeScreen;
