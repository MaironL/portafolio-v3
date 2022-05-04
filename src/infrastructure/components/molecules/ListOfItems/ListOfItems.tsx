import * as S from './ListOfItems.style';
import { Projects } from 'infrastructure/assets/data';
import { Fade } from 'react-awesome-reveal';

interface ListOfItemsProps {
  projectsFiltered: Projects[];
}

const ListOfItems = ({ projectsFiltered }: ListOfItemsProps) => {
  return (
    <S.List className='ListOfItems__List'>
      <Fade cascade damping={0.4} triggerOnce>
        {projectsFiltered.map((project, index: number) => {
          const { title, img, desc, link } = project;
          return (
            <S.ItemCont key={index} className='ListOfItems__ItemCont' href={link} target='_blank'>
              <S.Item src={img} alt={title} className='ListOfItems__Item' />
              <S.ItemInfo className='ListOfItems__ItemInfo'>
                <header>
                  <h3>{title}</h3>
                </header>
                <p>{desc}</p>
              </S.ItemInfo>
            </S.ItemCont>
          );
        })}
      </Fade>
    </S.List>
  );
};

export default ListOfItems;
