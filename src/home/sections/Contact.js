import { Grid } from "@material-ui/core";
import React from "react";
import Text from "../components/Text";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Slide } from "react-awesome-reveal";
import HorizontalContainer from "../components/HorizontalContainer";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <HorizontalContainer
      animation={"none"}
      RightComponent={() => (
        <Slide direction="right">
          <Grid container direction={"column"} spacing={5}>
            <Grid item>
              <TextField
                variant="filled"
                label={t("contact.form.name")}
                fullWidth
                placeholder={t("contact.form.name.description")}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="filled"
                label={t("contact.form.email")}
                fullWidth
                placeholder={t("contact.form.email.description")}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="filled"
                label={t("contact.form.message")}
                placeholder={t("contact.form.message.description")}
                fullWidth
                multiline
                minRows={4}
              />
            </Grid>
            <Grid item>
              <Button variant={"contained"} type={"submit"} color={"primary"}>
                {t("contact.form.submit")}
              </Button>
            </Grid>
          </Grid>
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
