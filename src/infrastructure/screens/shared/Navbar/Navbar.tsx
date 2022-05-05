import { MaiLogo } from 'infrastructure/assets/images';
import { navbarLinksList } from 'infrastructure/assets/data';
import { DropDown } from 'infrastructure/components';
import * as S from './Navbar.style';

const Navbar = () => {
  return (
    <S.Cont>
      <S.LogoCont>
        <S.LogoLink to='/'>
          <S.Logo src={MaiLogo} alt='Portfolio Logo' />
        </S.LogoLink>
        <S.LogoTextCont>
          <S.LogoName>Mairon</S.LogoName>
          <S.LogoRole>Frontend Developer</S.LogoRole>
        </S.LogoTextCont>
      </S.LogoCont>
      <S.LinksCont>
        {navbarLinksList.map((link, index: number) => {
          const { name, url, icon } = link;
          return (
            <S.LinkNav key={index} to={url}>
              {name}
              {/* {icon} */}
            </S.LinkNav>
          );
        })}
      </S.LinksCont>
      <DropDown />
    </S.Cont>
  );
};

//  <S.Navbar>
//    <S.LogoCont>
//      <S.LogoLink to='/'>
//        <S.Logo src={MaiLogo} alt='Portfolio Logo' />
//      </S.LogoLink>
//      <S.LogoName>Mairon</S.LogoName>
//      <S.LogoWord>Frontend</S.LogoWord>
//    </S.LogoCont>
//    <DropDown />
//    <S.LinksCont>
//      {navbarLinksList.map((link, index: number) => {
//        const { name, url, icon } = link;
//        return (
//          <S.navLink key={index} to={url}>
//            {name}
//            {icon}
//          </S.navLink>
//        );
//      })}
//    </S.LinksCont>
//  </S.Navbar>;

export default Navbar;
