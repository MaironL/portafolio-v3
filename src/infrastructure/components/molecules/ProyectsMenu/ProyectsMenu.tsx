import * as S from './ProyectsMenu.style';

interface menuPropInterface {
  projectsFilter: (category: string) => void;
  projectsCategories: string[];
}

const Menu = ({ projectsFilter, projectsCategories }: menuPropInterface): JSX.Element => {
  return (
    <S.Cont className='Menu__Cont'>
      {projectsCategories.map((category: string, index: number): JSX.Element => {
        return (
          <S.CategoryButtom
            type='button'
            key={index}
            onClick={() => projectsFilter(category)}
            className='Menu__CategoryButtom'
          >
            {category}
          </S.CategoryButtom>
        );
      })}
    </S.Cont>
  );
};

export default Menu;
