import React from "react";
import { makeStyles } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";

import Text from "../components/Text";
import { ReactComponent as SpainSvg } from "../../assets/images/spain.svg";
import { ReactComponent as UnitedStatesSvg } from "../../assets/images/united-states.svg";
import { ReactComponent as LinkedinSvg } from "../../assets/images/linkedin.svg";
import { ReactComponent as GithubSvg } from "../../assets/images/github.svg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 50,
    marginBottom: 50,
  },
  subtitle: {
    marginBottom: 20,
  },
}));

const iconSize = 30;
const githubUrl = "https://github.com/AlexisFabianCarranza?tab=repositories";
const linkedinUrl =
  "https://www.linkedin.com/in/alexis-fabian-carranza-673657178/";

const FooterInfoContainer = ({ subtitle, children }) => {
  const classes = useStyles();
  return (
    <Grid container direction={"column"} alignItems={"center"}>
      <Grid item>
        <Text className={classes.subtitle}>{subtitle}</Text>
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};

const Footer = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"center"}
      className={classes.container}
      spacing={5}
    >
      <Grid item xs={4}>
        <FooterInfoContainer subtitle={t("footer.language")}>
          <Button onClick={() => handleChangeLanguage("en")}>
            <UnitedStatesSvg height={iconSize} width={iconSize} />
          </Button>
          <Button onClick={() => handleChangeLanguage("es")}>
            <SpainSvg height={iconSize} width={iconSize} />
          </Button>
        </FooterInfoContainer>
      </Grid>
      <Grid item xs={4}>
        <FooterInfoContainer subtitle={t("footer.linkedin")}>
          <Button onClick={() => window.open(linkedinUrl, "_blank")}>
            <LinkedinSvg height={iconSize} width={iconSize} />
          </Button>
        </FooterInfoContainer>
      </Grid>
      <Grid item xs={4}>
        <FooterInfoContainer subtitle={t("footer.github")}>
          <Button onClick={() => window.open(githubUrl, "_blank")}>
            <GithubSvg height={iconSize} width={iconSize} />
          </Button>
        </FooterInfoContainer>
      </Grid>
    </Grid>
  );
};

export default Footer;
