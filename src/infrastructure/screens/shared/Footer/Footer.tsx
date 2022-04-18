import * as S from './Footer.style';
import { GitHub } from 'infrastructure/assets/images';
import { linkedin } from 'infrastructure/assets/images';

const Footer = (): JSX.Element => {
  return (
    <S.FooterCont className='Footer__FooterCont'>
      <S.Columns className='Footer__Columns'>
        <S.RightColumn className='Footer__RightColumn'>
          <S.FLink className='Footer__FLink' to='/Projects'>
            <p>Proyectos</p>
          </S.FLink>
          <S.FLink className='Footer__FLink' to='/About'>
            <p>Sobre mi</p>
          </S.FLink>
          <S.FLink className='Footer__FLink' to='/Contact'>
            <p>Contacto</p>
          </S.FLink>
        </S.RightColumn>
        <S.LeftColumn className='Footer__LeftColumn'>
          <p>Correo: mairon.lrl@gmail.com</p>
          <p>© Hecho por Mairon Romero</p>
        </S.LeftColumn>
      </S.Columns>
      <S.Bottom className='Footer__Bottom'>
        <S.SocialCont>
          <S.SocialLink
            className='Footer__SocialLink'
            target='_blank'
            href='https://github.com/MaironL'
            rel='noopener noreferrer'
          >
            <S.FBLink className='SocialLinks__Link' src={GitHub} alt='GitHub Link' />
          </S.SocialLink>
          <S.SocialLink
            className='Footer__SocialLink'
            target='_blank'
            href='https://www.linkedin.com/in/maironromero/'
            rel='noopener noreferrer'
          >
            <S.FBLink className='SocialLinks__Link' src={linkedin} alt='linkedin Link' />
          </S.SocialLink>
        </S.SocialCont>
      </S.Bottom>
    </S.FooterCont>
  );
};

export default Footer;
