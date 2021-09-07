import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Fade } from "react-awesome-reveal";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    marginBottom: 50,
  },
  infoContainer: {
    paddingRight: 50,
  },
  codingImg: {
    height: 800,
    width: 600,
  },
}));

const HorizontalContainer = ({
  RightComponent,
  LeftComponent,
  direction = "left",
  animation = "fade",
}) => {
  const classes = useStyles();
  let Animation;
  switch (animation) {
    case "none":
      Animation = ({ children }) => <div>{children}</div>;
      break;
    default:
      Animation = Fade;
  }
  return (
    <Animation direction={direction}>
      <div>
        <Grid
          container
          direction="row"
          alignItems="center"
          className={classes.container}
          spacing={5}
        >
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <LeftComponent />
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <RightComponent />
          </Grid>
        </Grid>
      </div>
    </Animation>
  );
};

export default HorizontalContainer;
