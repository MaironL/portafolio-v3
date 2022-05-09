import styled, { createGlobalStyle } from 'styled-components';
import { animated } from 'react-spring';

const GlobalStyle = createGlobalStyle`

:root {
  
/*
* =============== 
* Variables
* ===============
*/
--count: calc(-1rem * 10px);
/*
* Logo Orange
*/
--clr-logo-orange: hsl(32, 51%, 48%);
--clr-logo-bg: 	hsl(0, 0%, 8%);

/*
* Dark shades of primary color 
*/
--clr-primary-1: hsl(205, 86%, 17%);
--clr-primary-2: hsl(205, 77%, 27%);
--clr-primary-3: hsl(205, 72%, 37%);
--clr-primary-4: hsl(205, 63%, 48%);
/* 
* Primary/main color 
*/
--clr-primary-5: hsl(205, 78%, 60%);
/* 
* Lighter shades of primary color 
*/
--clr-primary-6: hsl(205, 89%, 70%);
--clr-primary-7: hsl(205, 90%, 76%);
--clr-primary-8: hsl(205, 86%, 81%);
--clr-primary-9: hsl(205, 90%, 88%);
--clr-primary-10: hsl(205, 100%, 96%);
/* 
* Darkest grey - used for headings 
*/
--clr-grey-1: hsl(209, 61%, 16%);
--clr-grey-2: hsl(211, 39%, 23%);
--clr-grey-3: hsl(209, 34%, 30%);
--clr-grey-4: hsl(209, 28%, 39%);
/*
* Grey used for paragraphs 
*/
--clr-grey-5: hsl(210, 22%, 49%);
--clr-grey-6: hsl(209, 23%, 60%);
--clr-grey-7: hsl(211, 27%, 70%);
--clr-grey-8: hsl(210, 31%, 80%);
--clr-grey-9: hsl(212, 33%, 89%);
--clr-grey-10: hsl(210, 36%, 96%);
--clr-white: #fff;
--clr-black: #202020;
--clr-black-glass: hsl(0, 0%, 13%, 0.90);
/* 
* for backgrounds 
*/
--clr-bg-1: #343232;
--clr-bg-2: #282828;
/*
* Trinkes 
*/
--clr-util-grey: hsl(0, 0%, 34%);
--slow-transition: all 0.3s linear;
--fast-transition: all 0.1s linear;
--spacing: 0.1rem;
--radius: 0.25rem;
--light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
--dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
--grey-shadow: -1px 0.5px 1px hsl(0, 0%, 34%);
--shadow: 6px 4px 4px rgba(0, 0, 0, 0.25);
--shadow-click: 5px 10px 10px #000000 inset;
}

/*
* =============== 
* Global Styles
* ===============
*/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
} 

:root {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

@media screen and (min-width: 280px) {
  :root {
    font-size: calc(14px + 2.6 * ((100vw - 280px) / 1640));
  }
  p {
    line-height: calc(19.6px + 5 * ((100vw - 280px) / 1640));
  }
}

@media screen and (min-width: 1920px) {
  :root {
    font-size: calc(16.6px + 7.4 * ((100vw - 1920px) / 640));
  }
  p {
    line-height: calc(24.6px + 11.4 * ((100vw - 1920px) / 640));
  }
}

@media screen and (min-width: 2560px) {
  :root {
    font-size: 24px;
  }

  p {
    line-height: 36px;
  }
}

ul {
  list-style-type: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.25rem;
}

h4 {
  font-size: 0.875rem;
}

p {
  margin-bottom: 1.25rem;
  color: var(--clr-grey-9);
}

/*
* ==================== 
* Custom Project Style
* ====================
*/

#root {
  display: grid;
  grid: 
  [row1-start] "navbar" 90px  [row1-end]   
  [row2-start] "main" calc(100vh - 90px) [row2-end]
  / auto ;
  min-height: 100%;
  background-color: var(--clr-bg-2);
  

  @media screen and (min-width:1200px) {
    grid: 
    [row1-start] "navbar main" 50vh  [row1-end]   
    [row2-start] "navbar main" 50vh [row2-end]
    / 120px auto ;
    
  }

  @media screen and (min-width:1600px) {
    grid: 
    [row1-start] "navbar main" 50vh  [row1-end]   
    [row2-start] "navbar main" 50vh [row2-end]
    / 10vw auto ;
    
  }
}
`;

export const animDiv = styled(animated.div)``;

export const MainHeader = styled.header`
  width: fit-content;
  margin-top: 5%;
  margin-left: 5%;

  & h1 {
    font-size: 2.65rem;
    color: var(--clr-grey-10);
  }

  & hr {
    border: solid 1px var(--clr-primary-5);
    margin-bottom: max(80px, 12vh);
    max-width: 100%;
  }
`;

export const Section = styled.section`
  width: min(1440px, 75%);
  background-color: var(--clr-bg-1);
  padding-top: 10%;
  border-radius: 5px;
  margin: 0 auto max(80px, 12vh) auto;
  padding-bottom: 30px;

  @media screen and (min-width: 600px) {
    padding-top: 8%;
  }
`;

export default GlobalStyle;
