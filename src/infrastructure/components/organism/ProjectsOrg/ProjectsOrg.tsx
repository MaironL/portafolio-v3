import * as S from './ProjectsOrg.style';
import { Fade } from 'react-awesome-reveal';
import {
  ProyectsMenu,
  ListOfProjects,
  ProjectsDetails,
  JellowText,
} from 'infrastructure/components';
import { Projects } from 'infrastructure/assets/data';
import { useState } from 'react';

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
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState<Projects>(projectsFiltered[0]);

  const showDetails = (project: Projects) => () => {
    setDetails(project);
    setShow(true);
  };

  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h3>
            <JellowText>P</JellowText>
            <JellowText>r</JellowText>
            <JellowText>o</JellowText>
            <JellowText>y</JellowText>
            <JellowText>e</JellowText>
            <JellowText>c</JellowText>
            <JellowText>t</JellowText>
            <JellowText>o</JellowText>
            <JellowText>s</JellowText>
          </h3>
        </S.Header>
      </Fade>
      <S.ItemsCont>
        <ProyectsMenu projectsCategories={projectsCategories} projectsFilter={projectsFilter} />
        <ListOfProjects projectsFiltered={projectsFiltered} showDetails={showDetails} />
        <ProjectsDetails show={show} details={details} setShow={setShow} />
      </S.ItemsCont>
    </>
  );
};

export default ProjectsOrg;
