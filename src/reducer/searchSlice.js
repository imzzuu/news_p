import { createSlice } from "@reduxjs/toolkit";

const historyMax = 5;

const searchSlice = createSlice({
  name: "search",
  initialState: [],
  reducers: {
    updateHistory: (state, action) => {
      if (state.includes(action.payload)) {
        let temp = [...state];
        temp.splice(state.indexOf(action.payload), 1);
        return [action.payload, ...temp];
      }

      // 최대 개수이면 삭제하고 값 넣어주기
      return (state.length === historyMax) 
      ? [action.payload, ...state.slice(0, state.length-1)]
      : [action.payload, ...state];
    },
  },
});

export const { updateHistory } = searchSlice.actions;
export default searchSlice.reducer;
