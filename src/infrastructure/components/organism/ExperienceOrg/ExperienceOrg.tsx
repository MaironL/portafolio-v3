import * as S from './ExperienceOrg.style';
import { Fade } from 'react-awesome-reveal';
import { AboutMenu, JobsDesc, JellowText } from 'infrastructure/components';
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
          <h3>
            <JellowText>E</JellowText>
            <JellowText>x</JellowText>
            <JellowText>p</JellowText>
            <JellowText>e</JellowText>
            <JellowText>r</JellowText>
            <JellowText>i</JellowText>
            <JellowText>e</JellowText>
            <JellowText>n</JellowText>
            <JellowText>c</JellowText>
            <JellowText>i</JellowText>
            <JellowText>a</JellowText>
          </h3>
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
