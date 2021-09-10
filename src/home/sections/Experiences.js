import React, { useState } from "react";
import HeaderSection from "../components/HeaderSection";
import Text from "../components/Text";
import HorizontalContainer from "../components/HorizontalContainer";
import { ReactComponent as MercadoPagoSvg } from "../../assets/images/mercado-pago.svg";
import { ReactComponent as ClaroSvg } from "../../assets/images/claro.svg";
import { ReactComponent as ProductLaunchSvg } from "../../assets/images/product-launch.svg";
import PersonalImg from "../../assets/images/personal.png";
import { useTranslation } from "react-i18next";
import { Grid } from "@material-ui/core";
import { Slide } from "react-awesome-reveal";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const widthLogo = 150;

const basicExperiences = [
  {
    animationDirection: "right",
    Icon: (props) => <MercadoPagoSvg {...props} />,
    titleKey: "experiences.mp.title",
    descriptionKey: "experiences.mp.description",
    jobPositionKey: "experiences.mp.job.position",
    jobDescriptionKey: "experiences.mp.job.description",
  },
  {
    animationDirection: "left",
    Icon: (props) => <ProductLaunchSvg {...props} />,
    titleKey: "experiences.freelance.title",
    descriptionKey: "experiences.freelance.description",
    jobPositionKey: "experiences.freelance.job.position",
    jobDescriptionKey: "experiences.freelance.job.description",
    Link: () => (
      <Link
        href={
          "https://play.google.com/store/apps/details?id=com.omnicanalmobile&hl=es_419&gl=US"
        }
      >
        Omnicanal platform
      </Link>
    ),
  },
];

const moreExperiences = [
  {
    animationDirection: "right",
    Icon: (props) => <img src={PersonalImg} alt="personal" {...props} />,
    titleKey: "experiences.personal.title",
    descriptionKey: "experiences.personal.description",
    jobPositionKey: "experiences.personal.job.position",
    jobDescriptionKey: "experiences.personal.job.description",
  },
  {
    animationDirection: "left",
    Icon: (props) => <ClaroSvg alt="personal" {...props} />,
    titleKey: "experiences.claro.title",
    descriptionKey: "experiences.claro.description",
    jobPositionKey: "experiences.claro.job.position",
    jobDescriptionKey: "experiences.claro.job.description",
  },
];

const ExperienceRow = ({
  direction = "left",
  Icon,
  titleKey,
  descriptionKey,
  jobPositionKey,
  jobDescriptionKey,
  Link,
}) => {
  const { t } = useTranslation();
  return (
    <HorizontalContainer
      direction={direction}
      LeftComponent={() => (
        <Grid container spacing={3} direction={"column"}>
          <Icon width={widthLogo} height={"100%"} style={{ maxHeight: 300 }} />
          <Grid item>
            <Text type={"subtitle"}>{t(titleKey)}</Text>
          </Grid>
          <Grid item>
            <Text>{t(descriptionKey)}</Text>
          </Grid>
        </Grid>
      )}
      RightComponent={() => (
        <Grid container spacing={3} direction={"column"}>
          <Grid item>
            <Text type={"subtitle"}>{t(jobPositionKey)}</Text>
          </Grid>
          <Grid item>
            <Text>{t(jobDescriptionKey)}</Text>
            {Link && <Link />}
          </Grid>
        </Grid>
      )}
    />
  );
};

const Experiences = () => {
  const { t } = useTranslation();
  const [showMoreExperiences, setShowMoreExperiences] = useState(false);
  const toggleMoreExperiences = () => {
    setShowMoreExperiences(!showMoreExperiences);
  };
  return (
    <div>
      <Slide direction={"up"}>
        <HeaderSection
          title={t("experiences.title")}
          description={t("experiences.description")}
        />
      </Slide>
      {basicExperiences.map((experience) => (
        <ExperienceRow
          direction={experience.animationDirection}
          Icon={experience.Icon}
          jobDescriptionKey={experience.jobDescriptionKey}
          jobPositionKey={experience.jobPositionKey}
          descriptionKey={experience.descriptionKey}
          titleKey={experience.titleKey}
          Link={experience.Link}
        />
      ))}
      {showMoreExperiences ? (
        moreExperiences.map((experience) => (
          <ExperienceRow
            direction={experience.animationDirection}
            Icon={experience.Icon}
            jobDescriptionKey={experience.jobDescriptionKey}
            jobPositionKey={experience.jobPositionKey}
            descriptionKey={experience.descriptionKey}
            titleKey={experience.titleKey}
            Link={experience.Link}
          />
        ))
      ) : (
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item>
            <Button
              variant={"contained"}
              color={"secondary"}
              onClick={toggleMoreExperiences}
            >
              Show more experience
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Experiences;
