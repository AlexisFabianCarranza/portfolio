import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";
import HomeScreen from "./home/screen/HomeScreen";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomeScreen />
    </ThemeProvider>
  );
}

export default App;
