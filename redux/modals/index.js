import { ACTIONS } from "./constants";

const initialState = {
  activeModal: false,
  //appointment
  location: "",
  date: "",
  time: "",
  locationsArray: [],
  datesArray: [],
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
    case ACTIONS.SET_DATES_ARRAY:
      const now = Date.now();
      /**
       * there is 8.64e7 milliseconds in a day
       * increment "now" by 8.64e7 to get each day of the same time
       **/

      const dates = [...Array(15)].map(
        (x, i) => new Date(now + 8.64e7 * (i + 1))
      );

      //IIFE (Immediately Invoked Function Expression)
      const formattedUtcDates = (() => {
        //set references
        const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];

        //formattedUtcDates = this..
        return dates.map((date) => ({
          month: months[date.getUTCMonth()],
          date: date.getUTCDate(),
          day: days[date.getUTCDay()],
        }));
      })();

      // console.log(formattedUtcDates);
      return { ...state, datesArray: formattedUtcDates };
      break;

    case ACTIONS.SET_LOCATIONS_DATA:
      return {
        ...state,
        locationsArray: action.payload,
      };

      break;
    default:
      return state;
  }
};
export default modalsReducer;
