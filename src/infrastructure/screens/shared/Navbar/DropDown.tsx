import { useState } from 'react';
import * as S from './DropDown.style';
import { navbarLinks } from 'infrastructure/assets/data';

const DropDown = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <S.DropDownCont className='DropDown__DropDownCont'>
      <S.DropDown className='DropDown__DropDown' onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <S.DropDownContent className='DropDown__DropDownContent'>
          {navbarLinks.map((link, index) => {
            const { name, url, icon } = link;
            return (
              <S.link
                key={index}
                to={url}
                className='Navbar__link'
                onClick={() => setShowMenu(false)}
              >
                {name}
                {icon}
              </S.link>
            );
          })}
        </S.DropDownContent>
      )}
      {showMenu && <S.DropDownFocus onClick={() => setShowMenu(false)} />}
    </S.DropDownCont>
  );
};

export default DropDown;
