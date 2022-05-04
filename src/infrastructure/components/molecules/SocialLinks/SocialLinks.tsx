import * as S from './SocialLinks.style';

interface ISocialLinks {
  links: {
    href: string;
    src: string;
    alt: string;
  }[];
}

const SocialLinks = ({ links }: ISocialLinks): JSX.Element => {
  return (
    <S.SocialCont className='SocialLinks__SocialCont'>
      {links.map((link, index: number) => {
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
    </S.SocialCont>
  );
};

export default SocialLinks;
