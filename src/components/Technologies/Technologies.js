import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import TechIcons from '../Projects/TechIcons';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { SkillsContainer, SkillsBox, TechTag } from './TechnologiesStyles';

const techStacks = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'ExpressJS', 'Mongodb', 'Windows', 'VS code']
const Technologies = () =>  (
  <Section id = 'tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Skills & Tools</SectionTitle>
    <SkillsContainer>
      {
        techStacks.map((skill, i) => {
          return <SkillsBox>
            <div style = {{textAlign: 'center'}}>
              <TechIcons tag = {skill} key = {i}/>
              <TechTag>{skill}</TechTag>
            </div>
          </SkillsBox>
        })
      }
    </SkillsContainer>
  </Section>
);

export default Technologies;
