import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAssign } from "../models/assign.model";
import {
  ILogin,
  ILoginResult,
  IRegister,
  IRegisterResult,
} from "../models/auth.model";
import { IEvent } from "../models/event.model";

export const api = createApi({
  reducerPath: "hackatonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "url servera",
    prepareHeaders: (headers, { getState }) => {
      headers.set("x-access-token", "jwtToken");

      return headers;
    },
  }),

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

    //organize cleanin
    organizeClean: builder.mutation<void, IEvent>({
      query: (eventData) => ({
        url: "/event",
        method: "POST",
        body: { ...eventData },
      }),
    }),

    //set team
    assignTeam: builder.mutation<void, IAssign>({
      query: (assignData) => ({
        url: `/tickets/${assignData.ticketID}`,
        method: "PATCH",
        body: { user_id: assignData.user_id },
      }),
    }),

    //delete ticket
    deleteTicket: builder.mutation<void, string>({
      query: (ticketID) => ({
        url: `/tickets/${ticketID}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useOrganizeCleanMutation,
  useAssignTeamMutation,
  useDeleteTicketMutation,
} = api;
