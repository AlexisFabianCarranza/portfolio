import React from "react";
import { Button, Hidden, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  navigationContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant={"h4"} color={"textPrimary"}>
        My portfolio
      </Typography>
      <Hidden xsDown>
        <div className={classes.navigationContainer}>
          <Button color={"secondary"} href={"#about"}>
            Contact
          </Button>
          <Button color={"secondary"} href={"#about"}>
            Skills
          </Button>
          <Button color={"secondary"} href={"#about"}>
            Experiences
          </Button>
          <Button color={"secondary"} href={"#about"}>
            About
          </Button>
        </div>
      </Hidden>
    </div>
  );
};

export default Header;
