import {
  fyloLP,
  fyloLP2,
  fyloLP3,
  fyloLP4,
  blogrLP,
  blogrLP2,
  blogrLP3,
  blogrLP4,
  todo,
  todo2,
  todo3,
  todo4,
  urlShortening,
  urlShortening2,
  urlShortening3,
  menuCreator,
  menuCreator2,
  menuCreator3,
  menuCreator4,
  menuCreator5,
  inProgress,
} from 'infrastructure/assets/images';

export interface Projects {
  title: string;
  category: string;
  img: string[];
  desc: (string | React.ReactNode)[];
  liveLink: string;
  githubLink: string;
  skills: string[];
}

export const ProjectsList: Projects[] = [
  {
    title: 'Fylo landing page',
    category: 'HTML/CSS',
    img: [fyloLP, fyloLP2, fyloLP3, fyloLP4],
    desc: [
      'Landing page desarrollada con tema oscuro, como desafio de maquetación, siguiento un diseño.',
    ],
    liveLink: 'https://fylo-dark-theme-ml.netlify.app/',
    githubLink: 'https://github.com/MaironL/Fylo-dark-theme-landing-page',
    skills: ['HTML', 'CSS', 'JavaScript', 'SASS'],
  },
  {
    title: 'blogr landing page main',
    category: 'HTML/CSS',
    img: [blogrLP, blogrLP2, blogrLP3, blogrLP4],
    desc: ['Landing page desarrollada como desafio de maquetacion, siguiento un diseño.'],
    liveLink: 'https://blogr-landing-page-main-ml.netlify.app/',
    githubLink: 'https://github.com/MaironL/blogr-landing-page-main',
    skills: ['HTML', 'CSS', 'Tailwind'],
  },
  {
    title: 'Todo App',
    category: 'REACT.JS',
    img: [todo, todo2, todo3, todo4],
    desc: [
      'Clasica aplicación de Todo List, cuenta con cambio de tema, drag and drop, filtros, y una API Rest personal para la autenticación, acceso por roles y guardado de tareas.',
      <br />,
      'Nota: Es necesario registrarse para hacer uso de la APP, pero dicho correo no tiene por que ser real, ejempo: xyz@asd.com, hhh@hhh.com, etc.',
    ],
    githubLink: 'https://github.com/MaironL/Todo-App',
    liveLink: 'https://todo-ml.netlify.app/',
    skills: ['React', 'Tailwind', 'Express', 'MongoDB'],
  },
  {
    title: 'URL Shortener',
    category: 'REACT.JS',
    img: [urlShortening, urlShortening2, urlShortening3],
    desc: [
      'Esta aplicación permite al usuario generar una URL corta, con el fin de poder compartir una URL con sus amigos, se hizo uso de la API SHRTCODE',
    ],
    githubLink: 'https://github.com/MaironL/URLShorteningAPILandingPage',
    liveLink: 'https://link-shortener-ml.netlify.app/',
    skills: ['React', 'Styled Components', 'Axios'],
  },
  {
    title: 'Menú App',
    category: 'REACT.JS',
    img: [menuCreator, menuCreator2, menuCreator3, menuCreator4, menuCreator5],
    desc: [
      'Aplicación para crear menus personalizados, hace uso de la API Spoonacular para obtener los platillos, y una API Rest personal para la autenticación.',
      <br />,
      'Por propositos de facilidad de "Testeo", los menús no se estan guardando en una BD, solo en el localStorage',
    ],
    liveLink: 'https://menuapp-ml.netlify.app/',
    githubLink: 'https://github.com/MaironL/menuApp',
    skills: ['React', 'Bootstrap', 'Express', 'MongoDB'],
  },
  {
    title: 'In progress',
    category: 'REACT.JS',
    img: [inProgress],
    desc: [''],
    githubLink: '',
    liveLink: '',
    skills: [],
  },
];

export default ProjectsList;
