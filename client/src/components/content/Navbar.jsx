import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ligthColor } from '../../global-styles';

const Container = styled.div`
  /* background-color: wheat; */
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  span {
    a {
      color: ${ligthColor};
      text-decoration: none;
      font-size: 38px;
      font-weight: 700;
    }
  }

  ul {
    display: flex;
    justify-items: space-between;
  }

  li {
    margin-left: 20px;
    list-style: none;

    color: ${ligthColor};
    text-decoration: none;
    font-size: 28px;
    font-weight: 600;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <span>
        <Link to="/">aac-devs</Link>
      </span>

      <ul>
        <li>Theme</li>
        <li>Lang</li>
      </ul>
    </Container>
  );
};

export default Navbar;
