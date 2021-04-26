import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/translucent.css';
import 'tippy.js/themes/material.css';
import 'tippy.js/themes/light-border.css';
import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import {
  ligthColor,
  linkColor,
  textoSecColor,
  borderColor,
  textoColor,
  darkColor,
} from '../../global-styles';

const Container = styled.div``;

const ProjectContainer = styled.div`
  color: ${ligthColor};
  border-bottom: 1px solid ${borderColor};
  padding: 24px 0;
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'title links'
    'description description';

  .project-title {
    grid-area: title;
    height: 30px;
    /* background-color: wheat; */
    font-size: 20px;
    font-weight: 600;
    color: ${linkColor};
    margin-bottom: 4px;
    span {
      cursor: cell;
    }
  }

  .project-description {
    grid-area: description;
    /* background-color: lime; */
    font-size: 12px;
    color: ${textoSecColor};
    margin-top: 8px;
  }

  .project-links {
    grid-area: links;
    /* background-color: dodgerblue; */
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;

    a {
      /* background-color: yellow; */
      color: ${textoColor};
      margin-left: 10px;
      /* cursor: pointer; */
    }
  }
`;

const Image = styled.div`
  display: inline-block;
  background-image: url(${(props) => props.url});
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  height: 150px;
  width: 150px;
`;

const ImageTooltip = ({ imageUrl }) => {
  return <Image url={imageUrl} />;
};

const ProjectCard = ({ name, description, image, appLink, githubLink }) => {
  return (
    <Container>
      <ProjectContainer>
        <div className="project-title">
          <Tippy
            content={<ImageTooltip imageUrl={image} />}
            placement="right"
            arrow
            // theme="light"
            theme="translucent"
          >
            <span>{name}</span>
          </Tippy>
        </div>

        <div className="project-description">{description}</div>
        <div className="project-links">
          <Tippy
            interactiveBorder={20}
            delay={100}
            placement="top"
            content={<span style={{ color: `${darkColor}` }}>Open app</span>}
            theme="light"
          >
            <a href={appLink}>
              <BiLinkExternal
                size="1.5rem"
                style={{
                  verticalAlign: 'middle',
                }}
              />
            </a>
          </Tippy>
          <Tippy
            interactiveBorder={20}
            delay={100}
            placement="top"
            content={
              <span style={{ color: `${darkColor}` }}>Open repository</span>
            }
            theme="light"
          >
            <a href={githubLink}>
              <SiGithub
                size="1.3rem"
                style={{
                  verticalAlign: 'middle',
                }}
              />
            </a>
          </Tippy>
        </div>
      </ProjectContainer>
    </Container>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  appLink: PropTypes.string,
  githubLink: PropTypes.string,
};

ProjectCard.defaultProps = {
  name: 'project name',
  description: 'project description',
  image:
    'https://res.cloudinary.com/aac-devs-data/image/upload/v1619410092/portfolio/no-image_tmxdyx.jpg',
  appLink: '/',
  githubLink: '/',
};

ImageTooltip.propTypes = {
  imageUrl: PropTypes.string,
};

ImageTooltip.defaultProps = {
  imageUrl: '',
};

export default ProjectCard;
