import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",

    width: "90%",
    height: "80%",
    maxWidth: "707px",
    maxHeight: "517px",
    padding: "32px",

    "& form": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      //   background: "#888",
      width: "100%",
      flex: 1,
      overflowY: "auto",
      overflowX: "hidden",
      //each div child
      "& > div": {
        width: "100%",
        marginBottom: "25px",

        "&.datesContainer": {
          position: "relative",
          width: "100%",
          height: "141px",
        },

        //the arrows
        "& > .arrowLeft": {
          position: "absolute",
          left: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0px",
        },
        "& > .arrowRight": {
          position: "absolute",
          right: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0px",
        },

        //overflow date container
        "& > .sub-datesContainer": {
          width: "100%",
          height: "100%",
          overflow: "hidden",
          padding: "0px 32px",
          //cells container
          "& > div": {
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            //initiate to 0px for getComputedStyle use
            transform: "translateX(0px)",
            //cell
            "& > div": {
              height: "100%",
              flexBasis: "33.3333333%",
              flexShrink: 0,
              padding: "5px",

              //inner border
              "& > div": {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                border: "1px solid black",
                borderRadius: "10px",
              },
            },
          },
        },
      },
    },
  },
  title: {
    marginBottom: "25px",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",

    "& button": {
      width: "180px",
    },
  },
});

export default useStyles;
