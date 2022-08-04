import React, { useState, useCallback } from "react";

import styled from "styled-components";
import Input from "../components/Input";
import List from "../components/List";

const Home = () => {
  // List로 보낼 Keyword
  const [searchWord, setSearchWord] = useState("");
  const [page, setPage] = useState(0);

  const handleSearchWord = useCallback((word) => {
    setSearchWord(word);
    setPage(0);
  }, []);

  const nextPage = useCallback(() => {
    setPage((prevPage) => prevPage + 1);
  }, []);

  return (
    <HomeDiv>
      <Input onSearch={handleSearchWord} />
      {searchWord && (
        <List
          keyword={searchWord.toLowerCase()}
          page={page}
          onNextPage={nextPage}
        />
      )}
    </HomeDiv>
  );
};

export default Home;

const HomeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
