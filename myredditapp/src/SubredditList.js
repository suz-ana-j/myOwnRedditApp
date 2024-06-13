import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSubreddit } from './subredditSlice';


const SubredditList = () => {
  const subreddits = useSelector((state) => state.subreddit.subreddits);
  const dispatch = useDispatch();

  const handleRemoveSubreddit = (subreddit) => {
    dispatch(removeSubreddit(subreddit));
  };

  return (
    <ul>
      {subreddits.map((subreddit) => (
        <li key={subreddit}>
          {subreddit}
          <button onClick={() => handleRemoveSubreddit(subreddit)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default SubredditList;

