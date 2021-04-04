import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "0 27px 27px 27px",
  },
  contact: {
    marginBottom: "27px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
    },
  },
  contactLogo: {
    marginRight: "20px",
    transform: "translateY(5px)",
  },
  contactText: {
    fontWeight: "bold",
    userSelect: "text !important",
  },
}));
