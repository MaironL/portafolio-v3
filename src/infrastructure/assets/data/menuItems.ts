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
    title: 'Pomodoro Timer',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/pomodoroTimer.png'),
    desc: 'Un pequeño contador pomodoro, como ultimo proyecto de la plataforma FreeCodeCamp, se puede elegir el tiempo de trabajo y descanso, y contiene una alarma al terminar cada sesión.',
    link: 'https://pomodoro-timer-ml.netlify.app/',
  },
];

export default menuItems;
