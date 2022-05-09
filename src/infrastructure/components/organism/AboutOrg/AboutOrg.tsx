import * as S from './AboutOrg.style';
import { Fade } from 'react-awesome-reveal';
import { AboutMenu, JobsDesc } from 'infrastructure/components';
import { skillsList, Skills, Jobs } from 'infrastructure/assets/data';

interface AboutOrgProps {
  jobsFiltered: Jobs[];
  aboutCategories: string[];
  jobsFilter: (company: string) => void;
}

const AboutOrg = ({ jobsFiltered, aboutCategories, jobsFilter }: AboutOrgProps) => {
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h1>Sobre mi</h1>
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
            desarrollarme en el mundo del desarrollo web, y aunque actualmente estoy mas orientado
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
      <section>
        <S.SubtitleCont>
          <Fade cascade damping={0.8} triggerOnce direction='down'>
            <h2>Conocimientos</h2>
            <hr />
          </Fade>
        </S.SubtitleCont>
        <S.SkillsBg>
          <S.SkillsCont>
            <Fade cascade damping={0.2} triggerOnce>
              {skillsList.map((skill: Skills, index: number): JSX.Element => {
                const { img, name } = skill;
                return (
                  <S.Skill key={index} className='About__Skill' name={name}>
                    <img src={img} alt={name} />
                    <figcaption>{name}</figcaption>
                  </S.Skill>
                );
              })}
            </Fade>
          </S.SkillsCont>
        </S.SkillsBg>
      </section>
      <section>
        <S.SubtitleCont>
          <Fade cascade damping={0.8} triggerOnce direction='down'>
            <h2>Experiencia</h2>
            <hr />
          </Fade>
        </S.SubtitleCont>
        <S.JobsCont>
          <AboutMenu aboutCategories={aboutCategories} jobsFilter={jobsFilter} />
          <JobsDesc jobsFiltered={jobsFiltered} />
        </S.JobsCont>
      </section>
    </>
  );
};

export default AboutOrg;
