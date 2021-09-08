import { Button, Grid } from "@material-ui/core";
import React from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as DeveloperSvg } from "../../assets/images/developer.svg";
import HorizontalContainer from "../components/HorizontalContainer";
import Text from "../components/Text";

const About = () => {
  const { t } = useTranslation();
  return (
    <HorizontalContainer
      RightComponent={() => <DeveloperSvg width={"100%"} height={"100%"} />}
      LeftComponent={() => (
        <Grid container spacing={3} direction={"column"}>
          <Grid item>
            <Text type={"title"}>{t("about.title")}</Text>
          </Grid>
          <Grid item>
            <Text>{t("about.description")}</Text>
          </Grid>
          <Grid item>
            <Button color={"primary"} variant={"contained"}>
              {t("about.button.contact")}
            </Button>
          </Grid>
        </Grid>
      )}
    />
  );
};

export default About;
