import * as S from './AboutOrg.style';
import { Fade } from 'react-awesome-reveal';
import { AllSkills } from 'infrastructure/components';

const AboutOrg = () => {
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h3>Sobre mí</h3>
          <hr />
        </S.Header>
      </Fade>
      <S.Description>
        <Fade cascade damping={0.2} triggerOnce>
          <p>
            Con un trasfondo de ingeniería industrial, y siendo apasionado de la tecnología,
            encontré en la programación las herramientas que permiten hacer 2 de las que siempre han
            sido mis pasiones, resolver problemas y crear cosas nuevas.
          </p>
          <p>
            Constantemente busco aprender nuevas tecnologías y metodologías que me permitan
            desarrollarme en el mundo del desarrollo web, y aunque actualmente estoy más orientado
            al Frontend, debo admitir que mi curiosidad me ha llevado a aprender en cierta medida
            del backend (sobre todo el desarrollo de APIs), cosa que me ha ayudado a tener una
            visión amplia de las tecnologías, y me ha permitido crear mis primeras aplicaciones con
            un MERN stack.
          </p>
          <p>
            Me gusta trabajar en un ambiente colaborativo, ya que, aun siendo autodidacta, siento
            que es imprescindible la perspectiva de otros para poder alcanzar nuevas fronteras.
          </p>
        </Fade>
      </S.Description>
      <AllSkills />
    </>
  );
};

export default AboutOrg;
