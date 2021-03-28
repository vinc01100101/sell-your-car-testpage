import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    position: "relative",
    display: "flex",
    flexDirection: "column",

    width: "90%",
    maxWidth: "707px",
    maxHeight: "95%",
    padding: "32px",

    border: "hidden",
    borderRadius: "10px",

    "& form": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      flex: 1,
      overflowY: "auto",
      overflowX: "hidden",
      padding: "10px",

      /******************************************
       * REMOVING ARROWS FROM NUMBER TYPED INPUTS
       *
       * Chrome, Safari, Edge, Opera
       */
      "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        "-webkit-appearance": "none",
        margin: 0,
      },
      /* Firefox */
      "& input[type=number]": {
        "-moz-appearance": "textfield",
      },
      /******************************************/
      "& > .summaryTitle": {
        color: "#6FA269",
        fontWeight: "bold",
        marginTop: "32px !important",
        marginBottom: "2px !important",
      },
      "& > .summaryContentBox": {
        display: "flex",
        flexDirection: "row",
        marginBottom: "2px !important",

        "& > .summaryLabel": {
          display: "flex",
          alignItems: "center",
          width: "40%",
        },
        "& > .summaryValue": {
          width: "60%",
        },
      },

      //each div child
      "& > div, p": {
        width: "100%",
        marginBottom: "25px",

        "&.datesContainer": {
          position: "relative",
          width: "100%",
          height: "141px",
          padding: "0px 30px",
        },

        //the arrows
        "& > .arrowLeft": {
          position: "absolute",
          width: "30px",
          height: "30px",
          left: "0px",
          top: "50%",
          transform: "translateY(-50%)",
          padding: "0px",
        },
        "& > .arrowRight": {
          position: "absolute",
          width: "30px",
          height: "30px",
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
                pointerEvents: "none",
                cursor: "pointer",
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
    marginTop: "30px",

    "& button": {
      width: "180px",
    },
  },
  dialogLayout: {
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",

    "& > .iconAndText": {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",

      [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
        alignItems: "flex-start",
      },

      "& > svg": {
        width: "150px",
        height: "auto%",
        marginRight: "30px",
        flexShrink: 0,
        marginBottom: "32px",

        [theme.breakpoints.up("sm")]: {
          marginBottom: "0px",
        },
      },
    },
    "& > div > h5, p": {
      userSelect: "text !important",
      pointerEvents: "auto !important",
    },
  },
}));

export default useStyles;
