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
  headerImg: {
    width: "407px",
    height: "auto",
    clipPath: `circle(39%)`,
  },
  title: {
    margin: "20px 70px 20px 70px",
  },
  child: {
    marginBottom: "98px",
    width: "100%",
  },
  //for light green background of "Just follow these 3 easy steps" section.
  stepsBackground: {
    background: "#F0F5EF",
    padding: "68px 16px 158px 16px",
    border: "hidden",
    borderBottomRightRadius: "50% 50px",
    borderBottomLeftRadius: "50% 50px",
    borderTopRightRadius: "50% 50px",
    borderTopLeftRadius: "50% 50px",
  },
});

export default useStyles;
