import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "98px",
  },
  child: {
    marginBottom: "98px",
  },
  title: {
    margin: "20px 70px 20px 70px",
  },

  headerImg: {
    width: "407px",
    height: "auto",
    clipPath: `circle(39%)`,
  },
});

export default useStyles;
