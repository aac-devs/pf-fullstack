import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <ProjectCard
        name="Videogames-app"
        description="Este proyecto fue creado con mucha energía..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1618768943/VideoGames/ny8phfrkafw9xurlu3ud.jpg"
      />
      <ProjectCard
        name="Dairy-app"
        description="..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1617743330/VideoGames/jo1p08vzjq4gygwwmrcz.jpg"
      />
      <ProjectCard
        name="Other-app"
        description="..."
        image="https://res.cloudinary.com/aac-devs-data/image/upload/v1618584671/VideoGames/kprefxpjorhwgpu3yo1m.jpg"
      />
    </>
  );
};

export default Projects;
