import { MaiLogo } from 'infrastructure/assets/images';
import { navbarLinks, navbarLinksInterface } from 'infrastructure/assets/data';
import DropDown from './DropDown';
import * as S from './Navbar.style';

const Navbar = (): JSX.Element => {
  return (
    <S.Cont className='Navbar__Cont'>
      <S.Navbar className='Navbar__Navbar'>
        <S.LogoCont className='Navbar__LogoCont'>
          <S.Logo to='/' className='Navbar__logo'>
            <img src={MaiLogo} alt='Page Logo' />
          </S.Logo>
        </S.LogoCont>
        <DropDown />
        <S.LinksCont className='Navbar__linksCont'>
          {navbarLinks.map((link: navbarLinksInterface, index: number): JSX.Element => {
            const { name, url, icon } = link;
            return (
              <S.navLink key={index} to={url} className='Navbar__link'>
                {name}
                {icon}
              </S.navLink>
            );
          })}
        </S.LinksCont>
      </S.Navbar>
    </S.Cont>
  );
};

export default Navbar;
