import { createSlice } from '@reduxjs/toolkit';

const subredditSlice = createSlice({
  name: 'subreddits',
  initialState: [],
  reducers: {
    addSubreddit: (state, action) => {
      state.push({
        name: action.payload.name,
        category: action.payload.category
      });
    }
  }
});

export const { addSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;