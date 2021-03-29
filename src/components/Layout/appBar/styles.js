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
    marginRight: "50px",
  },
}));
