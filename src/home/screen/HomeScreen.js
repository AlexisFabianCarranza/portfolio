import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    height: "100vh",
  },
}));

const HomeScreen = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomeScreen;
