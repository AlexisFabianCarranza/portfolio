import React, { useState } from "react";
import { Grid, useTheme } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import validate from "validate.js";
import constrainsContactForm from "../validations/constrainsContactForm";
import TextInput from "../components/TextInput";
import customToast from "../utils/customToast";

const ContactForm = () => {
  const { t } = useTranslation();
  const [error, setError] = useState({});
  const theme = useTheme();

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      subject: e.target.subject.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };
    const invalidData = validate(formData, constrainsContactForm);

    if (invalidData) {
      return setError(invalidData);
    } else {
      setError({});
    }

    emailjs
      .sendForm(
        "service_3ebtmgh",
        "template_7p7a5jp",
        e.target,
        "user_z9TEBlA7D6cM7B15DDxQr"
      )
      .then(
        (result) => {
          customToast.success(t("contact.send.success"), theme.palette);
          e.target.reset();
        },
        (error) => {
          customToast.error(t("contact.send.fail"), theme.palette);
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <Grid container direction={"column"} spacing={5}>
        <Grid item>
          <TextInput
            label={t("contact.form.subject")}
            placeholder={t("contact.form.subject.description")}
            name={"subject"}
            error={error}
            clearError={setError}
          />
        </Grid>
        <Grid item>
          <TextInput
            label={t("contact.form.name")}
            placeholder={t("contact.form.name.description")}
            name={"name"}
            error={error}
            clearError={setError}
          />
        </Grid>
        <Grid item>
          <TextInput
            label={t("contact.form.email")}
            placeholder={t("contact.form.email.description")}
            name={"email"}
            error={error}
            clearError={setError}
          />
        </Grid>
        <Grid item>
          <TextInput
            label={t("contact.form.message")}
            placeholder={t("contact.form.message.description")}
            multiline
            minRows={4}
            name={"message"}
            error={error}
            clearError={setError}
          />
        </Grid>
        <Grid item>
          <Button variant={"contained"} type={"submit"} color={"primary"}>
            {t("contact.form.submit")}
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;
