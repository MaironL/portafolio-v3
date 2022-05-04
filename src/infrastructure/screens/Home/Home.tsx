import { useEffect } from 'react';
import * as S from './Home.style';
import { SocialLinks } from 'infrastructure/components';
import { homeIlust } from 'infrastructure/assets/images';
import { socialLinksList } from 'infrastructure/assets/data';
import useAnimation from 'infrastructure/hook/useAnimation';
import { Fade } from 'react-awesome-reveal';

const Home = () => {
  const { fromLeft, fromBottom } = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Cont>
      <SocialLinks links={socialLinksList} />
      <S.Presentation>
        <S.animDivCont style={fromLeft}>
          <h1>
            Hola,
            <br />
            <S.NamesCont>
              <S.WordCont>Soy</S.WordCont>
              <S.WordCont>
                <span>M</span>
                <span>a</span>
                <span>i</span>
                <span>r</span>
                <span>o</span>
                <span>n</span>
              </S.WordCont>
              <S.WordCont>
                <span>R</span>
                <span>o</span>
                <span>m</span>
                <span>e</span>
                <span>r</span>
                <span>o</span>
              </S.WordCont>
            </S.NamesCont>
          </h1>
          <hr />
          <h2>Desarrollador Front-End</h2>
        </S.animDivCont>
        <S.animDivCont style={fromBottom}>
          <S.GoToProjects>
            <S.GoToProjectsLink to='/Projects'>Ver proyectos</S.GoToProjectsLink>
          </S.GoToProjects>
        </S.animDivCont>
      </S.Presentation>
      <S.ImgCont>
        <Fade delay={1200}>
          <S.Arrow />
          <S.GreetingCont>
            <S.Greeting>Hola! se bienvenido</S.Greeting>
          </S.GreetingCont>
        </Fade>
        <Fade direction='up' triggerOnce>
          <S.HomeImg src={homeIlust} />
        </Fade>
      </S.ImgCont>
    </S.Cont>
  );
};

export default Home;
