import {
  fyloLP,
  blogrLP,
  todo,
  urlShortening,
  menuCreator,
  inProgress,
} from 'infrastructure/assets/images';

export interface Projects {
  title: string;
  category: string;
  img: string;
  desc: string;
  link: string;
}

export const ProjectsList: Projects[] = [
  {
    title: 'Fylo landing page',
    category: 'HTML/CSS',
    img: fyloLP,
    desc: 'Landing page desarrollada mediante el uso de HTML/CSS, la metodología  BEM y SASS',
    link: 'https://fylo-dark-theme-ml.netlify.app/',
  },
  {
    title: 'blogr landing page main',
    category: 'HTML/CSS',
    img: blogrLP,
    desc: 'Landing page desarrollada mediante el uso de HTML y Tailwind para los estilos',
    link: 'https://blogr-landing-page-main-ml.netlify.app/',
  },
  {
    title: 'Todo App',
    category: 'REACT.JS',
    img: todo,
    desc: 'Esta aplicación es el clásico Todo, pero con Tema(claro/oscuro), y drag and drop. Fue desarrollada con React y Tailwind. Se sumó la integración de una API REST personal creada con Express y MongoDB, para una Autenticación con JWT con access token y cookie, y autorización por roles',
    link: 'https://todo-ml.netlify.app/',
  },
  {
    title: 'URL Shortener',
    category: 'REACT.JS',
    img: urlShortening,
    desc: 'Esta aplicación permite al usuario generar una URL corta, con el fin de poder compartir una URL con sus amigos, fue desarrollada con React, styled components, axios y la API SHRTCODE',
    link: 'https://link-shortener-ml.netlify.app/',
  },
  {
    title: 'Menú App',
    category: 'REACT.JS',
    img: menuCreator,
    desc: 'Este es un proyecto personal, de una aplicación para crear menús, hace peticiones a una API externa para buscar platillos, y cuenta con una API personal en Node Express para la autenticación.',
    link: 'https://menuapp-ml.netlify.app/',
  },
  {
    title: 'In progress',
    category: 'REACT.JS',
    img: inProgress,
    desc: '',
    link: '',
  },
];

export default ProjectsList;
