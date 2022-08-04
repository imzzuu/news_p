import { createSlice } from "@reduxjs/toolkit";

const clipSlice = createSlice({
  name: "clip",
  initialState: [],
  reducers: {
    clipItem: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    },
    unclipItem: (state, action) => {
      return state.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const { clipItem, unclipItem } = clipSlice.actions;
export default clipSlice.reducer;
