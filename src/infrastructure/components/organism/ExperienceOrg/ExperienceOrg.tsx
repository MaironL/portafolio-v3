import * as S from './ExperienceOrg.style';
import { Fade } from 'react-awesome-reveal';
import { AboutMenu, JobsDesc } from 'infrastructure/components';
import { Jobs } from 'infrastructure/assets/data';

interface ExperienceOrgProps {
  jobsFiltered: Jobs[];
  aboutCategories: string[];
  jobsFilter: (company: string) => void;
}

const ExperienceOrg = ({ jobsFiltered, aboutCategories, jobsFilter }: ExperienceOrgProps) => {
  return (
    <>
      <Fade direction='left' triggerOnce>
        <S.Header>
          <h3>Experiencia</h3>
        </S.Header>
      </Fade>
      <S.JobsCont>
        <AboutMenu aboutCategories={aboutCategories} jobsFilter={jobsFilter} />
        <JobsDesc jobsFiltered={jobsFiltered} />
      </S.JobsCont>
    </>
  );
};

export default ExperienceOrg;
