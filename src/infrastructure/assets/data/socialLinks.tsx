import { GitHub } from 'infrastructure/assets/images';
import { linkedin } from 'infrastructure/assets/images';

export interface SocialLinks {
  href: string;
  src: string;
  alt: string;
}

export const socialLinksList: SocialLinks[] = [
  {
    href: 'https://github.com/MaironL',
    src: GitHub,
    alt: 'GitHub Link',
  },
  {
    href: 'https://www.linkedin.com/in/maironromero/',
    src: linkedin,
    alt: 'linkedin Link',
  },
];

export default socialLinksList;
