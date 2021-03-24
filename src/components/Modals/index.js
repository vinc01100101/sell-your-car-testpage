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

//styles
import useStyles from "./styles";

//forms
import Appointment from "./forms/appointment";

const modals = () => {
  const activeModal = useSelector((state) => state.modals.activeModal);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClose = () => {
    dispatch(setModal(false));
  };

  const createModalContent = (Form, title, description) => {
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
          <Button variant="text">Cancel</Button>
          <Button variant="contained" color="secondary">
            Next
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
        <Fade in={activeModal === "getMyQuote"}>
          {createModalContent(Appointment, "Appointment")}
        </Fade>
      </Modal>
    </>
  );
};

export default modals;
