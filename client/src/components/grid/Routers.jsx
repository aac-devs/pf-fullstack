import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Contact from './Contact';
import Projects from './Projects';
import Skills from './Skills';

const Container = styled.div`
  /* background-color: magenta; */
  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Routers = () => {
  return (
    <Container>
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Container>
  );
};

export default Routers;
