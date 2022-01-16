import * as S from './SocialLinks.style';
import { GitHub } from 'infrastructure/assets/images';
import { linkedin } from 'infrastructure/assets/images';

const SocialLinks = (): JSX.Element => {
  return (
    <S.SocialCont className='SocialLinks__SocialCont'>
      <S.SocialLink
        className='SocialLinks__SocialLink'
        target='_blank'
        href='https://github.com/MaironL'
      >
        <S.Link className='SocialLinks__Link' src={GitHub} alt='GitHub Link' />
      </S.SocialLink>
      <S.SocialLink
        className='SocialLinks__SocialLink'
        target='_blank'
        href='https://www.linkedin.com/in/maironromero/'
      >
        <S.Link className='SocialLinks__Link' src={linkedin} alt='linkedin Link' />
      </S.SocialLink>
    </S.SocialCont>
  );
};

export default SocialLinks;
