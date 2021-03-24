import { ACTIONS } from "./constants";

export const setModal = (modal) => ({
  type: ACTIONS.SET_MODAL,
  payload: modal,
});

/**
 *
 * @param {Object} data `{key, value}
 *
 */
export const setInput = (data) => ({
  type: ACTIONS.SET_INPUT,
  payload: data,
});
