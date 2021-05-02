import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import SkillCard from './SkillCard';

const Container = styled.div`
  padding-top: 10px;
  @media (min-width: 544px) {
    padding-top: 20px;
  }
  @media (min-width: 768px) {
    padding-top: 20px;
  }
  @media (min-width: 1024px) {
    padding-top: 30px;
  }
`;

const Titles = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 0px;
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 8px;
  border-bottom: 1px solid ${(props) => props.theme.color.border.secondary};
  @media (min-width: 544px) {
    padding-left: 20px;
    font-size: 24px;
  }
  @media (min-width: 768px) {
    padding-left: 20px;
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const Skills = () => {
  const {
    skillCategories: { data: categories },
    skills: { data: skills },
  } = useSelector((state) => state.data);
  const { language: lang } = useSelector((state) => state.ui);
  const [renderArray, setRenderArray] = useState([]);

  useEffect(() => {
    if (categories?.length > 0 && skills?.length > 0) {
      let components = [];
      categories.forEach((e) => {
        components.push(
          <Titles key={`cat${e.id}`}>
            {lang === 'eng' ? e.name_eng : e.name_esp}
          </Titles>,
        );
        const skls = skills.filter((s) => s.category === e.name_eng);
        const cards = skls.map((s) => (
          <SkillCard key={`skl${s.id}`} name={s.name} image={s.image} />
        ));
        components = [...components, ...cards];
      });
      setRenderArray(components);
    }
  }, [categories, skills, lang]);

  return (
    <Container>
      {renderArray && renderArray.length > 0 && renderArray.map((a) => a)}
    </Container>
  );
};

export default Skills;
