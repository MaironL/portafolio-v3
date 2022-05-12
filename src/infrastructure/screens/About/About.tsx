import { useEffect } from 'react';
import * as S from './About.style';
import { SocialLinks, AboutOrg } from 'infrastructure/components';
// import { useFilterJobs } from 'infrastructure/hooks';

const About = () => {
  // const { jobsFiltered, aboutCategories, jobsFilter } = useFilterJobs();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Cont>
      <AboutOrg
      // jobsFiltered={jobsFiltered}
      // aboutCategories={aboutCategories}
      // jobsFilter={jobsFilter}
      />
      <SocialLinks />
    </S.Cont>
  );
};

export default About;
