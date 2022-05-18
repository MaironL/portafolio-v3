import * as S from './AboutOrg.style';
import { Fade } from 'react-awesome-reveal';
import { AllSkills, Description } from 'infrastructure/components';

const AboutOrg = () => {
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h3>Sobre mí</h3>
        </S.Header>
      </Fade>
      <S.InnerCont>
        <Description />
        <AllSkills />
      </S.InnerCont>
    </>
  );
};

export default AboutOrg;
