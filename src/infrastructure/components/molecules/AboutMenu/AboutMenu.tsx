import * as S from './AboutMenu.style';

interface menuPropInterface {
  jobsFilter: (category: string) => void;
  aboutCategories: string[];
}

const Menu = ({ jobsFilter, aboutCategories }: menuPropInterface) => {
  return (
    <S.Cont>
      {aboutCategories.map((category, index: number) => {
        return (
          <S.CategoryButtom key={index} onClick={() => jobsFilter(category)}>
            {category}
          </S.CategoryButtom>
        );
      })}
    </S.Cont>
  );
};

export default Menu;
