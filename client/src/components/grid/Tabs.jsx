import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCog, FaWpforms } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import styled from 'styled-components';
import theme from '../../theme';

const Container = styled.div`
  /* background-color: springgreen; */
  width: 75%;
  display: flex;
  justify-content: flex-start;

  .active {
    font-weight: 600;
    /* border-bottom: 1px solid #f9826c; */
    color: ${theme.color.text.primary};
    border-bottom: 1px solid ${theme.color.bg.canvas};
    @media (min-width: 544px) {
      border-bottom: 1px solid ${theme.color.bg.primary};
    }

    &:hover {
      color: ${theme.color.text.primary};
      /* border-bottom: 2px solid #f9826c; */
    }
  }
`;

const Tab = styled(NavLink)`
  /* background-color: red; */
  color: ${theme.color.text.tertiary};
  text-decoration: none;
  font-size: 14px;
  padding: 8px 16px;
  text-align: center;
  line-height: 30px;
  white-space: nowrap;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid ${theme.color.border.primary};
  transition: all 0.3s;
  margin-right: 5px;
  span {
    /* background-color: deepskyblue; */
  }
  &:hover {
    span {
      color: ${theme.color.text.primary};
    }
  }
  i {
    /* background-color: lime; */
  }
`;

const Tabs = () => {
  return (
    <Container>
      <Tab to="/projects" activeClassName="active" style={{ width: '112px' }}>
        <GoProject size="18px" style={{ verticalAlign: 'middle' }} />
        <span>&nbsp;&nbsp;Projects</span>
      </Tab>
      <Tab to="/skills" activeClassName="active" style={{ width: '92px' }}>
        <FaUserCog size="18px" style={{ verticalAlign: 'middle' }} />
        <span>&nbsp;&nbsp;Skills</span>
      </Tab>
      <Tab to="/contact" activeClassName="active" style={{ width: '110px' }}>
        <FaWpforms size="18px" style={{ verticalAlign: 'middle' }} />
        <span>&nbsp;&nbsp;Contact</span>
      </Tab>
    </Container>
  );
};

export default Tabs;
