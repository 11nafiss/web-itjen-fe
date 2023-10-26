import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./features/slice/banner.slice";
import articleReducer from "./features/slice/article.slice";
import auditoriaReducer from "./features/slice/auditoria.slice";
import eselonReducer from "./features/slice/eselon.slice";
import featureReducer from "./features/slice/feature.slice";
import imageReducer from "./features/slice/image.slice";
import menuReducer from "./features/slice/menu.slice";
import placemReducer from "./features/slice/placem.slice";
import reportReducer from "./features/slice/report.slice";
import userReducer from "./features/slice/user.slice";

const store = configureStore({
  reducer: {
    article: articleReducer,
    auditoria: auditoriaReducer,
    banner: bannerReducer,
    eselon: eselonReducer,
    feature: featureReducer,
    image: imageReducer,
    menu: menuReducer,
    placem: placemReducer,
    report: reportReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
