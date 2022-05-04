import { MaiLogo } from 'infrastructure/assets/images';
import { navbarLinksList } from 'infrastructure/assets/data';
import { DropDown } from 'infrastructure/components';
import * as S from './Navbar.style';

const Navbar = () => {
  return (
    <S.Cont>
      <S.Navbar>
        <S.LogoCont>
          <S.Logo to='/'>
            <img src={MaiLogo} alt='Page Logo' />
          </S.Logo>
        </S.LogoCont>
        <DropDown />
        <S.LinksCont>
          {navbarLinksList.map((link, index: number) => {
            const { name, url, icon } = link;
            return (
              <S.navLink key={index} to={url}>
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
