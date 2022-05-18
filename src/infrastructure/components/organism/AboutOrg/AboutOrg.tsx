import * as S from './AboutOrg.style';
import { Fade } from 'react-awesome-reveal';
import { AllSkills, Description, JellowText } from 'infrastructure/components';

const AboutOrg = () => {
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h3>
            <JellowText>S</JellowText>
            <JellowText>o</JellowText>
            <JellowText>b</JellowText>
            <JellowText>r</JellowText>
            <JellowText>e</JellowText>
            <JellowText>m</JellowText>
            <JellowText>í</JellowText>
          </h3>
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
