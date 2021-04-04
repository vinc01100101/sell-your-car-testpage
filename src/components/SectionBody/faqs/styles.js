import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  description: {
    marginBottom: "30px",
  },
  accordion: {
    marginBottom: "24px",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: "20px",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },

    "& > div": {
      flex: 1,
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
  activeAccordion: {
    background: [theme.palette.secondary.main],
    color: "white",
  },
  title: {
    fontWeight: "bold",
  },
  q: {
    fontWeight: "bold",
    marginBottom: "20px",
  },
  a: {
    userSelect: "text !important",
  },
}));
