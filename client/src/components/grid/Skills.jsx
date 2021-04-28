import React from 'react';
// import {
//   SiPostgresql,
//   SiRedux,
//   SiJavascript,
//   SiMongodb,
//   SiStyledComponents,
//   SiReact,
//   SiC,
//   SiJest,
//   SiLinkedin,
//   SiNodeDotJs,
//   SiPostman,
//   SiTypescript,
//   SiWebpack,
// } from 'react-icons/si';
// import { IoLogoNodejs } from 'react-icons/io';
// import { DiPostgresql, DiCss3Full, DiGit, DiGithubBadge } from 'react-icons/di';
import styled from 'styled-components';
import theme from '../../theme';
import SkillCard from './SkillCard';

const Container = styled.div`
  /* background-color: wheat; */
  /* padding-top: 20px; */
`;

const Titles = styled.div`
  /* background-color: red; */
  margin-top: 10px;
  margin-bottom: 10px;
  /* padding-bottom: 8px; */
  padding-left: 0px;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 8px;
  border-bottom: 1px solid ${theme.color.border.secondary};

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

const skillCategories = [
  {
    id: 1,
    name: { eng: 'Programming Language', esp: 'Lenguaje de Programación' },
  },
  {
    id: 2,
    name: { eng: 'Web Technologies', esp: 'Tecnologías Web' },
  },
  {
    id: 3,
    name: { eng: 'Databases', esp: 'Bases de datos' },
  },
];

const skills = [
  {
    id: 1,
    categoryId: 1,
    name: 'JavaScript',
    image:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619359391/portfolio/javascript_ieaf2h.png',
  },
  {
    id: 2,
    categoryId: 2,
    name: 'CSS',
    image:
      'https://res.cloudinary.com/aac-devs-data/image/upload/v1619358722/portfolio/css_dykwnz.png',
  },
];

const Skills = () => {
  return (
    <Container>
      <Titles>{skillCategories[0].name.eng}</Titles>
      <SkillCard name={skills[0].name} image={skills[0].image} />
      <SkillCard name={skills[1].name} image={skills[1].image} />
      <Titles>{skillCategories[1].name.eng}</Titles>
      <SkillCard name={skills[1].name} image={skills[1].image} />
    </Container>
  );
};

export default Skills;
