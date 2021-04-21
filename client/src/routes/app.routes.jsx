import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  Contact,
  Home,
  Navbar,
  Projects,
  Skills,
  Sidebar,
  Footer,
} from '../components';
import { darkColor, ligthColor } from '../global-styles';

const Container = styled.div`
  /* background-color: lime; */
  display: grid;
  width: 100%;
  height: 100%;
  min-height: 100%;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr 70px;
  grid-template-areas: 'header header' 'sidebar main' 'footer footer';

  header {
    grid-area: header;
    background-color: thistle;
    height: 100%;
    box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.5);
    background-color: ${darkColor};
    border-bottom: 2px solid ${ligthColor};
  }

  aside {
    grid-area: sidebar;
    /* background-color: gold; */
    height: 100%;
    /* box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.5); */
    border-right: 2px solid ${ligthColor};
  }

  main {
    grid-area: main;
    /* background-color: ${ligthColor}; */
    background-color: ${darkColor};
    height: 100%;
  }

  footer {
    grid-area: footer;
    /* background-color: purple; */
    background-color: ${darkColor};
    border-top: 2px solid ${ligthColor};

    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AppRouter = () => {
  return (
    <Container>
      <Router>
        <header className="header">
          <Navbar />
        </header>
        <aside className="sidebar">
          <Sidebar />
        </aside>
        <main className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </Router>
    </Container>
  );
};

export default AppRouter;
