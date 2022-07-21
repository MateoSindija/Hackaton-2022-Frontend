import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ILogin,
  ILoginResult,
  IRegister,
  IRegisterResult,
} from "../models/auth.model";

export const api = createApi({
  reducerPath: "hackatonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "url servera",
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-access-token", "jwtToken");

      return headers;
    },
  }),
  tagTypes: ["tagovi"],
  endpoints: (builder) => ({
    //register api
    register: builder.mutation<IRegisterResult, IRegister>({
      query: (registerData) => ({
        url: `/register`,
        method: "POST",
        body: { ...registerData },
      }),
    }),

    //login api
    login: builder.mutation<ILoginResult, ILogin>({
      query: (loginData) => ({
        url: `/login`,
        method: "POST",
        body: { ...loginData },
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = api;
