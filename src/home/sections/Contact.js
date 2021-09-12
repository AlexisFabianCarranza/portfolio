import { Grid } from "@material-ui/core";
import React from "react";
import Text from "../components/Text";
import { Slide } from "react-awesome-reveal";
import HorizontalContainer from "../components/HorizontalContainer";
import { useTranslation } from "react-i18next";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <HorizontalContainer
      id={"contact"}
      animation={"none"}
      RightComponent={() => (
        <Slide direction="right">
          <ContactForm />
        </Slide>
      )}
      LeftComponent={() => (
        <Slide direction="left">
          <Grid container spacing={3} direction={"column"}>
            <Grid item>
              <Text type="title">{t("contact.title")}</Text>
            </Grid>
            <Grid item>
              <Text>{t("contact.description")}</Text>
            </Grid>
          </Grid>
        </Slide>
      )}
    />
  );
};

export default Contact;
