import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ILogin, IRegister } from "../models/auth.model";
import { useLoginMutation } from "./api";

interface InitialState {
  token: string | null;
  id: string | null;
  loading: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (loginInfo: ILogin) => {
    const [signIn, { data: loginResult }] = useLoginMutation();
    await signIn(loginInfo);
    return loginResult;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, id: null, loading: "idle" } as InitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = "done";

      state.token = action.payload?.token ?? "";
      state.id = action.payload?.id ?? "";
    });
  },
});

export default authSlice.reducer;
