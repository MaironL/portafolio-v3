import * as S from './Menu.style';

interface menuPropInterface {
  filterItems: (category: string) => void;
  categories: string[];
}

const Menu = ({ filterItems, categories }: menuPropInterface): JSX.Element => {
  return (
    <S.Cont className='Menu__Cont'>
      {categories.map((category: string, index: number): JSX.Element => {
        return (
          <S.CategoryButtom
            type='button'
            key={index}
            onClick={(): void => filterItems(category)}
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
