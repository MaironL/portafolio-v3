import * as S from './ListOfProjects.style';
import { Projects } from 'infrastructure/assets/data';
//import { useState } from 'react';
//import { ProjectsDetails } from 'infrastructure/components';
import { Fade } from 'react-awesome-reveal';

interface ListOfProjectsProps {
  projectsFiltered: Projects[];
}

const ListOfProjects = ({ projectsFiltered }: ListOfProjectsProps) => {
  // const [showDetails, setShowDetails] = useState(false);

  // const showDetailsModal =
  //   ({ projectData }: any) =>
  //   () => {
  //     setShowDetails(true);
  //   };

  return (
    <S.Cont>
      <Fade cascade damping={0.2} triggerOnce>
        {projectsFiltered.map((project, index: number) => {
          const { title, img, link } = project;
          return (
            <S.ProjectCont key={index}>
              {title !== 'In progress' ? (
                <S.ProjectImg src={img} alt={title} />
              ) : (
                <S.ProjectInProcessImg src={img} alt={title} />
              )}
              {title !== 'In progress' && (
                <S.ProjectInfo>
                  <S.ProjectInfoTitle>{title}</S.ProjectInfoTitle>
                  <S.ProjectInfoViewMore
                    href={link}
                    target='_blank'
                    // onClick={showDetailsModal(project)}
                  >
                    <S.ProjectInfoViewMoreText>Ver más</S.ProjectInfoViewMoreText>
                  </S.ProjectInfoViewMore>
                </S.ProjectInfo>
              )}
            </S.ProjectCont>
          );
        })}
      </Fade>
      {/* {showDetails && <ProjectsDetails title={title}/>} */}
    </S.Cont>
  );
};

export default ListOfProjects;
