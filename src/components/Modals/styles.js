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
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      //   background: "#888",
      width: "100%",
      flex: 1,
      overflowY: "auto",

      "& > div": {
        width: "100%",
        marginBottom: "25px",

        //overflow
        "&.datesContainer": {
          width: "100%",
          height: "141px",
          overflowX: "hidden",

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
