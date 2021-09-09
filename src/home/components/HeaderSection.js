import { Grid } from "@material-ui/core";
import React from "react";
import Text from "./Text";

const HeaderSection = ({ title, description }) => {
  return (
    <Grid container direction="column" alignItems="center" spacing={5}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Text type={"title"}>{title}</Text>
      </Grid>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <Text>{description}</Text>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
