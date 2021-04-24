import React from 'react';
import { Link } from 'react-router-dom';
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
`;

const Tab = styled(Link)`
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
  border: 0;
  border-bottom: 2px solid transparent;
  transition: all 0.3s;
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

const Tabs = () => {
  return (
    <Container>
      <Tab to="/projects">
        <i className="fas fa-project-diagram" />
        <span>&nbsp;&nbsp;Projects</span>
      </Tab>
      <Tab to="/skills">
        <i className="fas fa-user-cog" />
        <span>&nbsp;&nbsp;Skills</span>
      </Tab>
      <Tab to="/contact">
        <i className="fab fa-wpforms" />
        <span>&nbsp;&nbsp;Contact</span>
      </Tab>
    </Container>
  );
};

export default Tabs;
