import { configureStore } from "@reduxjs/toolkit";
import ThunkMiddleware from "redux-thunk";
import carouselReducer from "./features/slice/carousel.slice";
import articleReducer from "./features/slice/article.slice";
import auditoriaReducer from "./features/slice/auditoria.slice";
import eselonReducer from "./features/slice/eselon.slice";
import featureReducer from "./features/slice/feature.slice";
import imageReducer from "./features/slice/image.slice";
import menuReducer from "./features/slice/menu.slice";
import placemReducer from "./features/slice/placem.slice";
import userReducer from "./features/slice/user.slice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    auditoria: auditoriaReducer,
    carousel: carouselReducer,
    eselon: eselonReducer,
    feature: featureReducer,
    image: imageReducer,
    menu: menuReducer,
    placem: placemReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
