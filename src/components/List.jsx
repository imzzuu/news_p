import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ListItem from "./ListItem";
import Loading from "./UI/Loading";
import useNewsSearch from "../hooks/useNewsSearch";

const List = ({ keyword, page, onNextPage }) => {
  const [ref, inView] = useInView();
  const newsListRef = useRef();

  const { newsList, loading, error } = useNewsSearch(keyword, page);

  useEffect(() => {
    if (inView && !loading) {
      onNextPage();
    }
  }, [inView]);

  return (
    <ListWrapper ref={newsListRef}>
      {newsList.map((item, index) =>
        newsList.length - 1 === index ? (
          <ListItem key={item.id} data={item} ref={ref} />
        ) : (
          <ListItem key={item.id} data={item} />
        )
      )}
      {loading && <Loading />}
      {error && (
        <p>
          {"Please try again in a few minutes!"}
        </p>
      )}
    </ListWrapper>
  );
};

export default List;

const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  p {
    font-size: "20px";
    font-weight: 600;
  }
`;
