import React from "react";
import ListItem from "../components/ListItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Clip = () => {
  const clipData = useSelector((state) => state.clipSlice);

  return (
    <ListWrapper>
      {clipData.length !== 0 ? (
        clipData.map((item) => <ListItem key={item.id} data={item} />)
      ) : (
        <p>No articles were clipped.</p>
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  & > p {
    font-size: 20px;
    font-weight: 600;
  }
`;

export default Clip;
