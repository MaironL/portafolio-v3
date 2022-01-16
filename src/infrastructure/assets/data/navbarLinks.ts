export interface navbarLinksInterface {
  name: string;
  url: string;
}

export const navbarLinks: navbarLinksInterface[] = [
  {
    name: 'INICIO',
    url: '/',
  },
  {
    name: 'PROYECTOS',
    url: '/Projects',
  },
  {
    name: 'SOBRE MI',
    url: '/About',
  },
  {
    name: 'CONTACTO',
    url: '/Contact',
  },
];

export default navbarLinks;
