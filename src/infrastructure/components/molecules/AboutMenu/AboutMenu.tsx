import * as S from './AboutMenu.style';

interface menuPropInterface {
  jobsFilter: (category: string) => void;
  aboutCategories: string[];
}

const Menu = ({ jobsFilter, aboutCategories }: menuPropInterface) => {
  return (
    <S.Cont className='Menu__Cont'>
      {aboutCategories.map((category, index: number) => {
        return (
          <S.CategoryButtom
            type='button'
            key={index}
            onClick={() => jobsFilter(category)}
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
