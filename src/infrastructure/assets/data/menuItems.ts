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
    img: require('infrastructure/assets/images/FyloDTLP-preview.jpg'),
    desc: 'Este es un proyecto de desafio para el reto "Fylo dark theme landing page" de la plataforma Frontend Mentor.',
    link: 'https://fylo-dark-theme-ml.netlify.app/',
  },
  {
    title: 'Expiration Date Checker',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/Expiration-date-checker.png'),
    desc: 'Este es un proyecto personal, donde mediante el uso de react se busca, agregar, borrar, y editar elementos agregados a una tabla.',
    link: 'https://expiration-date-checker-ml.netlify.app/',
  },
  {
    title: 'Shopping Cart',
    category: 'REACT.JS',
    img: require('infrastructure/assets/images/shoppingCart.png'),
    desc: 'En este proyecto se busca emular las caracteristicas principales de un Shopping Cart, como eliminar un elemento en particular(o todos), o aumentar y dismunir la cantidad de los mismos.',
    link: 'https://shopping-cart-ml.netlify.app/',
  },
];

export default menuItems;
