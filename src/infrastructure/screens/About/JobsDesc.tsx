import * as S from './JobsDesc.style';
import { jobsInterface } from 'infrastructure/assets/data';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

interface JobsPropInterface {
  items: jobsInterface[];
}

const JobsDesc = ({ items }: JobsPropInterface): JSX.Element => {
  const { title, company, dates, duties } = items[0];
  return (
    <S.Cont>
      <Fade cascade damping={0.3} triggerOnce>
        <S.JobTitle>{title}</S.JobTitle>
        <S.CompanyName>{company}</S.CompanyName>
        <S.Date className='job-date'>{dates}</S.Date>
        {duties.map((duty, index) => {
          return (
            <S.Duty key={index} className='job-desc'>
              <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
              <p>{duty}</p>
            </S.Duty>
          );
        })}
      </Fade>
    </S.Cont>
  );
};

export default JobsDesc;
