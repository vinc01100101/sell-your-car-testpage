import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  imgContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    background: "black",
    border: "hidden",
    borderRadius: "10px",
    width: "100%",
    height: "208px",
    [theme.breakpoints.up("sm")]: {
      height: "248px",
    },
    [theme.breakpoints.up("md")]: {
      height: "288px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "328px",
    },
    [theme.breakpoints.up("xl")]: {
      height: "368px",
    },
  },
  img: {
    width: "auto",
    height: "100%",
  },
}));

export default useStyles;
