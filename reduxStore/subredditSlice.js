import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subreddits: [],
};

const subredditSlice = createSlice({
  name: 'subreddit',
  initialState,
  reducers: {
    addSubreddit(state, action) {
      state.subreddits.push(action.payload);
    },
    removeSubreddit(state, action) {
      state.subreddits = state.subreddits.filter(subreddit => subreddit !== action.payload);
    },
    // Additional reducers here
  },
});

export const { addSubreddit, removeSubreddit } = subredditSlice.actions;
export default subredditSlice.reducer;