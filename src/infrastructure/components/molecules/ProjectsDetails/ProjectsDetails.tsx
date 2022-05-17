import * as S from './ProjectsDetails.style';
import { Projects } from 'infrastructure/assets/data';
import { Carousel } from 'infrastructure/components';
import { HiArrowNarrowRight } from 'react-icons/hi';

interface ProjectsDetailsProps {
  show: boolean;
  details: Projects;
  setShow: (show: boolean) => void;
}

const ProjectsDetails = ({ show, setShow, details }: ProjectsDetailsProps) => {
  const { title, desc, img, liveLink, githubLink, skills } = details;

  return (
    <S.Cont className='Cont' show={show}>
      <S.Content className='content'>
        <S.Close onClick={() => setShow(false)} />
        <Carousel images={img} title={title} />
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Description>{desc}</S.Description>
          <S.ButtonCont>
            <S.Link href={liveLink} target='_blank'>
              <S.GoTo>
                Ir al proyecto
                <HiArrowNarrowRight />
              </S.GoTo>
            </S.Link>
            <S.Link href={githubLink} target='_blank'>
              <S.GoTo>
                Ir a Github
                <HiArrowNarrowRight />
              </S.GoTo>
            </S.Link>
          </S.ButtonCont>
        </S.Info>
        <S.Skills className='Skills'>
          {skills.map((skill, index: number) => (
            <S.Skill skill={skill} key={index}>
              {skill}
            </S.Skill>
          ))}
        </S.Skills>
      </S.Content>
      <S.DropDownFocus onClick={() => setShow(false)} show={show} />
    </S.Cont>
  );
};

export default ProjectsDetails;
