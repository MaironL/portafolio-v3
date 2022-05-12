import * as S from './ListOfItems.style';
import { Projects } from 'infrastructure/assets/data';
import { Fade } from 'react-awesome-reveal';

interface ListOfItemsProps {
  projectsFiltered: Projects[];
}

const ListOfItems = ({ projectsFiltered }: ListOfItemsProps) => {
  return (
    <S.Cont>
      <Fade cascade damping={0.2} triggerOnce>
        {projectsFiltered.map((project, index: number) => {
          const { title, img, link } = project;
          return (
            <S.ProjectCont key={index}>
              <S.ProjectImg src={img} alt={title} />
              {title !== 'In progress' && (
                <S.ProjectInfo>
                  <S.ProjectInfoTitle>{title}</S.ProjectInfoTitle>
                  <S.ProjectInfoViewMore href={link} target='_blank'>
                    <S.ProjectInfoViewMoreText>Ver más</S.ProjectInfoViewMoreText>
                  </S.ProjectInfoViewMore>
                </S.ProjectInfo>
              )}
            </S.ProjectCont>
          );
        })}
      </Fade>
    </S.Cont>
  );
};

export default ListOfItems;
