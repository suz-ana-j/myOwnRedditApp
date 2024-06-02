import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSubreddit } from './subredditSlice';

const AddSubredditForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addSubreddit(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter subreddit name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Add Subreddit</button>
    </form>
  );
};

export default AddSubredditForm;
