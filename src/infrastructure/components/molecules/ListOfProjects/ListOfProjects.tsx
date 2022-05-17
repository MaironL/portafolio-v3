import * as S from './ListOfProjects.style';
import { Projects } from 'infrastructure/assets/data';
import { Fade } from 'react-awesome-reveal';

interface ListOfProjectsProps {
  projectsFiltered: Projects[];
  showDetails: (project: Projects) => () => void;
}

const ListOfProjects = ({ projectsFiltered, showDetails }: ListOfProjectsProps) => {
  return (
    <S.Cont>
      <Fade cascade damping={0.2} triggerOnce>
        {projectsFiltered.map((project, index: number) => {
          const { title, img } = project;
          return (
            <S.ProjectCont key={index}>
              {title !== 'In progress' ? (
                <S.ProjectImg src={img[0]} alt={title} />
              ) : (
                <S.ProjectInProcessImg src={img[0]} alt={title} />
              )}
              {title !== 'In progress' && (
                <S.ProjectInfo>
                  <S.ProjectInfoTitle>{title}</S.ProjectInfoTitle>
                  <S.ProjectInfoViewMore onClick={showDetails(project)}>
                    <S.ProjectInfoViewMoreText>Ver más</S.ProjectInfoViewMoreText>
                  </S.ProjectInfoViewMore>
                </S.ProjectInfo>
              )}
            </S.ProjectCont>
          );
        })}
      </Fade>
    </S.Cont>
  );
};

export default ListOfProjects;
