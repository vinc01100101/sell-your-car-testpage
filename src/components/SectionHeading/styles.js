import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    height: "514px",
    overflow: "hidden",
    border: "hidden",
    borderBottomRightRadius: "50% 20%",
    borderBottomLeftRadius: "50% 20%",
    [theme.breakpoints.up("sm")]: {
      height: "466px",
    },
  },
  imgBackground: {
    position: "absolute",
    width: "100%",
    height: "auto",
    minWidth: "900px",
    opacity: 0.7,
    [theme.breakpoints.up("lg")]: {
      top: "-200px",
    },
  },
  blackBackground: {
    position: "absolute",
    left: 0,
    top: 0,
    background: "black",
    width: "100%",
    height: "100%",
  },
  headerText: {
    position: "relative",
    color: "white",
    marginBottom: "30px",
    textAlign: "center",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "50px",
  },
  button: {
    width: "220px",
    height: "56px",
    fontSize: "16px",
    border: "hidden",
    borderRadius: "10px",
  },
}));
export default useStyles;
