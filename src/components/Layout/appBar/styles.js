import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridTitle: {
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-start",
    },
  },
  gridLink: {
    color: "white",
    textDecoration: "none !important",
    margin: "16px 25px",
    whiteSpace: "nowrap",

    transition: "transform 0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));
