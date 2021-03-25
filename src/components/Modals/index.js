import {
  Modal,
  Backdrop,
  Fade,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { setModal } from "@/redux/modals/creators";

//styles
import useStyles from "./styles";

//forms
import Appointment from "./forms/appointment";
import VehicleInfo from "./forms/vehicleInfo";
import PersonalInfo from "./forms/personalInfo";
import Confirmation from "./forms/confirmation";

const modals = () => {
  const activeModal = useSelector((state) => state.modals.activeModal);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [activeForm, setActiveForm] = useState(() => 0);

  //reference for the active form
  const formReferenceArray = [
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
      title: "Confirm",
    },
  ];
  const handleClose = () => {
    dispatch(setModal(false));
  };
  const handleBackButton = () => {
    if (activeForm > 0) {
      setActiveForm((curr) => curr - 1);
    } else {
      dispatch(setModal(false));
    }
  };
  const handleNextButton = () => {
    if (activeForm < 3) {
      setActiveForm((curr) => curr + 1);
    }
  };
  const createModalContent = () => {
    const { component: Form, title, description } = formReferenceArray[
      activeForm
    ];
    return (
      <Paper className={classes.paper}>
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
        <Form />
        <div className={classes.buttonsContainer}>
          <Button variant="text" onClick={handleBackButton}>
            {activeForm > 0 ? "Back" : "Cancel"}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleNextButton}
          >
            {activeForm < 3 ? "Next" : "Submit"}
          </Button>
        </div>
      </Paper>
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
        <Fade in={activeModal === "getMyQuote"}>{createModalContent()}</Fade>
      </Modal>
    </>
  );
};

export default modals;
