import * as React from "react";
import "./Utils/dotenv";
import AppRoutes from "./Routes/Routes";
import { ThemeProvider } from "./Utils/typed-styledCom";
import theme from "./Utils/theme";
import GlobalStyled from "./Utils/global-styles";
// import Header from "./Components/Header";

const App: React.FC = () => (
  <>
    <GlobalStyled />
    {/* <Header /> */}
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  </>
);

export default App;
