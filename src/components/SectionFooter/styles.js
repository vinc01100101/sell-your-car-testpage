import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  semiRoot: {
    background: [theme.palette.secondary.main],
    color: "white",
    padding: "70px 20% 25px 20%",
    width: "120%",
    border: "hidden",
    borderTopRightRadius: "50% 140px",
    borderTopLeftRadius: "50% 140px",
    "& a": {
      color: "inherit",
      textDecoration: "none",
    },
    "& ul": {
      listStyleType: "none",
      margin: "0px",
      padding: "0px",
      "& li": {
        padding: "10px 0px",
      },
    },
  },
  flexibleContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
    justifyContent: "flex-start",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between",
    },
  },
  copyright: {
    opacity: 0.5,
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: "40px !important",
    },
    "& li": {
      marginRight: "3px",
    },
  },
  social: {
    display: "flex",
    "& li": {
      marginRight: "30px",
    },
  },
  marginBottom: {
    marginBottom: "50px",
  },
  marginTop: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
    },
  },
}));
