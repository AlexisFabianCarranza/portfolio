import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeScreen from "./home/screen/HomeScreen";
import theme from "./theme";
import "./i18n";
import { Suspense } from "react";
import "react-toastify/dist/ReactToastify.css";
import Toast from "./home/components/Toast";

function App() {
  return (
    <Suspense fallback={<div>Loading... </div>}>
      <ThemeProvider theme={theme}>
        <HomeScreen />
        <Toast />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
