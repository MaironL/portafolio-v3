import { FaHome, FaUser } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { BsFillBriefcaseFill } from 'react-icons/bs';
export interface navbarLinksInterface {
  name: string;
  url: string;
  icon: JSX.Element;
}

export const navbarLinks: navbarLinksInterface[] = [
  {
    name: 'INICIO',
    url: '/',
    icon: <FaHome />,
  },
  {
    name: 'PROYECTOS',
    url: '/Projects',
    icon: <BsFillBriefcaseFill />,
  },
  {
    name: 'SOBRE MI',
    url: '/About',
    icon: <FaUser />,
  },
  {
    name: 'CONTACTO',
    url: '/Contact',
    icon: <AiFillMail />,
  },
];

export default navbarLinks;
