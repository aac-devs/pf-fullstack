import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Contact from '../contact/ContactScreen';
import Projects from '../projects/ProjectScreen';
import Skills from '../skills/SkillScreen';

const Container = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Routers = () => {
  return (
    <Container>
      <Switch>
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/projects" />
      </Switch>
    </Container>
  );
};

export default Routers;
