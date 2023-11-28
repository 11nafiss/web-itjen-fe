// Import Api
import { useAppDispatch } from "../hooks/useTypedSelector";
import { loginSlice } from "../features/slice/user.slice";

export const runLogoutTimer = (timer) => {
    const dispatch = useAppDispatch();
    setTimeout(() => {
        dispatch(loginSlice.actions.logout());
    }, timer);
}