import styled from "styled-components";

export const Button = styled.button`
  margin-right: 10px;
  padding: 5px 12px;
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #2563eb;
    background: #2563eb;
    color: #fff;
  }
  border: ${(props) => (props.isCliped ? "1px solid #2563eb;" : "")};
  background: ${(props) => (props.isCliped ? "#2563eb;" : "")};
  color: ${(props) => (props.isCliped ? "#fff;" : "")};
`;

export const DetailBtn = styled.a`
  background-color: #fff;
  color: black;
  text-decoration: none;
  font-size: 13.2px;
  margin-right: 10px;
  padding: 5px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border: 1px solid #2563eb;
    background: #2563eb;
    color: #fff;
  }
`;
