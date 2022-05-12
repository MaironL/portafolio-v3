import * as S from './SocialLinks.style';
import { socialLinksList } from 'infrastructure/assets/data';

const SocialLinks = () => {
  return (
    <S.SocialCont>
      {socialLinksList.map((link, index: number) => {
        return (
          <S.SocialLink target='_blank' href={link.href} key={index}>
            <S.Link src={link.src} alt={link.alt} />
          </S.SocialLink>
        );
      })}
      <S.VerticalLine />
    </S.SocialCont>
  );
};

export default SocialLinks;
