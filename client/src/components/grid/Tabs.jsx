import React from 'react';
import { NavLink } from 'react-router-dom';

import { FaUserCog, FaWpforms } from 'react-icons/fa';
// import { MdAlarm } from 'react-icons/md';
import { GoProject } from 'react-icons/go';
import styled from 'styled-components';
import { textoColor, textoSecColor } from '../../global-styles';

/*
Projects:
<i class="fas fa-project-diagram"></i>
Rayo:
<i class="fas fa-bolt"></i>
Github:
<i class="fab fa-github"></i>
Linkedin
<i class="fab fa-linkedin"></i>
<i class="fab fa-linkedin-in"></i>
Forms:
<i class="fab fa-wpforms"></i>
Tools:
<i class="fas fa-user-cog"></i>
*/

const Container = styled.div`
  /* background-color: springgreen; */
  width: 75%;
  display: flex;
  justify-content: flex-start;

  .active {
    color: ${textoColor};
    font-weight: 600;
    border-bottom: 2px solid #f9826c;
    &:hover {
      border-bottom: 2px solid #f9826c;
    }
  }
`;

const Tab = styled(NavLink)`
  /* background-color: red; */
  /* height: 30px; */
  /* color: #fff; */
  color: ${textoSecColor};
  text-decoration: none;
  font-size: 14px;
  padding: 8px 16px;
  text-align: center;
  line-height: 30px;
  white-space: nowrap;
  /* border: 0; */
  /* border-bottom: 2px solid transparent; */
  transition: all 0.3s;
  span {
    /* background-color: deepskyblue; */
  }
  /* &::before {
    color: ${textoSecColor};
  } */
  &:hover {
    span {
      color: ${textoColor};
    }
    border-bottom: 2px solid ${textoColor};
  }
  i {
    /* background-color: lime; */
  }
`;

// const Prj = styled(GoProject)``;

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
