import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
  //div to set responsive display
  setFlex: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },
  //the first card with dark-blue background
  introStep: {
    background: theme.palette.primary.main,
  },
  logoContainer: {
    position: "relative",
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
  },
  whiteButton: {
    color: "black",
    background: "white",
  },
}));

export default useStyles;
