import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import styled from 'styled-components';
import theme from '../../theme';

const Image = styled.div`
  display: inline-block;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 70px;
  width: 70px;
  margin: 0 10px 10px 0;
  transition: border 0.5s;
  border: none;
  &:hover {
    border-radius: 5px;
  }
`;

const SkillCard = ({ name, image }) => {
  const darkTheme = true;

  return (
    <Tippy
      interactiveBorder={20}
      delay={100}
      placement="top"
      content={
        <span style={{ color: `${theme.color.bg.primary}` }}>{name}</span>
      }
      theme={darkTheme && 'light'}
    >
      <Image url={image} />
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
