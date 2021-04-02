import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
const breakpoints = createBreakpoints({});

const theme = {
  overrides: {
    // Style sheet name ⚛️
    // MuiTypography: {
    //   root: {},
    // },
  },
  palette: {
    primary: {
      light: "#545678",
      main: "#2A2D4C",
      dark: "#020224",
      contrastText: "#fff",
      background: "rgba(255,147,44,.6)",
    },
    secondary: {
      light: "#9fd497",
      main: "#6FA269",
      // main: "#2D6227", //WCAD color contrast passing ratio
      dark: "#42743d",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: `'Source Sans Pro', sans-serif`,
    body1: {
      fontSize: "16px",
      [breakpoints.up("md")]: {
        fontSize: "18px",
      },
    },
    h5: {
      [breakpoints.up("md")]: {
        fontWeight: "bold",
      },
    },
  },
};

export { theme };
