import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  introFlexSetter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      textAlign: "left",
    },
  },
  introImage: {
    width: "407px",
    height: "auto",
    clipPath: `circle(39%)`,
  },
  introTitle: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "0px !important",
    },
  },
  title: {
    margin: "20px 30px 20px 30px",
  },
  child: {
    marginBottom: "98px",
    width: "100%",
  },
  //for curved light green background of "Just follow these 3 easy steps" section.
  stepsBackground: {
    width: "120%",
    background: "#F0F5EF",
    padding: "68px 10% 158px 10%",
    border: "hidden",
    borderBottomRightRadius: "50% 140px",
    borderBottomLeftRadius: "50% 140px",
    borderTopRightRadius: "50% 140px",
    borderTopLeftRadius: "50% 140px",
  },
  //for bordered light green bg of "You can call or chat with us!"
  callOrChatBackground: {
    background: "#F0F5EF",
    borderColor: [theme.palette.secondary.main],
    border: "2px solid",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px gray",
  },
}));
