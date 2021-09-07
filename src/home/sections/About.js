import { Button, Grid } from "@material-ui/core";
import React from "react";
import { ReactComponent as DeveloperSvg } from "../../assets/images/developer.svg";
import HorizontalContainer from "../components/HorizontalContainer";
import Text from "../components/Text";

const About = () => {
  return (
    <HorizontalContainer
      RightComponent={() => <DeveloperSvg width={"100%"} height={"100%"} />}
      LeftComponent={() => (
        <Grid container spacing={3}>
          <Grid item>
            <Text type={"title"}>
              Hi, I´m Alexis. <br /> I am Software Engineer and I love
              technology
            </Text>
          </Grid>
          <Grid item>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </Grid>
          <Grid item>
            <Button color={"primary"} variant={"contained"}>
              Contact with me
            </Button>
          </Grid>
        </Grid>
      )}
    />
  );
};

export default About;
