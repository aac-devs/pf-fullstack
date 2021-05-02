import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserCog, FaWpforms } from 'react-icons/fa';
import { GoProject } from 'react-icons/go';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-start;
  .active {
    font-weight: 600;
    border-bottom: 2px solid #f9826c;
    color: ${(props) => props.theme.color.text.primary};
    &:hover {
      color: ${(props) => props.theme.color.text.primary};
      border-bottom: 2px solid #f9826c;
    }
  }
`;

const Tab = styled(NavLink)`
  color: ${(props) => props.theme.color.text.tertiary};
  height: 48px;
  text-decoration: none;
  font-size: 13px;
  padding: 8px 8px;
  text-align: center;
  line-height: 30px;
  white-space: nowrap;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  transition: all 0.3s;
  @media (min-width: 544px) {
    padding: 8px 12px;
    font-size: 14px;
  }
  span {
  }
  &:hover {
    border-bottom: 2px solid ${(props) => props.theme.color.text.primary};
    span {
      color: ${(props) => props.theme.color.text.primary};
    }
  }
`;

const Tabs = () => {
  const { language } = useSelector((state) => state.ui);
  return (
    <Container>
      <Tab to="/projects" activeClassName="active">
        <GoProject size="18px" style={{ verticalAlign: 'middle' }} />
        <span>
          &nbsp;&nbsp;{language === 'eng' ? 'Experience' : 'Experiencia'}
        </span>
      </Tab>
      <Tab to="/skills" activeClassName="active">
        <FaUserCog size="18px" style={{ verticalAlign: 'middle' }} />
        <span>&nbsp;&nbsp;{language === 'eng' ? 'Skills' : 'Destrezas'}</span>
      </Tab>
      <Tab to="/contact" activeClassName="active">
        <FaWpforms size="18px" style={{ verticalAlign: 'middle' }} />
        <span>&nbsp;&nbsp;{language === 'eng' ? 'Contact' : 'Contacto'}</span>
      </Tab>
    </Container>
  );
};

export default Tabs;
