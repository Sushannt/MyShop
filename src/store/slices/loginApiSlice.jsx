import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../constants";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
});

const loginApi = createApi({
  reducerPath: "login",
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...data },
      }),
      transformResponse: (response) => {
        const userData = {
          name: response.firstName,
          profile: response.image,
          authToken: response.token,
        };
        return userData;
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
export default loginApi;
