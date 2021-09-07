import { Grid } from "@material-ui/core";
import React from "react";
import Text from "../components/Text";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Slide } from "react-awesome-reveal";
import HorizontalContainer from "../components/HorizontalContainer";

const Contact = () => {
  return (
    <HorizontalContainer
      animation={"none"}
      RightComponent={() => (
        <Slide direction="right">
          <Grid container direction={"column"} spacing={5}>
            <Grid item>
              <TextField
                variant="filled"
                label="Name"
                fullWidth
                placeholder={"Your name"}
              />
            </Grid>
            <Grid item>
              <TextField variant="filled" label="Email" fullWidth />
            </Grid>
            <Grid item>
              <TextField
                variant="filled"
                label="Message"
                fullWidth
                multiline
                minRows={4}
              />
            </Grid>
            <Grid item>
              <Button variant={"contained"} type={"submit"} color={"primary"}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Slide>
      )}
      LeftComponent={() => (
        <Slide direction="left">
          <Grid container spacing={3} direction={"column"}>
            <Grid item>
              <Text type="title">Contact Me</Text>
            </Grid>
            <Grid item>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </Grid>
          </Grid>
        </Slide>
      )}
    />
  );
};

export default Contact;
