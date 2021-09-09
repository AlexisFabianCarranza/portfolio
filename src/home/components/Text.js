import { Typography, useTheme } from "@material-ui/core";
import React from "react";

const Text = ({ children, type, className }) => {
  const theme = useTheme();
  let props = {
    style: {
      whiteSpace: "pre-line",
    },
  };
  switch (type) {
    case "title":
      props = {
        variant: "h4",
        style: {
          ...props.style,
          color: theme.palette.text.primary,
          fontWeight: "bold",
        },
      };
      break;
    case "subtitle":
      props = {
        variant: "h6",
        style: {
          ...props.style,
          color: theme.palette.text.primary,
        },
      };
      break;
    default:
      props = {
        style: {
          ...props.style,
          color: theme.palette.text.secondary,
        },
      };
  }

  return (
    <Typography className={className} {...props}>
      {children}
    </Typography>
  );
};

export default Text;
