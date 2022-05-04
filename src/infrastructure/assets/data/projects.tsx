import { fyloLP, blogrLP, todo, urlShortening, menuCreator } from 'infrastructure/assets/images';

export interface Projects {
  title: string;
  category: string;
  img: string;
  desc: string;
  link: string;
}

export const ProjectsList: Projects[] = [
  {
    title: 'Fylo dark theme landing page',
    category: 'HTML/CSS',
    img: fyloLP,
    desc: 'Landing page desarrollada mediante el uso de HTML/CSS, la metodologia BEM y SASS',
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
    desc: 'Esta aplicacion es el clasico Todo, pero con Tema(claro/oscuro), drag and drop, fue desarrollada con React, Tailwind. Aparte de esto, desarrolle una API REST con Node, Express, MongoDB y Mongoose, para una Authentication con JWT mediante uso de access token, refresh token, y autorizacion por roles',
    link: 'https://todo-ml.netlify.app/',
  },
  {
    title: 'URL Shortener',
    category: 'REACT.JS',
    img: urlShortening,
    desc: 'Esta aplicacion permite al usuario generar una URL corta, con el fin de poder compartir una URL con sus amigos, fue desarrollada con React, styled components, axios y la API SHRTCODE',
    link: 'https://link-shortener-ml.netlify.app/',
  },
  {
    title: 'MenuApp',
    category: 'REACT.JS',
    img: menuCreator,
    desc: 'Este es un proyecto personal, de una aplicacion para crear menus, hace peticiones a una API externa para buscar platillos, y cuenta con una API personal en Node Express para la autenticacion.',
    link: 'https://menuapp-ml.netlify.app/',
  },
];

export default ProjectsList;
