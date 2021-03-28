import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setModal } from "@/redux/modals/creators";
import { useState } from "react";

//styles
import useStyles from "./styles";

//forms
import Appointment from "./forms/appointment";
import VehicleInfo from "./forms/vehicleInfo";
import PersonalInfo from "./forms/personalInfo";
import Confirmation from "./forms/confirmation";

//svg's
import loading from "./svg/loading";
import success from "./svg/success";
import error from "./svg/error";

const modals = () => {
  const {
    activeModal,
    location,
    date,
    time,
    firstName,
    lastName,
    mobileNumber,
    plateNumber,
    conductionSticker,
  } = useSelector((state) => state.modals);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeComponent, setActiveComponent] = useState(() => 0);
  const [result, setResult] = useState(() => ({
    svg: 0,
    title: "",
    description: "",
  }));

  const svgReferenceArray = [loading, success, error];
  //reference for the active form
  const componentReferenceArray = [
    {
      component: Appointment,
      title: "Appointment",
    },
    {
      component: VehicleInfo,
      title: "Vehicle Information",
      description:
        "Tell us about your vehicle so we can give you a rough estimate of how much you can sell it for.",
    },
    {
      component: PersonalInfo,
      title: "Personal Information",
      description: "Tell us about your personal information.",
    },
    {
      component: Confirmation,
      title: "Summary",
      description:
        "Please check if all of the information your provided are correct.",
    },
    {
      title: result.title,
      description: result.description,
    },
  ];
  const handleClose = () => {
    dispatch(setModal(false));
  };
  const handleBackButton = () => {
    if (activeComponent > 0) {
      setActiveComponent((curr) => curr - 1);
    } else {
      handleClose();
    }
  };
  const handleNextButton = () => {
    if (activeComponent < 3) {
      setActiveComponent((curr) => curr + 1);
    } else {
      // const form = document.querySelector("#confirmation-form");
      // form.submit();
      const formSubmitButton = document.querySelector("#submitterButton");
      formSubmitButton.click();
    }
  };

  const {
    component: ActiveComponent,
    title,
    description,
  } = componentReferenceArray[activeComponent];

  const makeFormLayout = () => {
    //disable submit button if requirements are not met
    const isDisabled =
      activeComponent === 3 &&
      (firstName === "" ||
        lastName === "" ||
        mobileNumber === "" ||
        location === "" ||
        date === "" ||
        time === "" ||
        (plateNumber === "" && conductionSticker === ""));

    return (
      <>
        <Typography
          className={classes.title}
          variant="h6"
          id={`${title}-modal-title`}
        >
          {title}
        </Typography>
        {description && (
          <Typography variant="body1" id={`${title}-modal-description`}>
            {description}
          </Typography>
        )}
        <ActiveComponent
          setActiveComponent={activeComponent === 3 && setActiveComponent}
          setResult={activeComponent === 3 && setResult}
        />
        <div className={classes.buttonsContainer}>
          <Button variant="text" onClick={handleBackButton}>
            {activeComponent > 0 ? "Back" : "Cancel"}
          </Button>
          <Button
            // disabled={isDisabled}
            variant="contained"
            color="secondary"
            onClick={handleNextButton}
          >
            {activeComponent < 3 ? "Next" : "Submit"}
          </Button>
        </div>
      </>
    );
  };

  const makeDialogLayout = () => {
    return (
      <div className={classes.dialogLayout}>
        <div className="iconAndText">
          {svgReferenceArray[result.svg]}
          <div>
            <Typography variant="h5" id={`${title}-modal-title`}>
              {title}
            </Typography>
            {description && (
              <Typography variant="body1" id={`${title}-modal-description`}>
                {description}
              </Typography>
            )}
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          {result.svg != 0 && (
            <Button
              variant={result.svg === 1 ? "contained" : "text"}
              color={result.svg === 1 ? "secondary" : "none"}
              onClick={handleClose}
            >
              {result.svg === 1 ? "OK" : "Cancel"}
            </Button>
          )}

          {result.svg === 2 && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setActiveComponent(3)}
            >
              Retry
            </Button>
          )}
        </div>
      </div>
    );
  };
  return (
    <>
      <Modal
        className={classes.modal}
        open={activeModal === "getMyQuote"}
        onClose={handleClose}
        aria-labelledby="getmyquote-modal-title"
        aria-describedby="getmyquote-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={activeModal === "getMyQuote"}>
          <Paper className={classes.paper}>
            {activeComponent <= 3 ? makeFormLayout() : makeDialogLayout()}
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default modals;
