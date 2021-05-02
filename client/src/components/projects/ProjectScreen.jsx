/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const Titles = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 0px;
  font-size: 20px;
  font-weight: 300;
  @media (min-width: 544px) {
    padding-left: 20px;
    margin-top: 20px;
    font-size: 24px;
  }
  @media (min-width: 768px) {
    padding-left: 20px;
    margin-top: 20px;
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    margin-top: 30px;
    padding-left: 20px;
    font-size: 24px;
  }
`;

const Projects = () => {
  const {
    projectCategories: { data: categories },
    projects: { data: projects },
  } = useSelector((state) => state.data);
  const { language: lang } = useSelector((state) => state.ui);
  const [renderArray, setRenderArray] = useState([]);

  useEffect(() => {
    if (categories?.length > 0 && projects?.length > 0) {
      let components = [];
      categories.forEach((e) => {
        components.push(
          <Titles key={`cat${e.id}`}>
            {lang === 'eng' ? e.name_eng : e.name_esp}
          </Titles>,
        );
        const prjs = projects.filter((p) => p.category === e.name_eng);
        const cards = prjs.map((p) => (
          <ProjectCard
            key={`prj${p.id}`}
            name={lang === 'eng' ? p.title_eng : p.title_esp}
            description={lang === 'eng' ? p.description_eng : p.description_esp}
            image={p.image}
            appLink={p.link}
            linkTooltipText="App"
            githubLink={p.repo}
          />
        ));
        components = [...components, ...cards];
      });
      setRenderArray(components);
    }
  }, [categories, projects, lang]);
  return (
    <>{renderArray && renderArray.length > 0 && renderArray.map((a) => a)}</>
  );
};

export default Projects;
