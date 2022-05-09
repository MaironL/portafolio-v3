import { useEffect } from 'react';
import * as S from './Projects.style';
import { ProjectsOrg, SocialLinks } from 'infrastructure/components';
import { useFilterProjects } from 'infrastructure/hooks';

const Projects = () => {
  const { projectsFiltered, projectsCategories, projectsFilter } = useFilterProjects();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Cont>
      <ProjectsOrg
        projectsCategories={projectsCategories}
        projectsFilter={projectsFilter}
        projectsFiltered={projectsFiltered}
      />
      <SocialLinks />
    </S.Cont>
  );
};

export default Projects;
