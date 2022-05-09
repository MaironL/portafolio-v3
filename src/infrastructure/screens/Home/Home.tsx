import { useEffect } from 'react';
import * as S from './Home.style';
import { SocialLinks, HomeOrg, ProjectsOrg, AboutOrg, ContactOrg } from 'infrastructure/components';
import { useFormContact } from './homeHooks';
import { useFilterJobs, useFilterProjects } from 'infrastructure/hooks';

const Home = () => {
  const { jobsFiltered, aboutCategories, jobsFilter } = useFilterJobs();
  const { projectsFiltered, projectsCategories, projectsFilter } = useFilterProjects();
  const { handleSubmit, handleChange, handleBlur, state, values, touched, errors, isValid, dirty } =
    useFormContact();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Cont>
      <S.HomeSection>
        <HomeOrg />
      </S.HomeSection>
      <S.ProjecsSection>
        <ProjectsOrg
          projectsFilter={projectsFilter}
          projectsCategories={projectsCategories}
          projectsFiltered={projectsFiltered}
        />
      </S.ProjecsSection>
      <S.AboutSection>
        <AboutOrg
          jobsFilter={jobsFilter}
          aboutCategories={aboutCategories}
          jobsFiltered={jobsFiltered}
        />
      </S.AboutSection>
      <S.ContactSection>
        <ContactOrg
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleBlur={handleBlur}
          state={state}
          values={values}
          touched={touched}
          errors={errors}
          isValid={isValid}
          dirty={dirty}
        />
      </S.ContactSection>
      <SocialLinks />
    </S.Cont>
  );
};

export default Home;
