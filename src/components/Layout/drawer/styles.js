import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  callUs: {
    border: "1px solid white",
    padding: "5px",
    borderRadius: "8px",
    fontWeight: "bold",
    fontSize: "16px",
    fontStyle: "normal",
    lineHeight: "160%",
  },
  copyRight: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "18px",
    opacity: "0.5",
  },
  drawerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    background: "#6FA269",
    color: "white",
    width: "300px",
    padding: "20px",

    "& a": {
      color: "white",
      textDecoration: "none !important",
    },
  },
});
