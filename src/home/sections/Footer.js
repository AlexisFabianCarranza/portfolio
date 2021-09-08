import React from "react";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";

import Text from "../components/Text";
import { ReactComponent as SpainSvg } from "../../assets/images/spain.svg";
import { ReactComponent as UnitedStatesSvg } from "../../assets/images/united-states.svg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    marginBottom: 50,
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Grid container className={classes.container} justifyContent={"center"}>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Text>{t("footer.language")}</Text>
        <Button onClick={() => handleChangeLanguage("en")}>
          <UnitedStatesSvg height={30} width={30} />
        </Button>
        <Button onClick={() => handleChangeLanguage("es")}>
          <SpainSvg height={30} width={30} />
        </Button>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Text>{t("footer.language")}</Text>
      </Grid>
      <Grid item lg={4} md={4} sm={12} xs={12}>
        <Text>{t("footer.language")}</Text>
      </Grid>
    </Grid>
  );
};

export default Footer;
