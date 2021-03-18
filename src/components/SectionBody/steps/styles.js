import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "left",
    marginTop: "40px",
    padding: "48px",
    border: "hidden",
    borderRadius: "10px",
  },
  introStep: {
    background: theme.palette.primary.main,
  },
  whiteButton: {
    color: "black",
    background: "white",
  },
}));

export default useStyles;
