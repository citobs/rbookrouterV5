import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  li {
    padding: 4px;
    margin: 5px;
    background-color: #f0f0f0;
    display: inline-block;

    &.active {
      background-color: #ccc;
    }
  }
`;

function BookMenu({ url }) {
  const location = useLocation();
  // console.log(location);

  return (
    <StyledUl>
      <ul>
        <li className={(location.pathname === url && "active").toString()}>
          <Link to={`${url}`}>일반정보</Link>
        </li>
        <li
          className={(
            location.pathname === `${url}/authors` && "active"
          ).toString()}
        >
          <Link to={`${url}/authors`}>작가정보</Link>
        </li>
        <li
          className={(
            location.pathname === `${url}/photos` && "active"
          ).toString()}
        >
          <Link to={`${url}/photos`}>작가사진</Link>
        </li>
      </ul>
    </StyledUl>
  );
}

export default BookMenu;
