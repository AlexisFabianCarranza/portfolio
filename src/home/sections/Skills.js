import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Text from "../components/Text";
import { ReactComponent as OkSvg } from "../../assets/images/ok.svg";
import HeaderSection from "../components/HeaderSection";
import { Slide } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Skill = ({ name }) => {
  return (
    <Grid container direction={"row"} spacing={3} alignItems={"center"}>
      <Grid item>
        <OkSvg height={"100%"} width={"25"} />
      </Grid>
      <Grid item>
        <Text>{name}</Text>
      </Grid>
    </Grid>
  );
};

const frontTechnologies = ["React", "React Native", "Javascript", "TypeScript"];
const backTechnologies = ["Java", "Node", "GO"];
const otherTechnologies = ["MongoDB", "MySql", "Docker"];

const useStyles = makeStyles((theme) => ({
  subtitle: {
    marginBottom: 20,
  },
}));

const Skills = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item>
        <Slide direction={"up"}>
          <HeaderSection
            title={t("skills.title")}
            description={t("skills.description")}
          />
        </Slide>
      </Grid>
      <Grid item>
        <Grid container direction={"row"} justifyContent={"center"}>
          <Grid item xs={3}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Text type="subtitle" className={classes.subtitle}>
                  Frontend
                </Text>
                {frontTechnologies.map((tech) => (
                  <Skill name={tech} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Text type="subtitle" className={classes.subtitle}>
                  Backend
                </Text>
                {backTechnologies.map((tech) => (
                  <Skill name={tech} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Grid container justifyContent={"center"}>
              <Grid item>
                <Text type="subtitle" className={classes.subtitle}>
                  Other technologies
                </Text>
                {otherTechnologies.map((tech) => (
                  <Skill name={tech} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Skills;
