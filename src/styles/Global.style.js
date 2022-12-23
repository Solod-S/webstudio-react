import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import '@csstools/normalize.css';
export const GlobalStyle = createGlobalStyle`
:root {
  /* // -------------COLORS-------------- */

  --primaryAccentColor: #2196f3;
  --primaryWhiteColor: #ffffff;
  --primaryBlackColor: #000000;
  --primaryTextColor: #757575;
  --primaryTitleColor: #212121;
  --primaryBgColor: #f5f4fa;
  --secondaryBgColor: #2f303a;
  --thrdBgColor: #afb1b8;
  --labelColor: #757575;

  /* // -------------BREAKPOINTS-------------- */

  --breakpointBeeforeTell: 479px;
  --breakpointTell: 480px;
  --breakpointBeeforeTablet: 767px;
  --breakpointTablet: 768px;
  --breakpointBeeforeDesktop: 1199px;
  --breakpointDesktop: 1200px;
}

h1,
h2,
h3,
h4 {
  color: var(--primaryTitleColor);
}

h1,
h2,
h3,
h4,
p,
ul {
  margin-top: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
  padding-left: 0;
}

button {
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

body {
  background-color: var(--primaryWhiteColor);
  color: var(--primaryTextColor);

  font-family: 'Roboto', sans-serif;
  scroll-behavior: smooth;
}

.img {
  display: block;
  max-width: 100%;
  height: auto;
}
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: var(--breakpointTell)) {
    width: var(--breakpointTell);
  }
  @media screen and (min-width: var(--breakpointTablet)) {
    width: var(--breakpointTablet);
  }
  @media screen and (min-width: var(--breakpointDesktop)) {
    width: var(--breakpointDesktop);
  }
}

.section {
  padding-top: 60px;
  padding-bottom: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    padding-top: 94px;
    padding-bottom: 94px;
  }
}

`;
