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
    baseUrl: "http://127.0.0.1:8000/api",
  }),
  tagTypes: ["Ticket", "Employees"],
  endpoints: (builder) => ({
    //login api
    login: builder.mutation<ILoginResult, ILogin>({
      query: (loginData) => ({
        url: `/login`,
        method: "POST",
        body: { ...loginData },
      }),
    }),

    //get tickets
    tickets: builder.query<any, void>({
      query: () => ({
        url: "/tickets",
        method: "GET",
      }),
      providesTags: ["Ticket"],
    }),

    //organize cleanin
    organizeClean: builder.mutation<void, any>({
      query: (eventData) => ({
        url: "/events",
        method: "POST",
        body: { ...eventData },
      }),
    }),

    //set team
    assignTeam: builder.mutation<void, any>({
      query: (assignData) => ({
        url: `/tickets/${assignData.ticketID}`,
        method: "PUT",
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

    //get employees
    employees: builder.query<any, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Employees"],
    }),

    //new employee
    addEmployee: builder.mutation<any, any>({
      query: (employeeInfo) => ({
        url: "/users",
        method: "POST",
        body: { ...employeeInfo },
      }),
      invalidatesTags: ["Employees"],
    }),
  }),
});

export const {
  useEmployeesQuery,
  useAddEmployeeMutation,
  useTicketsQuery,
  useLoginMutation,
  useOrganizeCleanMutation,
  useAssignTeamMutation,
  useDeleteTicketMutation,
} = api;
