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
    title: 'Todo App',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/Todo-App.png'),
    desc: 'Esta aplicacion es el clasico Todo, pero con Tema(claro/oscuro), drag and drop, fue desarrollada con React, Tailwind. Aparte de esto, desarrolle una API REST con Node, Express, MongoDB y Mongoose, para una Authentication con JWT mediante uso de access token, refresh token, y autorizacion por roles',
    link: 'https://todo-ml.netlify.app/',
  },
  {
    title: 'URL Shortener',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/urlShorteningPreview.jpg'),
    desc: 'Esta aplicacion permite al usuario generar una URL corta, con el fin de poder compartir una URL con sus amigos, fue desarrollada con React, styled components, axios y la API SHRTCODE',
    link: 'https://link-shortener-ml.netlify.app/',
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
