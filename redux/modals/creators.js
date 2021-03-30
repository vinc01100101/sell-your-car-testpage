import { ACTIONS } from "./constants";

export const setModal = (modal) => ({
  type: ACTIONS.SET_MODAL,
  payload: modal,
});

/**
 * @param {Object} data `{key, value}
 */
export const setInput = (data) => ({
  type: ACTIONS.SET_INPUT,
  payload: data,
});

export const setDatesArray = () => ({
  type: ACTIONS.SET_DATES_ARRAY,
});

export const setLocationsData = (payload) => ({
  type: ACTIONS.SET_LOCATIONS_DATA,
  payload,
});
export const fetchLocationsData = () => async (dispatch) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const json = await data.json();
  const payload = json.map((data) => data.address.city);
  dispatch(setLocationsData(payload));
};
