import { useState } from 'react';
import { ProjectsList } from 'infrastructure/assets/data';

const useFilterProjects = () => {
  const [projectsFiltered, setprojects] = useState(ProjectsList);

  const projectsCategories = ['TODOS', ...new Set(ProjectsList.map((project) => project.category))];

  const projectsFilter = (category: string): void => {
    if (category === 'TODOS') {
      setprojects(ProjectsList);
    } else {
      const newItems = ProjectsList.filter((project) => project.category === category);
      setprojects(newItems);
    }
  };

  return { projectsFiltered, projectsCategories, projectsFilter };
};

export default useFilterProjects;
