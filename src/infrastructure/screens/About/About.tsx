import { useEffect } from 'react';
import * as S from './About.style';
import { SocialLinks, AboutOrg } from 'infrastructure/components';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Cont>
      <AboutOrg />
      <SocialLinks />
    </S.Cont>
  );
};

export default About;
