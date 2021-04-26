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

import { borderColor, textoColor } from '../../global-styles';
import SkillCard from './SkillCard';

const Container = styled.div`
  color: ${textoColor};
  /* background-color: wheat; */
  /* padding: 10px; */
  padding-top: 20px;
`;

const Titles = styled.div`
  /* background-color: red; */
  margin-bottom: 10px;
  padding-bottom: 8px;
  padding-left: 20px;
  font-size: 24px;
  border-bottom: 1px solid ${borderColor};
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
  // const { name } = skillCategories[0];
  // const { image: img1 } = skills[0];
  // const { image: img2 } = skills[1];
  // console.log({ name });
  // console.log({ img1, img2 });

  return (
    <Container>
      <Titles>{skillCategories[0].name.eng}</Titles>
      <SkillCard name={skills[0].name} image={skills[0].image} />
      <SkillCard name={skills[1].name} image={skills[1].image} />
      <Titles>{skillCategories[1].name.eng}</Titles>
      {/* <SkillCard name={skills[0].name} image={skills[0].image} /> */}
      <SkillCard name={skills[1].name} image={skills[1].image} />

      {/* <h1>{name.eng}</h1> */}
      {/* <img src={img1} alt="js" /> */}
      {/* <img src={img2} alt="css" /> */}
    </Container>
  );
};

export default Skills;

/*
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
*/

/*
const skillCategories = ['Programming Language',
                         'Web Technologies',
                         'Databases',
                         'Frameworsk / Libraries',
                         'Project Management'
                         'Processes',
                         'versión control' ]

const skills = [
{
  id: 0
  skill: 'JavaScript'
  category: 'Programming Langueage'
  image: 'http://...'
},
  ...
]

const skillCategories = [
  { id: 1, name: 'Programming Language' }
]

*/
