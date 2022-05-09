import * as S from './ProjectsOrg.style';
import { Fade } from 'react-awesome-reveal';
import { ProyectsMenu, ListOfItems } from 'infrastructure/components';
import { Projects } from 'infrastructure/assets/data';

interface ProjectsOrgProps {
  projectsFiltered: Projects[];
  projectsCategories: string[];
  projectsFilter: (category: string) => void;
}

const ProjectsOrg = ({
  projectsFiltered,
  projectsCategories,
  projectsFilter,
}: ProjectsOrgProps) => {
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h1>Proyectos</h1>
          <hr />
        </S.Header>
      </Fade>
      <S.ItemsCont>
        <ProyectsMenu projectsCategories={projectsCategories} projectsFilter={projectsFilter} />
        <ListOfItems projectsFiltered={projectsFiltered} />
      </S.ItemsCont>
    </>
  );
};

export default ProjectsOrg;