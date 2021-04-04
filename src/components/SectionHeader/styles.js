import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  semiRoot: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "120%",
    // height: "514px",
    height: "80%",
    overflow: "hidden",
    border: "hidden",
    borderBottomRightRadius: "50% 140px",
    borderBottomLeftRadius: "50% 140px",
    // [theme.breakpoints.up("sm")]: {
    //   height: "466px",
    // },
  },
  imgBackground: {
    position: "absolute",
    width: "90%",
    height: "auto",
    minWidth: "900px",
    opacity: 0.7,
    [theme.breakpoints.up("lg")]: {
      top: "-250px",
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
    fontWeight: "bold",
    border: "hidden",
    borderRadius: "10px",
  },
}));
