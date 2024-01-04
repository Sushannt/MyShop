import { configureStore } from "@reduxjs/toolkit";
import loginApi from "./slices/loginApiSlice";
import productsApi from "./slices/productsApiSlice";
import authSliceReducer from "./slices/authSlice";
import filterSliceReducer from "./slices/filterSlice";
import cartSliceReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    [loginApi.reducerPath]: loginApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    auth: authSliceReducer,
    filter: filterSliceReducer,
    cart: cartSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loginApi.middleware, productsApi.middleware),

  devTools: true,
});

export default store;
