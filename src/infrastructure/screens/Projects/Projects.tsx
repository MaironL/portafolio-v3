import { useEffect } from 'react';
import * as S from './Projects.style';
import { ProyectsMenu, ListOfItems } from 'infrastructure/components';
import useFilter from './projectsHooks/useFilter';
import useAnimation from 'infrastructure/hook/useAnimation';

const Projects = () => {
  const { projectsFiltered, categories, projectsFilter } = useFilter();
  const { fromLeft } = useAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Cont>
      <S.Header style={fromLeft}>
        <h1>Proyectos</h1>
        <hr />
      </S.Header>
      <S.ItemsCont>
        <ProyectsMenu categories={categories} projectsFilter={projectsFilter} />
        <ListOfItems projectsFiltered={projectsFiltered} />
      </S.ItemsCont>
    </S.Cont>
  );
};

export default Projects;
