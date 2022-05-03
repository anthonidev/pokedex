import { AppDispatch } from "../configureStore";
import { offAlert, onAlert } from "../slice/alertSlice";

export const setAlert = (msg: (string | null), type: (string | null), timeout = 5000) => (dispatch: AppDispatch) => {
    dispatch(onAlert({ msg, type }));
    return setTimeout(() => dispatch(offAlert()), timeout);
}