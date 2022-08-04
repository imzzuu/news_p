import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateHistory } from "../reducer/searchSlice";
import History from "./History";

import styled from "styled-components";

const Input = ({ onSearch }) => {
  const [searchWord, setSearchWord] = useState("");
  const [focusFlag, setfocusFlag] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setfocusFlag(true);
    let timerId = setTimeout(() => {
      if (searchWord) {
        dispatch(updateHistory(searchWord.toLowerCase()));
      }
      onSearch(searchWord);
      setfocusFlag(false);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchWord, onSearch, dispatch]);

  // 1 .Case Event : Typing Keyborad ( Call API after 0.5s )
  const handleChange = (event) => {
    setSearchWord(event.target.value);
  };

  // 2. Case Event : focusd SearchBar
  const showHistory = () => {
    setfocusFlag(true);
  };

  const closeHistory = () => {
    setfocusFlag(false);
  };

  return (
    <div>
      <SearchBar
        type="text"
        placeholder="Search..."
        value={searchWord}
        onChange={handleChange}
        onFocus={showHistory}
        onBlur={closeHistory}
      />

      {focusFlag && <History />}
    </div>
  );
};

export default Input;

const SearchBar = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 18px;
  padding: 20px;
  height: 25px;
  width: 700px;
`;
