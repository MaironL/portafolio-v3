export interface jobsInterface {
  title: string;
  duties: string[];
  dates: string;
  company: string;
  id: string | number;
}

export const jobs: jobsInterface[] = [
  {
    title: 'Desarrollador Front-End Jr.',
    duties: [
      'Desarrollo de screens en multiples proyectos, junto con creacion de formas con sus validaciones mediante el uso de Formik',
      'Actualizacion del layout de la pagina principal de la empresa para incorporacion de un layout responsivo con CSS Grid',
      'Realizacion de peticiones a API Rest, y actualizacion de los datos en el store de Redux',
    ],
    dates: 'Mayo 2021 - Enero 2022',
    company: 'Ragnardsoft',
    id: '1',
  },
];

export default jobs;
