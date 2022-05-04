import * as S from './AboutMenu.style';

interface menuPropInterface {
  jobsFilter: (category: string) => void;
  categories: string[];
}

const Menu = ({ jobsFilter, categories }: menuPropInterface) => {
  return (
    <S.Cont className='Menu__Cont'>
      {categories.map((category, index: number) => {
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
