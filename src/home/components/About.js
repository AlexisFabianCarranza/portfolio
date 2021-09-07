import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import codingImg from "../../assets/images/coding.jpg";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  infoContainer: {
    padding: 100,
    flex: 1,
  },
  codingImg: {
    height: 800,
    width: 600,
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.infoContainer}>
        <Typography color={"textPrimary"} variant={"h5"}>
          Hi, I´m Alexis. <br /> I am Software Engineer and I love technology
        </Typography>
        <Button color={"primary"} variant={"contained"}>
          Contact with me
        </Button>
      </div>
      <img src={codingImg} alt="coding" className={classes.codingImg} />
    </div>
  );
};

export default About;
