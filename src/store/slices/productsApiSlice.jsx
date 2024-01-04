import { BASE_URL } from "../../constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const authToken = getState().auth?.userInfo?.authToken;
    if (authToken) {
      headers.set("Authorization", `Bearer ${authToken}`);
    }
    return headers;
  },
});

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery,
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: `/auth/products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
export default productsApi;
