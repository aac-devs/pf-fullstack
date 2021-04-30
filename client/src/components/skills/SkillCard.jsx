import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import styled, { ThemeContext } from 'styled-components';
import { useSelector } from 'react-redux';

const Container = styled.div`
  display: inline-block;
  background-color: ${(props) => props.theme.color.bg.skill};
  border: 1px solid ${(props) => props.theme.color.border.primary};
  padding: 10px;
  margin: 0 10px 10px 0;
  border-radius: 6px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.url});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 70px;
  width: 70px;
  transition: border 0.5s;
  border: none;
`;

const SkillCard = ({ name, image }) => {
  const theme = useContext(ThemeContext);
  const { mode } = useSelector((state) => state.ui);
  return (
    <Tippy
      interactiveBorder={20}
      delay={100}
      placement="top"
      content={
        <span style={{ color: `${theme.color.bg.primary}` }}>{name}</span>
      }
      theme={mode === 'dark' && 'light'}
    >
      <Container>
        <Image url={image} />
      </Container>
    </Tippy>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

SkillCard.defaultProps = {
  name: 'skill name',
  image: 'skill image',
};

export default SkillCard;
