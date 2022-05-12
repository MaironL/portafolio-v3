import { GitHub, linkedin, cv } from 'infrastructure/assets/images';

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
  {
    href: 'https://drive.google.com/file/d/1lJOLnBvJ-8HfsthBsuwQ6jG7j8Uxdrtg/view?usp=sharing',
    src: cv,
    alt: 'Resume Link',
  },
];

export default socialLinksList;
