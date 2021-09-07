const { createTheme } = require("@material-ui/core");

const defaultTheme = {
  palette: {
    type: "dark",
    secondary: {
      main: "#03DAC6",
      light: "#03DAC6",
      dark: "#03DAC6",
    },
    background: {
      default: "#181818",
      paper: "#212121",
    },
    primary: {
      main: "#bb86fc",
      light: "#bb86fc",
      dark: "#3700b3",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#AAAAAA",
    },
    warning: {
      main: "#FBC02D",
    },
    success: {
      main: "#4CAF50",
    },
    error: {
      main: "#CF6679",
    },
  },
};

const theme = createTheme(defaultTheme);

export default theme;
