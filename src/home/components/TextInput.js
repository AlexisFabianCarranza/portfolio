import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Text from "./Text";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/core";

const TextInput = ({
  error,
  name,
  label,
  placeholder,
  clearError,
  ...props
}) => {
  const theme = useTheme();
  const errorColor = theme.palette.error.main;
  const { t } = useTranslation();
  const onFocus = () => {
    const newError = { ...error };
    delete newError[name];
    clearError(newError);
  };
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <TextField
          variant="filled"
          fullWidth
          name={name}
          label={label}
          placeholder={placeholder}
          error={error[name]}
          onFocus={onFocus}
          {...props}
        />
      </Grid>
      <Grid item>
        <Text color={errorColor}>{error[name] ? t(error[name][0]) : ""}</Text>
      </Grid>
    </Grid>
  );
};

export default TextInput;
