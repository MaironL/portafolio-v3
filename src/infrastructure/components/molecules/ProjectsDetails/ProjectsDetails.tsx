import * as S from './ProjectsDetails.style';

interface ProjectsDetailsProps {
  title: string;
}

const ProjectsDetails = ({ title }: ProjectsDetailsProps) => {
  return (
    <S.Cont>
      <S.SpanText>{title}</S.SpanText>
    </S.Cont>
  );
};

export default ProjectsDetails;
