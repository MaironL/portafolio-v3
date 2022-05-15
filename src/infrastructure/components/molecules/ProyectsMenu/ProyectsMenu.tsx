import * as S from './ProyectsMenu.style';

interface menuPropInterface {
  projectsFilter: (category: string) => void;
  projectsCategories: string[];
}

const Menu = ({ projectsFilter, projectsCategories }: menuPropInterface) => {
  return (
    <S.Cont>
      {projectsCategories.map((category, index: number) => {
        return (
          <S.CategoryButtom key={index} onClick={() => projectsFilter(category)}>
            {category}
          </S.CategoryButtom>
        );
      })}
    </S.Cont>
  );
};

export default Menu;
