import { Typography, useTheme } from "@material-ui/core";
import React from "react";

const Text = ({ children, type, className, color }) => {
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
          color: color ? color : theme.palette.text.primary,
          fontWeight: "bold",
          ...props.style,
        },
      };
      break;
    case "subtitle":
      props = {
        variant: "h6",
        style: {
          color: color ? color : theme.palette.text.primary,
          ...props.style,
        },
      };
      break;
    default:
      props = {
        style: {
          color: color ? color : theme.palette.text.secondary,
          ...props.style,
        },
      };
  }

  return (
    <Typography {...props} className={className}>
      {children}
    </Typography>
  );
};

export default Text;
