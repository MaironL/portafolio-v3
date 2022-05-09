import * as S from './SocialLinks.style';
import { socialLinksList } from 'infrastructure/assets/data';

const SocialLinks = () => {
  return (
    <S.SocialCont className='SocialLinks__SocialCont'>
      {socialLinksList.map((link, index: number) => {
        return (
          <S.SocialLink
            className='SocialLinks__SocialLink'
            target='_blank'
            href={link.href}
            key={index}
          >
            <S.Link className='SocialLinks__Link' src={link.src} alt={link.alt} />
          </S.SocialLink>
        );
      })}
      <S.VerticalLine />
    </S.SocialCont>
  );
};

export default SocialLinks;
