import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  buttonsContainer: {
    flex: 1,
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid container>
        <Grid item>
          <Typography variant={"h4"} color={"textPrimary"}>
            My portfolio
          </Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item className={classes.buttonsContainer}>
            <Grid container direction={"row-reverse"} spacing={4}>
              <Grid item>
                <Button color={"primary"} variant={"contained"} href={"#about"}>
                  Contact
                </Button>
              </Grid>
              <Grid item>
                <Button color={"secondary"} href={"#about"}>
                  Skills
                </Button>
              </Grid>
              <Grid item>
                <Button color={"secondary"} href={"#about"}>
                  Experiences
                </Button>
              </Grid>
              <Grid item>
                <Button color={"secondary"} href={"#about"}>
                  About
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Header;
