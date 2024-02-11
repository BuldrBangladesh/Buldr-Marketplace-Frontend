import { BrowserRouter, Switch, Route } from "react-router-dom";
import CartContextProvider from "./Hooks/CartContextProvider";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Home from "./Pages/Home";
import Appbar from "./Components/Appbar";


const customTheme = createTheme({
  palette: {},
  typography: {
    fontFamily: [
      "Oswald",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeProvider theme={customTheme}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Appbar />
        </ThemeProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
