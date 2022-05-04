import * as S from './Footer.style';
import { GitHub } from 'infrastructure/assets/images';
import { linkedin } from 'infrastructure/assets/images';

const Footer = () => {
  return (
    <S.FooterCont>
      <S.Columns>
        <S.RightColumn>
          <S.FLink to='/Projects'>
            <p>Proyectos</p>
          </S.FLink>
          <S.FLink to='/About'>
            <p>Sobre mi</p>
          </S.FLink>
          <S.FLink to='/Contact'>
            <p>Contacto</p>
          </S.FLink>
        </S.RightColumn>
        <S.LeftColumn>
          <p>Correo: mairon.lrl@gmail.com</p>
          <p>© Hecho por Mairon Romero</p>
        </S.LeftColumn>
      </S.Columns>
      <S.Bottom>
        <S.SocialCont>
          <S.SocialLink target='_blank' href='https://github.com/MaironL' rel='noopener noreferrer'>
            <S.FBLink src={GitHub} alt='GitHub Link' />
          </S.SocialLink>
          <S.SocialLink
            target='_blank'
            href='https://www.linkedin.com/in/maironromero/'
            rel='noopener noreferrer'
          >
            <S.FBLink src={linkedin} alt='linkedin Link' />
          </S.SocialLink>
        </S.SocialCont>
      </S.Bottom>
    </S.FooterCont>
  );
};

export default Footer;
