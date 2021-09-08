import { Typography, useTheme } from "@material-ui/core";
import React from "react";

const Text = ({ children, type }) => {
  const theme = useTheme();
  let props = {
    style: {
      whiteSpace: "pre-line",
    },
  };
  switch (type) {
    case "title":
      props = {
        variant: "h5",
        style: {
          ...props.style,
          color: theme.palette.text.primary,
          fontWeight: "bold",
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

  return <Typography {...props}>{children}</Typography>;
};

export default Text;
