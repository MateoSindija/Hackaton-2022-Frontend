import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PURGE } from "redux-persist";

export interface IUserState {
  id: string | undefined;
  type: string | undefined;
  token: string | undefined;
}

const initialState: IUserState = {
  id: undefined,
  type: undefined,
  token: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.id = action.payload.id;
      state.type = action.payload.type;
      state.token = action.payload.token;

      state ? console.log(state) : console.log("error");
    },

    logout: (state, action: PayloadAction<void>) => {
      state = { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.id = undefined;
      state.type = undefined;
      state.token = undefined;
      state ? console.log(state) : console.log("error");
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUserData, logout } = userSlice.actions;

export default userSlice.reducer;
