import { useState } from 'react';
import * as S from './DrawerNav.style';
import { HamburgerButton } from 'infrastructure/components';
import { navbarLinksList, socialLinksList } from 'infrastructure/assets/data';

const DropDown = (): JSX.Element => {
  const [show, setShow] = useState(false);

  return (
    <S.DropDownCont tabIndex={-1}>
      <HamburgerButton onClick={() => setShow(!show)} show={show} />
      <S.DropDownContent show={show}>
        {navbarLinksList.map((link, index: number) => {
          const { name, url } = link;
          return (
            <S.Link key={index} to={url} onClick={() => setShow(false)}>
              {name}
            </S.Link>
          );
        })}
        <S.SocialCont>
          {socialLinksList.map((link, index: number) => {
            return (
              <S.SocialLink target='_blank' href={link.href} key={index}>
                <S.SocialLinkImg src={link.src} alt={link.alt} />
              </S.SocialLink>
            );
          })}
        </S.SocialCont>
      </S.DropDownContent>
      <S.DropDownFocus onClick={() => setShow(false)} show={show} />
    </S.DropDownCont>
  );
};

export default DropDown;
