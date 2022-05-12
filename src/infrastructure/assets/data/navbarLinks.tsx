export interface NavbarLinks {
  name: string;
  url: string;
}

export const navbarLinksList: NavbarLinks[] = [
  {
    name: 'INICIO',
    url: '/',
  },
  {
    name: 'PROYECTOS',
    url: '/Projects',
  },
  {
    name: 'SOBRE MÍ',
    url: '/About',
  },
  {
    name: 'CONTACTO',
    url: '/Contact',
  },
];

export default navbarLinksList;
