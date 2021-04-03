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
      // background: "#e3fae3",

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

      "& > .plateConduction": {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        "& > div": {
          flex: 1,
        },
        "& > p": {
          display: "inline-block",
          margin: "0px 10px",
        },
        "& label": {
          top: "-10px",
        },
      },

      "& > .summaryTitle": {
        alignSelf: "flex-start",
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
      "& > div": {
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
    // marginTop: "30px",

    "& button": {
      width: "180px",
    },
  },
  dialogLayout: {
    overflowY: "auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    "& > .iconAndText": {
      minHeight: "240px",
      padding: "32px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",

      [theme.breakpoints.up("sm")]: {
        flexDirection: "row-reverse",
        justifyContent: "flex-end",
      },

      "& > .icon": {
        width: "200px",
        height: "110px",
        display: "flex",
        justifyContent: "center",
        "& > .twoPapers": {
          position: "absolute",
          width: "100px",
          height: "150px",
          borderRadius: "5px",
          boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.5)",
          transition: "transform 0.7s",
          transform: "rotate(0deg)",
          top: "0",
          [theme.breakpoints.up("sm")]: {
            right: "90px",
            top: "25%",
          },
        },
        "& > .frontPaper": {
          display: "flex",
          alignItems: "center",
          padding: "10px",
          justifyContent: "center",
          background: "white",

          "& > svg": {
            width: "100%",
            height: "auto",
          },
        },
        "& > .frontPaperEnd": {
          transform: "translateX(-40px) rotate(-15deg)",
        },
        "& > .backPaper": {
          background: "#2A2D4C",
        },
        "& > .backPaperEnd": {
          transform: "translateX(25px) rotate(25deg)",
        },
      },

      "& > .text": {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        [theme.breakpoints.up("sm")]: {
          alignItems: "flex-start",
        },

        "& > h5 , & > p": {
          userSelect: "text !important",
          pointerEvents: "auto !important",
          textAlign: "center",
          [theme.breakpoints.up("sm")]: {
            textAlign: "left",
          },

          "& > .contact": {
            display: "flex",
            alignItems: "center",
          },
        },
      },
    },
  },
}));

export default useStyles;
