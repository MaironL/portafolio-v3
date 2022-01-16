import * as S from './Projects.style';
import Menu from './Menu';
import ListOfItems from './ListOfItems';
import useFilter from './projectsHooks/useFilter';
import useAnimation from 'infrastructure/hook/useAnimation';

const Projects = (): JSX.Element => {
  const { items, categories, filterItems } = useFilter();
  const { fromLeft } = useAnimation();

  return (
    <S.Cont className='Projects__Cont'>
      <S.Header style={fromLeft} className='Projects__Header'>
        <h1>Proyectos</h1>
        <hr />
      </S.Header>
      <S.ItemsCont className='Projects__ItemsCont'>
        <Menu categories={categories} filterItems={filterItems} />
        <ListOfItems items={items} />
      </S.ItemsCont>
    </S.Cont>
  );
};

export default Projects;
