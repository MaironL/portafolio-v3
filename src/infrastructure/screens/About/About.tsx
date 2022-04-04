import { useEffect } from 'react';
import * as S from './About.style';
import { skills, SkillsInterface } from 'infrastructure/assets/data';
import useFilter from './aboutHooks/useFilter';
import Menu from './Menu';
import JobsDesc from './JobsDesc';
import useAnimation from 'infrastructure/hook/useAnimation';
import { Fade } from 'react-awesome-reveal';

const About = (): JSX.Element => {
  const { items, categories, filterItems } = useFilter();
  const { fromLeft } = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Cont className='About__Cont'>
      <S.Header className='About__Header' style={fromLeft}>
        <h1>Sobre mi</h1>
        <hr />
      </S.Header>
      <S.Description className='About__Description'>
        <Fade cascade damping={0.2} triggerOnce>
          <p>
            Con un trasfondo de ingeniería industrial, y siendo apasionado de la
            tecnología, encontré en la programación las herramientas que permiten hacer 2
            de las que siempre han sido mis aficiones, resolver problemas y crear cosas
            nuevas.
          </p>
          <p>
            Constantemente busco aprender nuevas tecnologías y metodologías que me
            permitan desarrollarme en el mundo del desarrollo web, actualmente busco
            mejorar mis conocimientos a la hora de crear aplicaciones completas con
            React/NodeJS mediante la creacion de proyectos personales, y sumar dicho
            conocimiento a mi experiencia laboral previa.
          </p>
          <p>
            Me gusta trabajar en un ambiente colaborativo, ya que, aun siendo autodidacta,
            siento que es imprescindible la perspectiva de otros para poder alcanzar
            nuevas fronteras.
          </p>
        </Fade>
      </S.Description>

      <section>
        <S.SubtitleCont className='About__SubtitleCont'>
          <Fade cascade damping={0.8} triggerOnce direction='down'>
            <h2>Conocimientos</h2>
            <hr />
          </Fade>
        </S.SubtitleCont>
        <S.SkillsBg className='About__SkillsBg'>
          <S.SkillsCont className='About__SkillsCont'>
            <Fade cascade damping={0.2} triggerOnce>
              {skills.map((skill: SkillsInterface, index: number): JSX.Element => {
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
        <S.SubtitleCont className='About__SubtitleCont'>
          <Fade cascade damping={0.8} triggerOnce direction='down'>
            <h2>Experiencia</h2>
            <hr />
          </Fade>
        </S.SubtitleCont>
        <S.JobsCont>
          <Menu categories={categories} filterItems={filterItems} />
          <JobsDesc items={items} />
        </S.JobsCont>
      </section>
    </S.Cont>
  );
};

export default About;
