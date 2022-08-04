import React, { forwardRef } from "react";
import styled from "styled-components";
import { Button, DetailBtn } from "./UI/Button";
import { dateFormat } from "../util/dateFormat";

import { useSelector, useDispatch } from "react-redux";
import { clipItem, unclipItem } from "../reducer/clipSlice";

const ListItem = forwardRef(({ data }, ref) => {
  const dispatch = useDispatch();
  const clipList = useSelector((state) => state.clipSlice);
  const isCliped = (item) => clipList.some((clip) => clip.id === item.id);
  const pubDate = dateFormat(data);

  // Clip event handler
  const handleClip = () => {
    if (isCliped(data)) {
      dispatch(unclipItem(data));
    } else {
      dispatch(clipItem(data));
    }
  };

  return (
    <Item ref={ref}>
      <h4>{data.title}</h4>
      <p>{pubDate}</p>
      <Button onClick={handleClip} isCliped={isCliped(data)}>
        {isCliped(data) ? "Clipped" : "Clip"}
      </Button>
      <DetailBtn href={data.url} target="_blank" rel="noreferrer noopener">
        See detail
      </DetailBtn>
    </Item>
  );
});

export default ListItem;

const Item = styled.li`
  width: 700px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 50px;
  }
  h4 {
    font-size: 18px;
    margin: 0;
  }
  p {
    font-size: 14px;
    color: #888;
    margin-top: 5px;
  }
`;
