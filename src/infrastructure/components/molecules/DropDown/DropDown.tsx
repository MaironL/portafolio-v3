import { useEffect, useState } from 'react';
import * as S from './DropDown.style';
import { navbarLinksList, NavbarLinks } from 'infrastructure/assets/data';

const DropDown = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <S.DropDownCont tabIndex={-1}>
      <S.DropDown onClick={() => setShow(!show)} show={show} />
      <S.DropDownContent show={show}>
        {navbarLinksList.map((link: NavbarLinks, index: number) => {
          const { name, url, icon } = link;
          return (
            <S.link key={index} to={url} className='Navbar__link' onClick={() => setShow(false)}>
              {name}
            </S.link>
          );
        })}
      </S.DropDownContent>
      <S.DropDownFocus onClick={() => setShow(false)} show={show} />
    </S.DropDownCont>
  );
};

export default DropDown;
