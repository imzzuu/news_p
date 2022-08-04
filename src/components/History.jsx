import React from "react"
import { useSelector } from "react-redux";
import styled from "styled-components";

const History = () => {
  const history = useSelector((state) => state.searchSlice);

  return (
    <HistoryDiv>
      <p>Recent Search Words</p>
      { (history.length) 
      ? history.map((value, i) => (
        <p key={i}>
          {value}
        </p>
      ))
      : <p>No Search Words</p>}
      
    </HistoryDiv>
  )
}

export default History;

const HistoryDiv = styled.div`
  position: absolute;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  padding: 15px 20px;
  width: 700px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
  &>p:first-child {
    color: #888;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    height: 25px;
  }
`;
