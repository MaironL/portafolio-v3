export interface jobsInterface {
  title: string;
  duties: string[];
  dates: string;
  company: string;
  id: string | number;
}

export const jobs: jobsInterface[] = [
  {
    title: 'Desarrollador Front-End',
    duties: [
      'Maquetación de múltiples proyectos, y validación de formas mediante el uso de JavaScript simple o la librería Formik.',
      'Desarrollo de componentes y funcionalidades de forma modular, con el uso de React Hooks.',
      'Actualización de la pagina de la empresa para soporte de responsividad con CSS Grid y Flexbox.',
      'Peticiones a API Rest, y actualización de los  datos en el store de React-Redux.',
      'Refactorización código de CSS y JavaScript.',
    ],
    dates: 'Mayo 2021 - Enero 2022',
    company: 'Ragnardsoft',
    id: '1',
  },
];

export default jobs;
