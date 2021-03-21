import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
  },

  eachQna: {
    textAlign: "left",
    marginBottom: "24px",
    paddingRight: "20px",
    whiteSpace: "pre-wrap",
  },
  summary: {
    background: "#F0F5EF",
  },
  title: {
    fontWeight: "bold",
  },
  activeAccordion: {
    background: [theme.palette.secondary.main],
    color: "white",
  },
  q: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  a: {
    userSelect: "text !important",
  },
}));

export default useStyles;
