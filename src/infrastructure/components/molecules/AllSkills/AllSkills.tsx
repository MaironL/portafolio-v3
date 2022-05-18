import * as S from './AllSkills.style';
import { Fade } from 'react-awesome-reveal';
import { skillsList, Skills } from 'infrastructure/assets/data';

const AllSkills = () => {
  return (
    <S.SkillsBg>
      <Fade cascade damping={0.2} triggerOnce>
        {skillsList.map((skill: Skills, index: number): JSX.Element => {
          const { img, name } = skill;
          return (
            <S.Skill key={index} name={name}>
              <img src={img} alt={name} />
              <figcaption>{name}</figcaption>
            </S.Skill>
          );
        })}
      </Fade>
    </S.SkillsBg>
  );
};

export default AllSkills;
