import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import 'tippy.js/themes/translucent.css';
import { BiLinkExternal } from 'react-icons/bi';
import { SiGithub } from 'react-icons/si';
import { useSelector } from 'react-redux';

const Container = styled.div``;

const ProjectContainer = styled.div`
  border: 1px solid ${(props) => props.theme.color.border.secondary};
  background-color: ${(props) => props.theme.color.bg.tertiary};
  margin-bottom: 15px;
  border-radius: 6px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 80px;
  grid-template-rows: repeat(2, auto);
  grid-template-areas:
    'title links'
    'description description';

  .project-title {
    grid-area: title;
    height: 30px;
    color: ${(props) => props.theme.color.text.link};
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 4px;
    span {
      cursor: cell;
    }
  }

  .project-description {
    color: ${(props) => props.theme.color.text.secondary};
    grid-area: description;
    font-size: 14px;
    margin-top: 8px;
  }

  .project-links {
    grid-area: links;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    a {
      color: ${(props) => props.theme.color.icon.tertiary};
      margin-left: 10px;
      transition: color 0.3s;
      &:hover {
        color: ${(props) => props.theme.color.icon.primary};
      }
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

const ProjectCard = ({
  name,
  description,
  image,
  appLink,
  linkTooltipText,
  githubLink,
}) => {
  const { mode, language } = useSelector((state) => state.ui);
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <ProjectContainer>
        <div className="project-title">
          <Tippy
            content={<ImageTooltip imageUrl={image} />}
            placement="right"
            arrow
            theme="translucent"
          >
            <span>{name}</span>
          </Tippy>
        </div>

        <div className="project-description">{description}</div>
        <div className="project-links">
          {appLink !== '' && (
            <Tippy
              interactiveBorder={20}
              delay={100}
              placement="top"
              content={
                <span
                  style={{
                    color: `${theme.color.bg.primary}`,
                  }}
                >
                  {language === 'eng'
                    ? `Open ${linkTooltipText}`
                    : `Abrir ${linkTooltipText}`}
                </span>
              }
              theme={mode === 'dark' && 'light'}
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
          )}
          {githubLink !== '' && (
            <Tippy
              interactiveBorder={20}
              delay={100}
              placement="top"
              content={
                <span
                  style={{
                    color: `${theme.color.bg.primary}`,
                  }}
                >
                  {language === 'eng' ? 'Open Repository' : 'Abrir Repositorio'}
                </span>
              }
              theme={mode === 'dark' && 'light'}
            >
              <a href={githubLink}>
                <SiGithub size="1.3rem" style={{ verticalAlign: 'middle' }} />
              </a>
            </Tippy>
          )}
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
  linkTooltipText: PropTypes.string,
  githubLink: PropTypes.string,
};

ProjectCard.defaultProps = {
  name: 'project name',
  description: 'project description',
  image:
    'https://res.cloudinary.com/aac-devs-data/image/upload/v1619410092/portfolio/no-image_tmxdyx.jpg',
  appLink: '',
  linkTooltipText: '',
  githubLink: '',
};

ImageTooltip.propTypes = {
  imageUrl: PropTypes.string,
};

ImageTooltip.defaultProps = {
  imageUrl: '',
};

export default ProjectCard;
