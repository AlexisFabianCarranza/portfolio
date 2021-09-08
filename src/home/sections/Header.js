import {
  Button,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
                  {t("header.menu.contact")}
                </Button>
              </Grid>
              <Grid item>
                <Button color={"secondary"} href={"#about"}>
                  {t("header.menu.skills")}
                </Button>
              </Grid>
              <Grid item>
                <Button color={"secondary"} href={"#about"}>
                  {t("header.menu.experiences")}
                </Button>
              </Grid>
              <Grid item>
                <Button color={"secondary"} href={"#about"}>
                  {t("header.menu.about")}
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
