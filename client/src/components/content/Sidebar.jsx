import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darkColor, ligthColor } from '../../global-styles';

const Container = styled.div`
  /* background-color: dodgerblue; */
  background-color: ${darkColor};
  height: 100%;
  /* border-right: 4px solid black; */
  ul {
    padding: 40px 0 0 30px;
    /* background-color: pink; */
  }
  a {
    text-decoration: none;
    font-size: 32px;
    display: block;
    text-transform: capitalize;
    font-weight: 600;
    /* margin: 0 20px 0 10px; */
    padding: 10px 30px;
    border-top-left-radius: 13px;
    border-bottom-left-radius: 13px;
    /* &:hover{
    background-color: #ccc;
      transition: background-color 0.3s;
    } */
    &:active {
      /* color: blue; */
    }
  }
`;

// let scaleValue = 1.1;
// {
//   home: 1.1,
// };

const Li = styled.li`
  background-color: ${darkColor};
  /* padding: 5px; */
  margin-bottom: 20px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  /* border-bottom-right-radius: -15px; */
  border: 2px solid ${ligthColor};
  border-right: none;
  list-style: none;
  /* transition: all 0.5s; */
  /* box-shadow: -5px 3px 7px rgba(0, 0, 0, 0.5); */
`;

const resetState = {
  home: false,
  projects: false,
  skills: false,
  contact: false,
};

const Sidebar = () => {
  const [selected, setSelected] = useState({
    home: true,
    projects: false,
    skills: false,
    contact: false,
  });

  const handleSelectClick = (option) => {
    setSelected({
      ...resetState,
      [option]: !selected[option],
    });
  };

  return (
    <Container>
      <ul>
        <Li
          className={selected.home ? 'selected' : 'non-selected'}
          onClick={() => handleSelectClick('home')}
        >
          <Link to="/">home</Link>
        </Li>
        <Li
          className={selected.projects ? 'selected' : 'non-selected'}
          // seleccion={selected.projects}
          onClick={() => handleSelectClick('projects')}
        >
          <Link to="/projects">projects</Link>
        </Li>
        <Li
          className={selected.skills ? 'selected' : 'non-selected'}
          // seleccion={selected.skills}
          onClick={() => handleSelectClick('skills')}
        >
          <Link to="/skills">skills</Link>
        </Li>
        <Li
          className={selected.contact ? 'selected' : 'non-selected'}
          // seleccion={selected.contact}
          onClick={() => handleSelectClick('contact')}
        >
          <Link to="/contact">contact</Link>
        </Li>
      </ul>
    </Container>
  );
};

export default Sidebar;
