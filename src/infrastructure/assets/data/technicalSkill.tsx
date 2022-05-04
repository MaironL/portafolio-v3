import {
  figma,
  HTML5,
  CSS3,
  CSSModule,
  sass,
  bootstrap,
  tailwind,
  javascript,
  styledComp,
  react,
  redux,
  materialUI,
  node,
  express,
} from 'infrastructure/assets/images';

export interface Skills {
  name: string;
  img: string;
}

const skillsList: Skills[] = [
  {
    name: 'Figma',
    img: figma,
  },
  {
    name: 'HTML',
    img: HTML5,
  },
  {
    name: 'CSS',
    img: CSS3,
  },
  {
    name: 'Javascript',
    img: javascript,
  },
  {
    name: 'Bootstrap',
    img: bootstrap,
  },
  {
    name: 'React',
    img: react,
  },
  {
    name: 'Redux',
    img: redux,
  },
  {
    name: 'CSS Modules',
    img: CSSModule,
  },
  {
    name: 'Sass',
    img: sass,
  },
  {
    name: 'Styled Components',
    img: styledComp,
  },
  {
    name: 'Tailwind',
    img: tailwind,
  },
  {
    name: 'Material Ui',
    img: materialUI,
  },
  {
    name: 'Node',
    img: node,
  },
  {
    name: 'Express',
    img: express,
  },
];

export default skillsList;
