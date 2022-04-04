export interface SkillsInterface {
  name: string;
  img: string;
}

const skills: SkillsInterface[] = [
  {
    name: 'Figma',
    img: require('infrastructure/assets/images/figmaLogo.png'),
  },
  {
    name: 'HTML',
    img: require('infrastructure/assets/images/htmlLogo.png'),
  },
  {
    name: 'CSS',
    img: require('infrastructure/assets/images/cssLogo.png'),
  },
  {
    name: 'Javascript',
    img: require('infrastructure/assets/images/javascriptLogo.png'),
  },
  {
    name: 'Bootstrap',
    img: require('infrastructure/assets/images/bootstrapLogo.png'),
  },
  {
    name: 'React',
    img: require('infrastructure/assets/images/reactLogo.png'),
  },
  {
    name: 'Redux',
    img: require('infrastructure/assets/images/reduxLogo.png'),
  },
  {
    name: 'CSS Modules',
    img: require('infrastructure/assets/images/cssModuleLogo.png'),
  },
  {
    name: 'Sass',
    img: require('infrastructure/assets/images/sassLogo.png'),
  },
  {
    name: 'Styled Components',
    img: require('infrastructure/assets/images/styledComponentsLogo.png'),
  },
  {
    name: 'Tailwind',
    img: require('infrastructure/assets/images/tailwindLogo.png'),
  },
  {
    name: 'Material Ui',
    img: require('infrastructure/assets/images/materialUILogo.png'),
  },
  {
    name: 'Node',
    img: require('infrastructure/assets/images/node.png'),
  },
  {
    name: 'Express',
    img: require('infrastructure/assets/images/expressjs.png'),
  },
];

export default skills;
