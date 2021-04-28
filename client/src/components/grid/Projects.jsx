import React from 'react';
import styled from 'styled-components';
import theme from '../../theme';
import ProjectCard from './ProjectCard';

const Titles = styled.div`
  /* background-color: red; */
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding-bottom: 8px; */
  padding-left: 0px;
  font-size: 20px;
  font-weight: 300;
  /* border-bottom: 1px solid ${theme.color.border.primary}; */
  @media (min-width: 544px) {
    /* background-color: yellow; */
    padding-left: 20px;
    margin-top: 20px;
    font-size: 24px;
  }
  @media (min-width: 768px) {
    /* background-color: dodgerblue; */
    padding-left: 20px;
    margin-top: 20px;
    font-size: 17px;
    /* text-align: center; */
  }
  @media (min-width: 1024px) {
    /* background-color: orangered; */
    margin-top: 30px;
    padding-left: 20px;
    font-size: 24px;
    /* text-align: center; */
  }
`;

const Projects = () => {
  return (
    <>
      <Titles>Web development</Titles>

      <ProjectCard
        name="Videogames-app"
        description="Este proyecto fue creado con mucha energía..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1618768943/VideoGames/ny8phfrkafw9xurlu3ud.jpg"
        appLink="link"
        linkTooltipText="app"
        githubLink="link"
      />
      <ProjectCard
        name="Dairy-app"
        description="..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1617743330/VideoGames/jo1p08vzjq4gygwwmrcz.jpg"
        appLink="link"
        linkTooltipText="app"
        githubLink="link"
      />
      <ProjectCard
        name="Other-app"
        description="..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1618584671/VideoGames/kprefxpjorhwgpu3yo1m.jpg"
        appLink="link"
        linkTooltipText="app"
        githubLink="link"
      />
      <Titles>Electronic development</Titles>
      <ProjectCard
        name="Other-app"
        description="..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1618584671/VideoGames/kprefxpjorhwgpu3yo1m.jpg"
        appLink="link"
        linkTooltipText="video"
        githubLink="link"
      />
      <ProjectCard
        name="Other-app"
        description="..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1618584671/VideoGames/kprefxpjorhwgpu3yo1m.jpg"
        appLink="link"
        linkTooltipText="video"
        // githubLink="link"
      />
    </>
  );
};

export default Projects;
