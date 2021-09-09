import React from "react";
import HeaderSection from "../components/HeaderSection";
import Text from "../components/Text";
import HorizontalContainer from "../components/HorizontalContainer";
import { ReactComponent as MercadoPagoSvg } from "../../assets/images/mercado-pago.svg";
import { ReactComponent as ClaroSvg } from "../../assets/images/claro.svg";
import PersonalImg from "../../assets/images/personal.png";
import { useTranslation } from "react-i18next";
import { Grid } from "@material-ui/core";
import { Slide } from "react-awesome-reveal";

const widthLogo = 200;

const Experiences = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Slide direction={"up"}>
        <HeaderSection
          title={t("experiences.title")}
          description={t("experiences.description")}
        />
      </Slide>

      <HorizontalContainer
        direction={"right"}
        LeftComponent={() => (
          <Grid container spacing={3} direction={"column"}>
            <MercadoPagoSvg
              width={widthLogo}
              height={"100%"}
              style={{ maxHeight: 300 }}
            />
            <Grid item>
              <Text type={"subtitle"}>{t("experiences.mp.title")}</Text>
            </Grid>
            <Grid item>
              <Text>{t("experiences.mp.description")}</Text>
            </Grid>
          </Grid>
        )}
        RightComponent={() => (
          <Grid container spacing={3} direction={"column"}>
            <Grid item>
              <Text type={"subtitle"}>{t("experiences.mp.job.position")}</Text>
            </Grid>
            <Grid item>
              <Text>{t("experiences.mp.job.description")}</Text>
            </Grid>
          </Grid>
        )}
      />
      <HorizontalContainer
        LeftComponent={() => (
          <Grid container spacing={3} direction={"column"}>
            <img
              src={PersonalImg}
              width={widthLogo}
              height={"100%"}
              alt="personal"
            />
            <Grid item>
              <Text type={"subtitle"}>{t("experiences.personal.title")}</Text>
            </Grid>
            <Grid item>
              <Text>{t("experiences.personal.description")}</Text>
            </Grid>
          </Grid>
        )}
        RightComponent={() => (
          <Grid container spacing={3} direction={"column"}>
            <Grid item>
              <Text type={"subtitle"}>
                {t("experiences.personal.job.position")}
              </Text>
            </Grid>
            <Grid item>
              <Text>{t("experiences.personal.job.description")}</Text>
            </Grid>
          </Grid>
        )}
      />
      <HorizontalContainer
        direction={"right"}
        LeftComponent={() => (
          <Grid container spacing={3} direction={"column"}>
            <ClaroSvg width={widthLogo} height={300} alt="personal" />
            <Grid item>
              <Text type={"subtitle"}>{t("experiences.claro.title")}</Text>
            </Grid>
            <Grid item>
              <Text>{t("experiences.claro.description")}</Text>
            </Grid>
          </Grid>
        )}
        RightComponent={() => (
          <Grid container spacing={3} direction={"column"}>
            <Grid item>
              <Text type={"subtitle"}>
                {t("experiences.claro.job.position")}
              </Text>
            </Grid>
            <Grid item>
              <Text>{t("experiences.claro.job.description")}</Text>
            </Grid>
          </Grid>
        )}
      />
    </div>
  );
};

export default Experiences;
