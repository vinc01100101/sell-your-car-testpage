import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  img: {
    width: "407px",
    height: "auto",
    clipPath: `circle(39%)`,
  },
  title: {
    margin: "20px 70px 20px 70px",
  },
});

export default useStyles;
