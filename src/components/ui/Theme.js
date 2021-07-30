import { createTheme } from "@material-ui/core/styles";

const myRed = "#ff4f42";
const myOrange = "#e69419";
const myGreen = "#027027";
const myYellow = "#f7f565";
const myBlue = "#4a56f7";
const myViolet = "#c94af7";
const myPink = "#f74aec";

export default createTheme({
  palette: {
    common: {
      red: `${myRed}`,
      orange: `${myOrange}`,
      green: `${myGreen}`,
      yellow: `${myYellow}`,
      blue: `${myBlue}`,
      violet: `${myViolet}`,
      pink: `${myPink}`,
    },
    primary: {
      main: `${myRed}`,
    },
    secondary: {
      main: `${myOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});
