/* eslint-disable @typescript-eslint/no-explicit-any */
import http from "@/configs/customAxios";
import { IAppResposeBase } from "@/types/AppType";
import { ICurrentUser } from "@/types/auth/AuthType";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }): Promise<IAppResposeBase<ICurrentUser | null>> => {
    try {
      const user: IAppResposeBase<ICurrentUser> = await http.get("/api/auth/get-me");
      return user;
    } catch (error: any) {
      return rejectWithValue(error.response.data) as any;
    }
  }
);

const firstUpdateProfile = createAsyncThunk(
  "auth/firstUpdateProfile",
  async (payload: any, { rejectWithValue }): Promise<IAppResposeBase<ICurrentUser | null>> => {
    try {
      const user: IAppResposeBase<ICurrentUser> = await http.put("/api/auth/update-my-profile", payload);
      return user;
    } catch (error: any) {
      return rejectWithValue(error.response.data) as any;
    }
  }
);

const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (
    payload: {
      oldPassword: string;
      newPassword: string;
    },
    { rejectWithValue }
  ): Promise<IAppResposeBase<ICurrentUser | null>> => {
    try {
      const user: IAppResposeBase<ICurrentUser> = await http.put("/api/auth/change-password", payload);
      return user;
    } catch (error: any) {
      return rejectWithValue(error.response.data) as any;
    }
  }
);

export const authThunks = {
  getCurrentUser,
  firstUpdateProfile,
  changePassword,
};
