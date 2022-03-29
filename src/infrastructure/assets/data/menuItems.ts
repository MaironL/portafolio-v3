export interface menuItemsInterface {
  title: string;
  category: string;
  img: string;
  desc: string;
  link: string;
}

export const menuItems: menuItemsInterface[] = [
  {
    title: 'Fylo dark theme landing page',
    category: 'HTML/CSS',
    img: require('infrastructure/assets/images/FyloDTLP-preview.png'),
    desc: 'Landing page desarrollada mediante el uso de HTML/CSS, la metodologia BEM y SASS',
    link: 'https://fylo-dark-theme-ml.netlify.app/',
  },
  {
    title: 'blogr landing page main',
    category: 'HTML/CSS',
    img: require('infrastructure/assets/images/blogrLandingPageMain.png'),
    desc: 'Landing page desarrollada mediante el uso de HTML y Tailwind para los estilos',
    link: 'https://blogr-landing-page-main-ml.netlify.app/',
  },
  {
    title: 'To Do App',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/Todo-App.png'),
    desc: 'Este aplicacion de To Do contiene todos los elementos de una aplicacion CRUD, cambio de Tema(claro/oscuro) y drag and drop, fue desarrollada con React, Tailwind',
    link: 'https://todo-ml.netlify.app/',
  },
  {
    title: 'MenuApp',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/menuAppPreview.jpg'),
    desc: 'Este es un proyecto personal, de una aplicacion para crear menus, hace peticiones a una API externa para buscar platillos, y cuenta con una API personal en Node Express para la autenticacion.',
    link: 'https://menuapp-ml.netlify.app/',
  },
];

export default menuItems;
