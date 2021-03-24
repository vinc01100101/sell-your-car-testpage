import { ACTIONS } from "./constants";

const initialState = {
  activeModal: false,
  //appointment
  location: "",
  date: "",
  time: "",
  //vehicle info
  year: "",
  brand: "",
  plateNumber: "",
  conductionSticker: "",
  transmissionType: "",
  fuelType: "",
  color: "",
  odometer: "",
  //personal info
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  address: "",
};

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_MODAL:
      return { ...state, activeModal: action.payload };
      break;
    case ACTIONS.SET_INPUT:
      return { ...state, [action.payload.key]: action.payload.value };
      break;
    default:
      return state;
  }
};
export default modalsReducer;
