import styled from "styled-components";
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <HeaderDiv>
      <div>
        <StyledNavLink to="/">
          Home
        </StyledNavLink>
        <StyledNavLink to="/clip">
          Clip
        </StyledNavLink>
      </div>
    </HeaderDiv>
  )
};

export default Header;

let HeaderDiv = styled.div`
  width:100%;
  height:70px;
  display:flex;
  justify-content:center;
  align-items:center;
  border-bottom:1px solid #ddd;
  margin-bottom: 50px;
  background:#fff;
`

let StyledNavLink = styled(NavLink)`
  border: none;
  background: none;
  font-size: 16px;
  font-weight: bold;
  color: #2563eb;
  cursor: pointer;
  padding: 30px 30px 5px 30px;
  text-decoration: none;
  
  &:active,
  &:hover{
    border-bottom:2px solid #2563eb;
  }

  &.active {
    border-bottom:2px solid #2563eb;
  }
`

