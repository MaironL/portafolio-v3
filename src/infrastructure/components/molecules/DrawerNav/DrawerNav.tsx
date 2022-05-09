import { useState } from 'react';
import * as S from './DrawerNav.style';
import { HamburgerButton } from 'infrastructure/components';
import { navbarLinksList } from 'infrastructure/assets/data';

const DropDown = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <S.DropDownCont tabIndex={-1}>
      <HamburgerButton onClick={() => setShow(!show)} show={show} />
      <S.DropDownContent show={show}>
        {navbarLinksList.map((link, index: number) => {
          const { name, url } = link;
          return (
            <S.link key={index} to={url} onClick={() => setShow(false)}>
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
