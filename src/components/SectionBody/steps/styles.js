import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    marginTop: "40px",
    padding: "40px",
    border: "hidden",
    borderRadius: "10px",
  },
  subtitle: {
    marginTop: "-15px",
    marginBottom: "60px",
  },
  //div to set responsive display
  setFlex: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
  },
  //the first card with dark-blue background
  introStep: {
    background: theme.palette.primary.main,
  },
  logoContainer: {
    position: "relative",
    [theme.breakpoints.up("sm")]: {
      marginRight: "32px",
    },
  },
  introBadge: {
    position: "absolute",
    right: "0px",
    top: "0px",
  },
  title: {
    marginBottom: "14px",
  },
  cardActions: {
    paddingLeft: "0px",
  },
  button: {
    minWidth: "168px",
    fontWeight: "bold",
    border: "hidden",
    borderRadius: "10px",
  },
  whiteButton: {
    color: "black",
    background: "white",
  },
}));
