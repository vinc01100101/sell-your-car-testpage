import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "408px",
    [theme.breakpoints.up("sm")]: {
      height: "448px",
    },
    [theme.breakpoints.up("md")]: {
      height: "488px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "528px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "568px",
    },
  },
  arrowLeft: {
    position: "absolute",
    left: "10px",
    top: "35%",
    border: "hidden",
    borderRadius: "50%",
    padding: "0px",
  },
  arrowRight: {
    position: "absolute",
    right: "10px",
    top: "35%",
    border: "hidden",
    borderRadius: "50%",
    padding: "0px",
  },

  img: {
    width: "auto",
    height: "60%",
    border: "hidden",
    borderRadius: "10px",
    marginBottom: "10px",
  },
  imgContainer: {
    position: "absolute",
    left: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "hidden",
    width: "100%",
    height: "100%",
    padding: "20px",
    transition: "all",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: "1",
    color: "#636363",
    [theme.breakpoints.up("md")]: {
      padding: "20px",
    },
  },
  middle: {
    transform: "translateX(0%)",
    transitionTimingFunction: "ease-out",
    transitionDuration: "1s",
    opacity: 1,
  },
  left: {
    transform: "translateX(-100%)",
    transitionTimingFunction: "ease-in",
    transitionDuration: "0.5s",
    opacity: 0,
  },
  right: {
    transform: "translateX(100%)",
    transitionTimingFunction: "ease-in",
    transitionDuration: "0.5s",
    opacity: 0,
  },
  hide: {
    visibility: "hidden",
  },
}));

export default useStyles;
